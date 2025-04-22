<script setup>
import { ref, watch } from 'vue';
import LanguageSwitcher from '@/components/language-switcher.vue';

// Состояние открытия/закрытия меню
const isMenuOpen = ref(false);

// Функция для переключения меню
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Функция для закрытия меню
const closeMenu = () => {
  isMenuOpen.value = false;
};

// Наблюдатель для блокировки/разблокировки скролла
watch(isMenuOpen, (newValue) => {
  if (newValue) {
    // Блокируем скролл при открытом меню
    document.body.style.overflow = 'hidden';
  } else {
    // Разблокируем скролл при закрытом меню
    document.body.style.overflow = '';
  }
});

const handleLanguageToggle = () => {
  // Здесь позже добавим логику переключения языка
  console.log('Language toggle clicked');
};
</script>

<template>
  <div class="navigation-mobile">
    <!-- Кнопка бургер-меню -->
    <button class="burger-button" @click="toggleMenu" :class="{ 'active': isMenuOpen }">
      <span class="burger-line"></span>
      <span class="burger-line"></span>
      <span class="burger-line"></span>
    </button>
    
    <!-- Раскрывающееся меню на весь экран -->
    <div class="menu-overlay" v-if="isMenuOpen" @click="closeMenu">
      <!-- Контейнер меню с ссылками -->
      <div class="menu-container" @click.stop>  
        <div class="menu-links">
          <router-link 
            title="Home" 
            class="menu-link" 
            :to="{name: 'Home'}"
            @click="closeMenu"
          >
            home
          </router-link>
          <router-link 
            title="Projects" 
            class="menu-link" 
            :to="{name: 'Projects'}"
            @click="closeMenu"
          >
            projects
          </router-link>
          <router-link 
            title="Experience" 
            class="menu-link" 
            :to="{name: 'Experience'}"
            @click="closeMenu"
          >
            experience
          </router-link>
          <a
            class="menu-link menu-link--disabled"
            @click.prevent 
            href="#"
          >
            blog
          </a>
          <a
            class="menu-link menu-link--disabled"
            @click.prevent 
            href="#"
          >
            reviews
          </a>
          <router-link 
            title="Library" 
            class="menu-link" 
            :to="{name: 'Library'}"
            @click="closeMenu"
          >
            library
          </router-link>
          <a
            class="menu-link menu-link--disabled"
            @click.prevent 
            href="#"
          >
            plans
          </a>
          <!-- <div class="menu-language">
            <LanguageSwitcher @toggle="handleLanguageToggle" />
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navigation-mobile {
  width: 100%;
  height: 44px;
  position: fixed;
  top: 10px;
  z-index: 99;
}

/* Кнопка бургер-меню */
.burger-button {
  width: 44px;
  height: 44px;
  border: 1px solid rgba(79, 250, 154, 0.5);
  background-color: rgba(10, 26, 18, 0.95);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  padding: 0;
  z-index: 1001;
  position: relative;
  
  &.active {
    background-color: rgba(79, 250, 154, 0.2);
    border-color: rgba(79, 250, 154, 0.8);
    box-shadow: 0 0 10px rgba(79, 250, 154, 0.3);
  }
  
  /* Линии бургер-иконки */
  .burger-line {
    width: 24px;
    height: 2px;
    background-color: #4FFA9A;
    transition: all 0.3s ease;
    box-shadow: 0 0 5px rgba(79, 250, 154, 0.5);
  }
  
  &:hover .burger-line {
    box-shadow: 0 0 8px rgba(79, 250, 154, 0.8);
  }
  
  /* Анимация для активного состояния */
  &.active .burger-line {
    &:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }
    
    &:nth-child(2) {
      opacity: 0;
    }
    
    &:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
    }
  }
}

/* Оверлей на весь экран */
.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 999;
  backdrop-filter: blur(3px);
  animation: fadeIn 0.3s ease;
}

/* Контейнер для ссылок меню */
.menu-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 85%;
  max-width: 350px;
  background-color: rgba(10, 26, 18, 0.95);
  border: 1px solid rgba(79, 250, 154, 0.5);
  box-shadow: 0 0 20px rgba(79, 250, 154, 0.2);
  border-radius: 8px;
  padding: 20px;
  z-index: 1000;
  animation: slideIn 0.3s ease;
  
  /* Эффекты терминала */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      rgba(79, 250, 154, 0.03) 1px, 
      transparent 1px
    ),
    linear-gradient(
      90deg, 
      rgba(79, 250, 154, 0.03) 1px, 
      transparent 1px
    );
    background-size: 20px 20px;
    pointer-events: none;
    z-index: -1;
    border-radius: 8px;
  }
}

/* Заголовок меню */
.menu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(79, 250, 154, 0.3);
}

.menu-title {
  color: #4FFA9A;
  font-size: 16px;
  font-weight: 600;
  text-shadow: 0 0 5px rgba(79, 250, 154, 0.5);
  letter-spacing: 1px;
}

.close-button {
  background: none;
  border: none;
  color: #4FFA9A;
  font-size: 24px;
  cursor: pointer;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 0;
  
  &:hover {
    background-color: rgba(79, 250, 154, 0.15);
    text-shadow: 0 0 8px rgba(79, 250, 154, 0.6);
  }
}

/* Контейнер для ссылок */
.menu-links {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* Стили для ссылок меню */
.menu-link {
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(79, 250, 154, 0.5);
  color: #4FFA9A;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  padding: 12px;
  transition: all 0.2s ease;
  background-color: rgba(10, 26, 18, 0.95);
  text-shadow: 0 0 5px rgba(79, 250, 154, 0.3);
  letter-spacing: 0.5px;

  &:hover {
    background-color: rgba(79, 250, 154, 0.15);
    text-shadow: 0 0 8px rgba(79, 250, 154, 0.6);
  }
  
  /* Стили для отключенной кнопки library */
  &--disabled {
    color: #FF5555;
    border-color: rgba(255, 85, 85, 0.5);
    text-shadow: 0 0 5px rgba(255, 85, 85, 0.3);
    
    &:hover {
      background-color: rgba(255, 85, 85, 0.15);
      text-shadow: 0 0 8px rgba(255, 85, 85, 0.6);
    }
  }
}

/* Анимация для активной ссылки */
.router-link-active {
  background-color: rgba(79, 250, 154, 0.2);
  border-color: rgba(79, 250, 154, 0.8);
  box-shadow: 0 0 10px rgba(79, 250, 154, 0.3);
  font-weight: 600;
  
  &:hover {
    background-color: rgba(79, 250, 154, 0.25);
  }
}

/* Анимации */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideIn {
  from { 
    transform: translate(-50%, -40%);
    opacity: 0; 
  }
  to { 
    transform: translate(-50%, -50%);
    opacity: 1; 
  }
}

.menu-language {
  margin-top: 20px;
  padding-top: 15px;
  border-top: 1px solid rgba(79, 250, 154, 0.3);
  display: flex;
  justify-content: center;
}
</style>