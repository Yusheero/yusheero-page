<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { terminalData, voightKampffQuestions } from './terminal-data.js';
import { TerminalGames } from './terminal-game.js';
import './terminal-styles.scss';

// Reference to terminal container
const terminalRef = ref(null);
const cursorRef = ref(null);

// Параметры терминала
const isTerminalOn = ref(false);
const isTerminalBooted = ref(false);
const terminalText = ref('');
const bootingProgress = ref(0);
const inputText = ref('');
const terminalHistory = ref([]);
const cursorVisible = ref(true);
const currentCommand = ref('');
const isFullScreen = ref(false);

// Добавим параметры для визуальных эффектов
const currentColorScheme = ref('green'); // green, amber, blue
const isGlitchActive = ref(false);
const isStaticActive = ref(false);

// Replicant test flags
const isVoightKampffTestActive = ref(false);
const currentVoightKampffQuestion = ref(0);
const voightKampffPassed = ref(false);
const voightKampffAttempts = ref(0);

// Current print position and typing speed
let currentTextPosition = 0;
let typingInterval;
let cursorBlinkInterval;
let bootSequenceTimeout;

// Инициализация игр
const terminalGames = new TerminalGames();

// Переменные для активной игры
const activeGame = ref(null);

// Terminal boot simulation
const bootTerminal = () => {
  isTerminalOn.value = true;
  bootingProgress.value = 0;
  terminalHistory.value = []; // Clear history
  
  // Активируем эффект глитча при загрузке
  triggerGlitchEffect(1000);
  
  // Simulate flickering when turning on (old CRT effect)
  const terminalElement = document.querySelector('.retro-terminal-container');
  if (terminalElement) {
    terminalElement.classList.add('power-on');
    setTimeout(() => {
      terminalElement.classList.remove('power-on');
    }, 1000);
  }
  
  // Simulate loading with occasional stutters for authenticity
  const bootInterval = setInterval(() => {
    // Random progress increments with occasional pauses
    if (Math.random() > 0.2) { // 80% chance to increment
      bootingProgress.value += Math.random() * 5;
    }
    
    // Occasionally show a slight stutter in the loading
    if (Math.random() > 0.95 && bootingProgress.value > 10 && bootingProgress.value < 90) {
      bootingProgress.value -= Math.random() * 2; // Slight backwards movement
    }
    
    if (bootingProgress.value >= 100) {
      bootingProgress.value = 100;
      clearInterval(bootInterval);
      
      // After progress bar is filled, wait a moment before proceeding
      bootSequenceTimeout = setTimeout(() => {
        // Now transition to the boot message screen
        isTerminalBooted.value = true;
        
        // Clear history and start printing boot messages
        setTimeout(() => {
          terminalText.value = ''; // Ensure no partial text is displayed
          printTextToTerminal(terminalData.bootMessages.join('\n'));
          
          // After boot messages are complete, show welcome message
          setTimeout(() => {
            printTextToTerminal(terminalData.welcomeMessage.join('\n'));
            startCursorBlink();
          }, terminalData.bootMessages.join('\n').length * 15 + 1000);
        }, 500);
      }, 800);
    }
  }, 100);
};

// Print text with typewriter effect
const printTextToTerminal = (text) => {
  if (typingInterval) {
    clearInterval(typingInterval);
  }
  
  currentTextPosition = 0;
  terminalText.value = '';
  
  typingInterval = setInterval(() => {
    if (currentTextPosition < text.length) {
      // Simulate random delays for more realistic typing effect
      if (Math.random() > 0.95) {
        setTimeout(() => {
          terminalText.value += text[currentTextPosition];
          currentTextPosition++;
          scrollToBottom();
        }, 50 + Math.random() * 100);
      } else {
        terminalText.value += text[currentTextPosition];
        currentTextPosition++;
        scrollToBottom();
      }
    } else {
      clearInterval(typingInterval);
      terminalHistory.value.push(terminalText.value);
      terminalText.value = '';
      scrollToBottom();
    }
  }, 15); // Typing speed
};

// Start the Voight-Kampff test
const startVoightKampffTest = () => {
  isVoightKampffTestActive.value = true;
  currentVoightKampffQuestion.value = 0;
  
  printTextToTerminal(terminalData.contactForm.join('\n'));
  
  // Show the first question after a delay
  setTimeout(() => {
    askVoightKampffQuestion();
  }, terminalData.contactForm.join('\n').length * 15 + 1000);
};

// Ask the current Voight-Kampff question
const askVoightKampffQuestion = () => {
  if (currentVoightKampffQuestion.value >= voightKampffQuestions.length) {
    // Test completed
    completeVoightKampffTest();
    return;
  }
  
  const question = voightKampffQuestions[currentVoightKampffQuestion.value];
  
  let questionText = `>>> QUESTION ${currentVoightKampffQuestion.value + 1}/${voightKampffQuestions.length}:\n${question.question}\n`;
  
  printTextToTerminal(questionText);
};

// Process the answer to the current Voight-Kampff question
const processVoightKampffAnswer = (answer) => {
  const currentQuestion = voightKampffQuestions[currentVoightKampffQuestion.value];
  const answerUpperCase = answer.toUpperCase().trim();
  
  // Record the answer
  terminalHistory.value.push(`> ${answer}`);
  
  // Determine if the answer is "human-like"
  let isHumanLikeResponse = false;
  
  // Проверяем, есть ли ответ пользователя в списке правильных ответов
  if (currentQuestion.correctAnswers.includes(answerUpperCase)) {
    isHumanLikeResponse = true;
  } else if (currentQuestion.incorrectAnswers.includes(answerUpperCase)) {
    isHumanLikeResponse = false;
  } else {
    // Если ответ не найден ни в правильных, ни в неправильных ответах,
    // проверяем, содержит ли он какой-либо из правильных ответов
    isHumanLikeResponse = currentQuestion.correctAnswers.some(
      correctAnswer => answerUpperCase.includes(correctAnswer)
    );
  }
  
  // Анализ ответа
  let analysisText = '';
  if (isHumanLikeResponse) {
    analysisText = [
      '>>> ANALYZING RESPONSE...',
      '>>> Pupil dilation: NORMAL',
      '>>> Respiration rate: WITHIN HUMAN PARAMETERS',
      '>>> Response latency: ACCEPTABLE',
      ''
    ].join('\n');
  } else {
    analysisText = [
      '>>> ANALYZING RESPONSE...',
      '>>> Pupil dilation: ABNORMAL',
      '>>> Respiration rate: ELEVATED',
      '>>> Response latency: SUSPICIOUS',
      ''
    ].join('\n');
  }
  
  printTextToTerminal(analysisText);
  
  // Proceed to the next question
  setTimeout(() => {
    if (isHumanLikeResponse) {
      currentVoightKampffQuestion.value++;
      
      // If there are more questions, ask the next one
      if (currentVoightKampffQuestion.value < voightKampffQuestions.length) {
        askVoightKampffQuestion();
      } else {
        // Test completed successfully
        voightKampffPassed.value = true;
        completeVoightKampffTest();
      }
    } else {
      // Display warning about wrong answer
      printTextToTerminal(terminalData.wrongAnswer.join('\n'));
      
      // Delay before failing the test
      setTimeout(() => {
        // Failed the test
        failVoightKampffTest();
      }, terminalData.wrongAnswer.join('\n').length * 15 + 1000);
    }
  }, analysisText.length * 15 + 1000);
};

// Complete the Voight-Kampff test
const completeVoightKampffTest = () => {
  if (voightKampffPassed.value) {
    printTextToTerminal(terminalData.contactSuccess.join('\n'));
    
    // After success message, finish test
    setTimeout(() => {
      isVoightKampffTestActive.value = false;
    }, terminalData.contactSuccess.join('\n').length * 15 + 1000);
  } else {
    failVoightKampffTest();
  }
};

// Fail the Voight-Kampff test
const failVoightKampffTest = () => {
  voightKampffAttempts.value++;
  printTextToTerminal(terminalData.errorMessages[1]);
  
  // Reset the terminal after failure
  setTimeout(() => {
    isVoightKampffTestActive.value = false;
    
    // If too many attempts, lock them out completely
    if (voightKampffAttempts.value >= 3) {
      shutdownTerminal();
    } else {
      // Just reboot the terminal
      rebootTerminal();
    }
  }, 3000);
};

// Reboot the terminal
const rebootTerminal = () => {
  // Остановим любой процесс печати
  if (typingInterval) {
    clearInterval(typingInterval);
    typingInterval = null;
  }
  
  // Сбросим текущий текст
  terminalText.value = '';
  
  // First indicate rebooting
  terminalHistory.value = []; // Очистим историю перед сообщением о перезагрузке
  printTextToTerminal('>>> REBOOTING SYSTEM...');
  
  // Активируем эффект глитча при перезагрузке
  triggerGlitchEffect(1500);
  
  // Reset terminal state but keep attempt count
  setTimeout(() => {
    // Set boot progress to 0 immediately
    bootingProgress.value = 0;
    // Disable terminal booted state BEFORE showing the boot screen
    isTerminalBooted.value = false;
    
    // Show "rebooting" message for a moment before starting the boot sequence
    setTimeout(() => {
      // Simulate loading
      const bootInterval = setInterval(() => {
        bootingProgress.value += Math.random() * 8; // Slightly faster reboot
        if (bootingProgress.value >= 100) {
          bootingProgress.value = 100;
          clearInterval(bootInterval);
          
          // After progress bar is filled, wait a moment
          bootSequenceTimeout = setTimeout(() => {
            // Now transition to the boot screen
            isTerminalBooted.value = true;
            
            // Start printing boot messages
            setTimeout(() => {
              terminalText.value = ''; // Ensure no partial text is displayed
              printTextToTerminal(terminalData.bootMessages.join('\n'));
              
              // After boot messages are complete, show welcome message
              setTimeout(() => {
                printTextToTerminal(terminalData.welcomeMessage.join('\n'));
                startCursorBlink();
              }, terminalData.bootMessages.join('\n').length * 15 + 800);
            }, 500);
          }, 800);
        }
      }, 100);
    }, 2000);
  }, 1500);
};

// Обработка команд
const handleCommand = () => {
  if (!currentCommand.value.trim()) return;
  
  // Если активна игра
  if (activeGame.value) {
    const input = currentCommand.value.trim();
    terminalHistory.value.push(`> ${currentCommand.value}`);
    currentCommand.value = '';
    
    // Обрабатываем ввод для активной игры
    const result = activeGame.value.handleCommand(input);
    if (result) {
      printTextToTerminal(result.join('\n'));
    }
    
    // Если игра завершена, сбрасываем активную игру
    if (!activeGame.value.isActive) {
      activeGame.value = null;
    }
    
    return;
  }
  
  // Если Voight-Kampff тест активен, обрабатываем ответ как ответ на тест
  if (isVoightKampffTestActive.value) {
    const answer = currentCommand.value.trim();
    currentCommand.value = '';
    processVoightKampffAnswer(answer);
    return;
  }
  
  const command = currentCommand.value.trim().toUpperCase();
  terminalHistory.value.push(`> ${currentCommand.value}`);
  currentCommand.value = '';
  
  // Обработка команд
  switch (command) {
    case 'HELP':
      printTextToTerminal(terminalData.helpText.join('\n'));
      break;
    case 'SKILLS':
      printTextToTerminal(terminalData.skills.join('\n'));
      break;
    case 'PROJECTS':
      printTextToTerminal(terminalData.projects.join('\n'));
      break;
    case 'ABOUT':
      printTextToTerminal(terminalData.aboutMe.join('\n'));
      break;
    case 'BLOG':
      printTextToTerminal(terminalData.blog.join('\n'));
      break;
    case 'SERVICES':
      printTextToTerminal(terminalData.services.join('\n'));
      break;
    case 'LS':
      printTextToTerminal(terminalData.directory.join('\n'));
      break;
    case 'CONTACT':
      if (voightKampffPassed.value) {
        printTextToTerminal(terminalData.contactSuccess.join('\n'));
      } else {
        printTextToTerminal(terminalData.accessDenied.join('\n'));
        
        // Start the Voight-Kampff test after a delay
        setTimeout(() => {
          startVoightKampffTest();
        }, 2000);
      }
      break;
    case 'CLEAR':
      terminalHistory.value = [];
      break;
    case 'OFF':
      shutdownTerminal();
      break;
    case 'GAME':
    case 'GAMES':
      printTextToTerminal(terminalData.gameHelp.join('\n'));
      break;
    case 'GUESS':
      if (terminalGames.hasGame('guess')) {
        activeGame.value = terminalGames.getGame('guess');
        const introMessage = activeGame.value.start();
        printTextToTerminal(introMessage.join('\n'));
      }
      break;
    case 'THEME':
      printTextToTerminal(terminalData.themeHelp.join('\n'));
      break;
    default:
      // Проверка команд с параметрами
      if (command.startsWith('BLOG -')) {
        handleBlogCommand(command);
      } else if (command.startsWith('THEME ')) {
        const themeName = command.split(' ')[1];
        changeColorScheme(themeName);
      } else {
        printTextToTerminal(terminalData.unknownCommand.join('\n'));
        triggerGlitchEffect(300); // Небольшой эффект помех при ошибке
      }
  }
  
  scrollToBottom();
};

// Обработка команд блога с параметрами
const handleBlogCommand = (command) => {
  if (command.startsWith('BLOG -FULL')) {
    // Проверяем, есть ли номер статьи
    const parts = command.split(' ');
    const articleNumber = parts[2] ? parseInt(parts[2]) : 1;
    
    if (articleNumber && terminalData.blogFull[articleNumber]) {
      printTextToTerminal(terminalData.blogFull[articleNumber].join('\n'));
    } else {
      printTextToTerminal([
        '>>> ERROR: ARTICLE NOT FOUND',
        '>>> USAGE: BLOG -FULL [number]',
        '>>> AVAILABLE ARTICLES: 1, 2, 3',
        ''
      ].join('\n'));
    }
  } else {
    printTextToTerminal([
      '>>> ERROR: UNKNOWN BLOG COMMAND',
      '>>> AVAILABLE BLOG COMMANDS:',
      '    BLOG       - list recent posts',
      '    BLOG -FULL [number] - show full article',
      ''
    ].join('\n'));
  }
};

// Terminal shutdown
const shutdownTerminal = () => {
  printTextToTerminal('>>> SHUTTING DOWN SYSTEM...');
  
  setTimeout(() => {
    isTerminalBooted.value = false;
    isTerminalOn.value = false;
    clearAllIntervals();
  }, 2000);
};

// Keyboard input handler
const handleKeyDown = (e) => {
  if (!isTerminalBooted.value) return;
  
  if (e.key === 'Enter') {
    handleCommand();
  }
};

// Cursor blinking
const startCursorBlink = () => {
  if (cursorBlinkInterval) {
    clearInterval(cursorBlinkInterval);
  }
  
  cursorBlinkInterval = setInterval(() => {
    cursorVisible.value = !cursorVisible.value;
  }, 530); // Cursor blink frequency
};

// Auto-scroll to terminal bottom
const scrollToBottom = () => {
  if (terminalRef.value) {
    setTimeout(() => {
      terminalRef.value.scrollTop = terminalRef.value.scrollHeight;
    }, 10);
  }
};

// Clear all intervals
const clearAllIntervals = () => {
  if (typingInterval) clearInterval(typingInterval);
  if (cursorBlinkInterval) clearInterval(cursorBlinkInterval);
  if (bootSequenceTimeout) clearTimeout(bootSequenceTimeout);
};

// Функция для переключения полноэкранного режима
const toggleFullScreen = () => {
  isFullScreen.value = !isFullScreen.value;
  
  // После переключения в полноэкранный режим перематываем терминал вниз
  if (isFullScreen.value) {
    setTimeout(() => {
      scrollToBottom();
    }, 300);
  }
};

// Функция для смены цветовой схемы
const changeColorScheme = (theme) => {
  const validThemes = ['GREEN', 'AMBER', 'BLUE'];
  const themeName = theme.toUpperCase();
  
  if (!validThemes.includes(themeName)) {
    printTextToTerminal([
      `>>> ERROR: INVALID THEME "${theme}"`,
      '>>> AVAILABLE THEMES: GREEN, AMBER, BLUE',
      ''
    ].join('\n'));
    triggerGlitchEffect(300);
    return;
  }
  
  // Активируем эффект глитча при смене темы
  triggerGlitchEffect(1000);
  
  // Устанавливаем новую тему
  currentColorScheme.value = themeName.toLowerCase();
  
  printTextToTerminal([
    `>>> TERMINAL COLOR SCHEME CHANGED TO: ${themeName}`,
    '>>> SYSTEM RECALIBRATING DISPLAY PARAMETERS...',
    '>>> DISPLAY RECALIBRATION COMPLETE',
    ''
  ].join('\n'));
};

// Функция для создания эффекта глитча/помех
const triggerGlitchEffect = (duration = 500) => {
  isGlitchActive.value = true;
  
  setTimeout(() => {
    isGlitchActive.value = false;
  }, duration);
};

// Component lifecycle
onMounted(() => {
  window.addEventListener('keydown', handleKeyDown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown);
  clearAllIntervals();
});
</script>

<template>
  <div class="retro-terminal-container" 
       :class="{
         'fullscreen': isFullScreen, 
         'theme-green': currentColorScheme === 'green',
         'theme-amber': currentColorScheme === 'amber',
         'theme-blue': currentColorScheme === 'blue',
         'glitch-effect': isGlitchActive
       }">
    <!-- Expand/collapse button -->
    <button v-if="isTerminalOn && isTerminalBooted" class="expand-button" @click.stop="toggleFullScreen">
      <div class="expand-icon">{{ isFullScreen ? '▼' : '▲' }}</div>
    </button>
    
    <!-- Turned off terminal screen -->
    <div v-if="!isTerminalOn" class="terminal-off" @click="bootTerminal">
      <div class="terminal-off-text">
        CLICK TO POWER ON TERMINAL
      </div>
      <div class="system-info">
        YUSHEERO OS v1.0.666 | STANDBY MODE | POWER SAVING ENABLED
      </div>
      <div class="scanlines"></div>
      <div class="terminal-glow"></div>
    </div>
    
    <!-- Loading screen -->
    <div v-else-if="!isTerminalBooted" class="terminal-booting">
      <div class="boot-progress">
        <div class="boot-progress-bar" :style="{ width: bootingProgress + '%' }"></div>
      </div>
      <div class="boot-text">SYSTEM LOADING... {{ Math.floor(bootingProgress) }}%</div>
      <div class="boot-info">
        INITIALIZING MEMORY | CONFIGURING INTERFACE | LOADING CORE MODULES
      </div>
      <div class="scanlines"></div>
      <div class="terminal-glow"></div>
    </div>
    
    <!-- Working terminal -->
    <div v-else class="terminal-screen">
      <div class="terminal-content" ref="terminalRef">
        <div class="terminal-history">
          <div v-for="(line, index) in terminalHistory" :key="index" class="terminal-line" v-html="line.replace(/\n/g, '<br>')"></div>
        </div>
        
        <div class="terminal-current-line" v-if="terminalText">
          <div v-html="terminalText.replace(/\n/g, '<br>')"></div>
        </div>
        
        <div class="terminal-input">
          <span class="terminal-prompt">&gt;</span>
          <input 
            type="text" 
            v-model="currentCommand" 
            class="terminal-command-input"
            :class="{ 'cursor-visible': cursorVisible }"
            @keydown.enter="handleCommand"
            autofocus
          />
        </div>
      </div>
      
      <div class="scanlines"></div>
      <div class="terminal-glow"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

$terminal-green: #4afa9a;
$terminal-dark-green: #052505;
$terminal-amber: #ffb000;
$terminal-dark-amber: #251500;
$terminal-blue: #00ccff;
$terminal-dark-blue: #001825;

.retro-terminal-container {
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  background-color: #000;
  box-shadow: 0 0 20px rgba(0, 255, 0, 0.3), inset 0 0 40px rgba(0, 0, 0, 0.8);
  font-family: 'VT323', monospace;
  color: $terminal-green;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  z-index: 1;
  
  // Зеленая тема (по умолчанию)
  &.theme-green {
    color: $terminal-green;
    background-color: $terminal-dark-green;
    box-shadow: 0 0 20px rgba(0, 255, 0, 0.3), inset 0 0 40px rgba(0, 0, 0, 0.8);
    
    .terminal-command-input {
      color: $terminal-green;
    }
    
    .terminal-screen {
      background-color: $terminal-dark-green;
    }
    
    .boot-progress-bar {
      background-color: $terminal-green;
    }
    
    .terminal-glow {
      box-shadow: inset 0 0 150px rgba($terminal-green, 0.1);
    }
    
    .expand-button {
      border-color: $terminal-green;
      .expand-icon {
        color: $terminal-green;
      }
    }
  }
  
  // Янтарная тема
  &.theme-amber {
    color: $terminal-amber;
    background-color: $terminal-dark-amber;
    box-shadow: 0 0 20px rgba(255, 176, 0, 0.3), inset 0 0 40px rgba(0, 0, 0, 0.8);
    
    .terminal-command-input {
      color: $terminal-amber;
    }
    
    .terminal-screen {
      background-color: $terminal-dark-amber;
    }
    
    .boot-progress-bar {
      background-color: $terminal-amber;
    }
    
    .terminal-glow {
      box-shadow: inset 0 0 150px rgba($terminal-amber, 0.1);
    }
    
    .expand-button {
      border-color: $terminal-amber;
      .expand-icon {
        color: $terminal-amber;
      }
    }
  }
  
  // Синяя тема
  &.theme-blue {
    color: $terminal-blue;
    background-color: $terminal-dark-blue;
    box-shadow: 0 0 20px rgba(0, 204, 255, 0.3), inset 0 0 40px rgba(0, 0, 0, 0.8);
    
    .terminal-command-input {
      color: $terminal-blue;
    }
    
    .terminal-screen {
      background-color: $terminal-dark-blue;
    }
    
    .boot-progress-bar {
      background-color: $terminal-blue;
    }
    
    .terminal-glow {
      box-shadow: inset 0 0 150px rgba($terminal-blue, 0.1);
    }
    
    .expand-button {
      border-color: $terminal-blue;
      .expand-icon {
        color: $terminal-blue;
      }
    }
  }
  
  // Эффект глитча
  &.glitch-effect {
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -10%;
      width: 120%;
      height: 100%;
      background: linear-gradient(
        transparent 0%,
        rgba(255, 255, 255, 0.2) 50%,
        transparent 100%
      );
      transform: skewX(-20deg);
      animation: glitch-scan 0.5s linear infinite;
      z-index: 10;
      pointer-events: none;
    }
    
    .terminal-line, .terminal-current-line, .terminal-prompt, .terminal-command-input, .boot-text, .boot-info {
      animation: glitch-text 0.2s ease-in-out infinite;
    }
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 30px;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), transparent);
    z-index: 3;
    pointer-events: none;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 30px;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
    z-index: 3;
    pointer-events: none;
  }
  
  // Стили для полноэкранного режима
  &.fullscreen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    border-radius: 0;
    z-index: 9999;
  }
}

.terminal-off {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000;
  cursor: pointer;
  position: relative;
  
  &-text {
    color: rgba($terminal-green, 0.3);
    font-size: 24px;
    letter-spacing: 2px;
    text-transform: uppercase;
    animation: pulse 2s infinite;
    text-shadow: 0 0 5px rgba($terminal-green, 0.5);
    margin-bottom: 20px;
  }
  
  .system-info {
    color: rgba($terminal-green, 0.15);
    font-size: 14px;
    letter-spacing: 1px;
    margin-top: 30px;
    font-family: 'VT323', monospace;
  }
}

.terminal-booting {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: $terminal-dark-green;
  position: relative;
  
  .boot-progress {
    width: 70%;
    height: 30px;
    background-color: rgba($terminal-dark-green, 0.7);
    border: 2px solid $terminal-green;
    border-radius: 4px;
    margin-bottom: 30px;
    overflow: hidden;
    position: relative;
    box-shadow: 0 0 10px rgba($terminal-green, 0.3);
    
    &-bar {
      height: 100%;
      background-color: $terminal-green;
      background-image: linear-gradient(
        45deg,
        rgba(255, 255, 255, 0.15) 25%,
        transparent 25%,
        transparent 50%,
        rgba(255, 255, 255, 0.15) 50%,
        rgba(255, 255, 255, 0.15) 75%,
        transparent 75%,
        transparent
      );
      background-size: 30px 30px;
      transition: width 0.1s ease-out;
    }
  }
  
  .boot-text {
    font-size: 24px;
    letter-spacing: 2px;
    text-shadow: 0 0 5px rgba($terminal-green, 0.7);
    margin-bottom: 20px;
    font-family: 'VT323', monospace;
  }
  
  .boot-info {
    font-size: 16px;
    letter-spacing: 1px;
    color: rgba($terminal-green, 0.7);
    margin-top: 30px;
    text-shadow: 0 0 3px rgba($terminal-green, 0.5);
    animation: flicker 2s infinite;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      ellipse at center,
      transparent 50%,
      rgba(0, 0, 0, 0.3) 100%
    );
    z-index: 1;
    pointer-events: none;
  }
}

.terminal-screen {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: $terminal-dark-green;
  overflow: hidden;
  padding: 20px 20px 20px 30px;
  
  .terminal-content {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    position: relative;
    z-index: 2;
    
    &::-webkit-scrollbar {
      width: 8px;
    }
    
    &::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.2);
    }
    
    &::-webkit-scrollbar-thumb {
      background: rgba($terminal-green, 0.5);
      border-radius: 4px;
    }
  }
  
  .terminal-history {
    margin-bottom: 10px;
  }
  
  .terminal-line {
    line-height: 1.3;
    white-space: pre-wrap;
    font-size: 20px;
    text-shadow: 0 0 5px rgba($terminal-green, 0.5);
  }
  
  .terminal-current-line {
    line-height: 1.3;
    white-space: pre-wrap;
    font-size: 20px;
    text-shadow: 0 0 5px rgba($terminal-green, 0.5);
    margin-bottom: 10px;
  }
  
  .terminal-input {
    display: flex;
    align-items: center;
    font-size: 20px;
    text-shadow: 0 0 5px rgba($terminal-green, 0.5);
    
    .terminal-prompt {
      margin-right: 5px;
    }
    
    .terminal-command-input {
      background: transparent;
      border: none;
      color: $terminal-green;
      font-family: 'VT323', monospace;
      font-size: 20px;
      outline: none;
      flex: 1;
      text-shadow: 0 0 5px rgba($terminal-green, 0.5);
      position: relative;
      
      &.cursor-visible::after {
        content: '█';
        animation: blink 1s step-end infinite;
      }
    }
  }
  
  .terminal-glow {
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: inset 0 0 150px rgba($terminal-green, 0.1);
    z-index: 1;
  }
}

.scanlines {
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(18, 16, 16, 0) 50%,
    rgba(0, 0, 0, 0.3) 50%
  );
  background-size: 100% 4px;
  z-index: 2;
  opacity: 0.2;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1) 50%, transparent 50%, transparent);
    background-size: 2px 100%;
    z-index: 1;
  }
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

@keyframes pulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.7; }
}

@keyframes flicker {
  0% { opacity: 0.97; }
  5% { opacity: 0.95; }
  10% { opacity: 0.9; }
  15% { opacity: 0.95; }
  20% { opacity: 0.98; }
  25% { opacity: 0.94; }
  30% { opacity: 0.98; }
  35% { opacity: 0.95; }
  40% { opacity: 0.97; }
  45% { opacity: 0.94; }
  50% { opacity: 0.98; }
  55% { opacity: 0.95; }
  60% { opacity: 0.97; }
  65% { opacity: 0.95; }
  70% { opacity: 0.96; }
  75% { opacity: 0.94; }
  80% { opacity: 0.98; }
  85% { opacity: 0.96; }
  90% { opacity: 0.95; }
  95% { opacity: 0.94; }
  100% { opacity: 0.95; }
}

// Power on animation
@keyframes powerOn {
  0% { 
    filter: brightness(5);
    background-color: #fff;
  }
  20% { 
    filter: brightness(0.2);
    background-color: #000;
  }
  40% { 
    filter: brightness(2);
    background-color: #0a0a0a;
  }
  60% { 
    filter: brightness(0.3);
    background-color: #000;
  }
  80% { 
    filter: brightness(1.5);
    background-color: #050505;
  }
  100% { 
    filter: brightness(1);
    background-color: #000;
  }
}

// Стили для кнопки полноэкранного режима
.expand-button {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 32px;
  height: 32px;
  background: rgba(0, 0, 0, 0.5);
  border: 2px solid $terminal-green;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 100;
  transition: all 0.2s ease;
  padding: 0;
  
  &:hover {
    background: rgba(0, 0, 0, 0.8);
    box-shadow: 0 0 10px rgba($terminal-green, 0.5);
  }
  
  .expand-icon {
    color: $terminal-green;
    font-size: 14px;
    text-shadow: 0 0 5px rgba($terminal-green, 0.7);
  }
}

// Анимация сканирования глитча
@keyframes glitch-scan {
  0% { top: -100%; }
  100% { top: 100%; }
}

// Анимация дрожания текста при глитче
@keyframes glitch-text {
  0% { transform: translateX(0); }
  25% { transform: translateX(-2px); }
  50% { transform: translateX(0); }
  75% { transform: translateX(2px); }
  100% { transform: translateX(0); }
}
</style>
