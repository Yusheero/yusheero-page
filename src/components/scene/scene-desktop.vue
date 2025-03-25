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
    '- SERVER 6 -',
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
    '   CONTACT  - show contact information',
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
    ' - MongoDB, MySQL, PostgreSQL',
    ' - API development',
    ' - Server architecture',
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
  errorMessage: '>>> ERROR: UNKNOWN COMMAND. TYPE "HELP" FOR COMMAND LIST'
};

// Terminal boot simulation
const bootTerminal = () => {
  isTerminalOn.value = true;
  bootingProgress.value = 0;
  
  // Simulate loading
  const bootInterval = setInterval(() => {
    bootingProgress.value += Math.random() * 5;
    if (bootingProgress.value >= 100) {
      bootingProgress.value = 100;
      clearInterval(bootInterval);
      
      // After progress bar is filled, start printing boot messages
      bootSequenceTimeout = setTimeout(() => {
        terminalHistory.value = [];
        printTextToTerminal(terminalData.bootMessages.join('\n'));
        
        // After boot messages are complete, show welcome message
        setTimeout(() => {
          printTextToTerminal(terminalData.welcomeMessage.join('\n'));
          isTerminalBooted.value = true;
          startCursorBlink();
        }, terminalData.bootMessages.join('\n').length * 15 + 500);
      }, 500);
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

// Command input handling
const handleCommand = () => {
  if (!currentCommand.value.trim()) return;
  
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
      printTextToTerminal(terminalData.contacts.join('\n'));
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
  <div class="retro-terminal-container">
    <!-- Turned off terminal screen -->
    <div v-if="!isTerminalOn" class="terminal-off" @click="bootTerminal">
      <div class="terminal-off-text">
        [ CLICK TO POWER ON TERMINAL ]
      </div>
      <div class="scanlines"></div>
      <div class="power-button"></div>
    </div>
    
    <!-- Loading screen -->
    <div v-else-if="!isTerminalBooted" class="terminal-booting">
      <div class="boot-progress">
        <div class="boot-progress-bar" :style="{ width: bootingProgress + '%' }"></div>
      </div>
      <div class="boot-text">SYSTEM LOADING... {{ Math.floor(bootingProgress) }}%</div>
      <div class="scanlines"></div>
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
  }
  
  .power-button {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid rgba($terminal-green, 0.3);
    
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 2px;
      height: 10px;
      background-color: rgba($terminal-green, 0.3);
    }
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
  
  .boot-progress {
    width: 70%;
    height: 20px;
    background-color: $terminal-dark-green;
    border: 2px solid $terminal-green;
    margin-bottom: 20px;
    overflow: hidden;
    position: relative;
    
    &-bar {
      height: 100%;
      background-color: $terminal-green;
      transition: width 0.1s ease-out;
    }
  }
  
  .boot-text {
    font-size: 24px;
    letter-spacing: 2px;
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
</style>
