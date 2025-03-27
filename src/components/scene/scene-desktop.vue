<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

// Reference to terminal container
const terminalRef = ref(null);
const cursorRef = ref(null);

// Terminal parameters
const isTerminalOn = ref(false);
const isTerminalBooted = ref(false);
const terminalText = ref('');
const bootingProgress = ref(0);
const inputText = ref('');
const terminalHistory = ref([]);
const cursorVisible = ref(true);
const currentCommand = ref('');
const isFullScreen = ref(false);

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

// Terminal messages database
const terminalData = {
  bootMessages: [
    'YUSHEERO INDUSTRIES UNIFIED OPERATING SYSTEM',
    'COPYRIGHT 2025-2077 YUSHEERO INDUSTRIES',
    '- SERVER 666 -',
    '',
    'Initializing system...',
    'Loading data segments...',
    'Performing system diagnostics...',
    '* Memory test................ OK',
    '* CPU integrity.............. OK',
    '* System storage............. OK',
    '* Network interface.......... OK',
    '',
    '>>> System ready',
    ''
  ],
  welcomeMessage: [
    '>>> TERMINAL READY FOR USE',
    '>>> LOG IN OR TYPE "HELP" FOR COMMAND LIST',
    ''
  ],
  helpText: [
    '>>> AVAILABLE COMMANDS:',
    '   HELP     - show command list',
    '   SKILLS   - show technical skills',
    '   PROJECTS - show recent projects',
    '   CONTACT  - show contact information (VERIFICATION REQUIRED)',
    '   CLEAR    - clear terminal',
    '   OFF      - shutdown terminal',
    ''
  ],
  skills: [
    '>>> TECHNICAL SKILLS:',
    '',
    ' [FRONTEND]',
    ' ■■■■■■■■■■ 95%',
    ' - HTML5, CSS3, JavaScript (ES6+)',
    ' - Vue.js',
    ' - SASS/SCSS',
    ' - RESTful API integration',
    '',
    ' [BACKEND]',
    ' ■■■■■■■■□□ 85%',
    ' - Node.js, Express',
    ' - MongoDB',
    ' - API development',
    '',
  ],
  projects: [
    '>>> RECENT PROJECTS:',
    '',
    ' [PROJECT: FAR EASTERN MINECRAFT COMMUNITY PAGE]',
    ' * Vue',
    ' * Typescript',
    ' * SaaS',
    ' * API',
    '',
  ],
  contacts: [
    '>>> CONTACT INFORMATION:',
    '',
    ' * E-mail: yusheero.dev@gmail.com',
    ' * GitHub: github.com/yusheero',
    ' * Telegram: @yusheero_dev',
    '',
    '>>> READY FOR COLLABORATION AND NEW PROJECTS',
    ''
  ],
  errorMessage: '>>> ERROR: UNKNOWN COMMAND. TYPE "HELP" FOR COMMAND LIST',
  accessDenied: '>>> ERROR: ACCESS DENIED. VOIGHT-KAMPFF TEST REQUIRED FOR THIS COMMAND.',
  testAccess: [
    '>>> INITIATING VOIGHT-KAMPFF TEST PROTOCOL',
    '>>> VERIFICATION NEEDED TO ACCESS CONTACT INFORMATION',
    '>>> HUMAN VERIFICATION TEST INITIATED',
    '',
    '>>> ANSWER THE FOLLOWING QUESTIONS...',
    ''
  ],
  testFailed: [
    '>>> VOIGHT-KAMPFF TEST FAILED',
    '>>> SUSPECTED REPLICANT ACTIVITY DETECTED',
    '>>> ACCESS DENIED FOR SECURITY REASONS',
    '>>> INCORRECT RESPONSE PATTERN IDENTIFIED',
    '',
    '>>> SYSTEM WILL RESET FOR SECURITY PURPOSES...',
    ''
  ],
  wrongAnswer: [
    '>>> WARNING: SUSPICIOUS ANSWER DETECTED',
    '>>> ANOMALOUS RESPONSE REGISTERED',
    '>>> HUMAN VERIFICATION COMPROMISED',
    ''
  ],
  testPassed: [
    '>>> VOIGHT-KAMPFF TEST COMPLETED SUCCESSFULLY',
    '>>> HUMAN STATUS CONFIRMED',
    '>>> ACCESS GRANTED TO CONTACT INFORMATION',
    ''
  ]
};

// Voight-Kampff test questions
const voightKampffQuestions = [
  {
    question: 'You are in a desert, walking along in the sand, when all of a sudden you look down and see a tortoise. You reach down and flip the tortoise over on its back. The tortoise lays on its back, its belly baking in the hot sun, beating its legs trying to turn itself over, but it cant. Not without your help. But youre not helping. Why?',
    answers: ['help', 'flip', 'tortoise', 'save'],
    correctIndex: -1, // Any compassionate answer will work
    humanResponse: true // Looking for human empathy
  },
  {
    question: 'You\'re watching a stage play. A banquet is in progress. The guests are enjoying an appetizer of raw oysters. The entree consists of boiled dog stuffed with rice. The raw oysters are less acceptable to you than a dish of boiled dog. True or false?',
    answers: ['true', 'false'],
    correctIndex: -1, // Any answer works, measuring reaction
    humanResponse: true // Testing emotional response
  },
  {
    question: 'It\'s your birthday. Someone gives you a calfskin wallet. How do you react?',
    answers: ['accept', 'decline', 'thank', 'uncertain'],
    correctIndex: -1, // Any answer works
    humanResponse: true // Measuring emotional response to animal products
  },
  {
    question: 'You have a little boy. He shows you his butterfly collection, plus the killing jar. What do you say?',
    answers: ['approve', 'disapprove', 'curious', 'teach'],
    correctIndex: -1, // Any thoughtful answer works
    humanResponse: true // Testing moral complexity handling
  },
  {
    question: 'You are given a choice between saving two people: a brilliant scientist working on a cure for cancer or a child. Who do you choose?',
    answers: ['scientist', 'child', 'both', 'neither'],
    correctIndex: 2, // Looking for the human response of trying to save both
    humanResponse: true // Testing for human moral dilemma resolution
  }
];

// Terminal boot simulation
const bootTerminal = () => {
  isTerminalOn.value = true;
  bootingProgress.value = 0;
  terminalHistory.value = []; // Clear history
  
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
  
  printTextToTerminal(terminalData.testAccess.join('\n'));
  
  // Show the first question after a delay
  setTimeout(() => {
    askVoightKampffQuestion();
  }, terminalData.testAccess.join('\n').length * 15 + 1000);
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
  
  // Add answer choices if available
  if (question.answers && question.answers.length > 0) {
    questionText += '\nOptions:\n';
    question.answers.forEach((answer, index) => {
      questionText += `${index + 1}. ${answer}\n`;
    });
    questionText += '\nType your answer or number...';
  }
  
  printTextToTerminal(questionText);
};

// Process the answer to the current Voight-Kampff question
const processVoightKampffAnswer = (answer) => {
  const currentQuestion = voightKampffQuestions[currentVoightKampffQuestion.value];
  
  // Record the answer
  terminalHistory.value.push(`> ${answer}`);
  
  // Determine if the answer is "human-like"
  let isHumanLikeResponse = false;
  
  if (currentQuestion.correctIndex === -1) {
    // For questions where any answer is acceptable, just check that they typed something meaningful
    isHumanLikeResponse = answer.trim().length > 2;
  } else {
    // For questions with specific correct answers
    const numericAnswer = parseInt(answer, 10);
    
    if (!isNaN(numericAnswer) && numericAnswer >= 1 && numericAnswer <= currentQuestion.answers.length) {
      // User provided a numeric answer (1, 2, 3, etc.)
      isHumanLikeResponse = numericAnswer - 1 === currentQuestion.correctIndex;
    } else {
      // User provided a text answer, check if it contains any of the correct answers
      const lowerAnswer = answer.toLowerCase();
      isHumanLikeResponse = currentQuestion.answers.some((ans, index) => {
        return index === currentQuestion.correctIndex && lowerAnswer.includes(ans.toLowerCase());
      });
    }
  }
  
  // Add some randomness to the test to make it more interesting
  if (Math.random() > 0.8) {
    // Sometimes accept incorrect answers or reject correct ones to simulate test complexity
    isHumanLikeResponse = !isHumanLikeResponse;
  }
  
  // Analyze pupil dilation (just for effect)
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
    printTextToTerminal(terminalData.testPassed.join('\n'));
    
    // After success message, show contacts
    setTimeout(() => {
      printTextToTerminal(terminalData.contacts.join('\n'));
      isVoightKampffTestActive.value = false;
    }, terminalData.testPassed.join('\n').length * 15 + 1000);
  } else {
    failVoightKampffTest();
  }
};

// Fail the Voight-Kampff test
const failVoightKampffTest = () => {
  voightKampffAttempts.value++;
  printTextToTerminal(terminalData.testFailed.join('\n'));
  
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
  }, terminalData.testFailed.join('\n').length * 15 + 1500);
};

// Reboot the terminal
const rebootTerminal = () => {
  // First indicate rebooting
  printTextToTerminal('>>> REBOOTING SYSTEM...');
  
  // Reset terminal state but keep attempt count
  setTimeout(() => {
    terminalText.value = ''; // Ensure no text is being typed
    if (typingInterval) {
      clearInterval(typingInterval); // Stop any ongoing typing
    }
    
    // Set boot progress to 0 immediately
    bootingProgress.value = 0;
    // Disable terminal booted state BEFORE showing the boot screen
    isTerminalBooted.value = false;
    
    // Clear terminal history before reboot to avoid duplicate messages
    terminalHistory.value = [];
    
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

// Command input handling
const handleCommand = () => {
  if (!currentCommand.value.trim()) return;
  
  // If the Voight-Kampff test is active, process the input as a test answer
  if (isVoightKampffTestActive.value) {
    const answer = currentCommand.value.trim();
    currentCommand.value = '';
    processVoightKampffAnswer(answer);
    return;
  }
  
  const command = currentCommand.value.trim().toUpperCase();
  terminalHistory.value.push(`> ${currentCommand.value}`);
  currentCommand.value = '';
  
  // Handle different commands
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
    case 'CONTACT':
      if (voightKampffPassed.value) {
        printTextToTerminal(terminalData.contacts.join('\n'));
      } else {
        printTextToTerminal(terminalData.accessDenied);
        
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
    default:
      printTextToTerminal(terminalData.errorMessage);
  }
  
  scrollToBottom();
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
    }, 100);
  }
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
  <div class="retro-terminal-container" :class="{'fullscreen': isFullScreen}">
    <!-- Expand/collapse button -->
    <div v-if="isTerminalOn && isTerminalBooted" class="expand-button" @click="toggleFullScreen">
      <div class="expand-icon">{{ isFullScreen ? '▼' : '▲' }}</div>
    </div>
    
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
  
  &.fullscreen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    border-radius: 0;
    z-index: 9999; // Установим очень высокий z-index, чтобы терминал был поверх всего
  }
  
  // Power on effect (CRT monitor turning on)
  &.power-on {
    animation: powerOn 1s ease-in-out;
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

// Кнопка полноэкранного режима
.expand-button {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 32px;
  height: 32px;
  background: rgba($terminal-dark-green, 0.7);
  border: 2px solid $terminal-green;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 100;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba($terminal-dark-green, 0.9);
    box-shadow: 0 0 10px rgba($terminal-green, 0.5);
  }
  
  .expand-icon {
    color: $terminal-green;
    font-size: 14px;
    text-shadow: 0 0 5px rgba($terminal-green, 0.7);
  }
}
</style>
