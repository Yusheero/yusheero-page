<script setup>
import ContactsBlockMobile from '@/components/home-components/contacts-block-mobile.vue';
import { useStore } from '@/store/store';
import { TelegramIcon, DiscordIcon, GitHubIcon, InstagramIcon, SteamIcon, GmailIcon, LinkedInIcon, YouTubeIcon } from 'vue3-simple-icons';
import { ref } from 'vue';

const store = useStore();
const activeTooltip = ref(null);

const showTooltip = (name) => {
  activeTooltip.value = name;
};

const hideTooltip = () => {
  activeTooltip.value = null;
};

const socialLinks = [
  { name: 'telegram', icon: TelegramIcon, url: 'https://t.me/yusheero_dev', label: 'Telegram', color: '#229ED9' },
  { name: 'discord', icon: DiscordIcon, url: 'https://discord.gg/Zv2h3TAACx', label: 'Discord', color: '#5865F2' },
  { name: 'github', icon: GitHubIcon, url: 'https://github.com/Yusheero', label: 'GitHub', color: '#000000' },
  { name: 'inst', icon: InstagramIcon, url: 'https://www.instagram.com/yusheero_dev/', label: 'Instagram', color: 'linear-gradient(145deg, rgba(64,93,230,1) 0%, rgba(131,58,180,1) 50%, rgba(225,48,108,1) 100%)' },
  { name: 'steam', icon: SteamIcon, url: '#', label: 'Steam', color: '#000000' },
  { name: 'gmail', icon: GmailIcon, url: '#', label: 'Gmail', color: '#c01818' },
  { name: 'linkedin', icon: LinkedInIcon, url: '#', label: 'LinkedIn', color: '#15468b' },
  { name: 'youtube', icon: YouTubeIcon, url: 'https://www.youtube.com/@yusheero', label: 'YouTube', color: '#c01818' }
];
</script>

<template>
  <ContactsBlockMobile v-if="store.isMobile" />
  <div v-else class="contacts-block">
    <a 
      v-for="social in socialLinks" 
      :key="social.name"
      :class="['contacts-block__item', `contacts-block__${social.name}`]"
      :href="social.url"
      target="_blank"
      rel="noopener noreferrer"
      @mouseenter="showTooltip(social.name)"
      @mouseleave="hideTooltip()"
    >
      <component :is="social.icon" style="fill: white" size="30px" class="contacts-block__icon" />
      <span 
        class="contacts-block__tooltip" 
        :class="{ 'active': activeTooltip === social.name }"
      >
        {{ social.label }}
      </span>
    </a>
  </div>
</template>

<style lang="scss" scoped>
.contacts-block {
  border-radius: 12px;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 5px;
  grid-template-areas:
    "telegram discord github inst"
    "steam gmail linkedin youtube";
  padding: 5px;
  color: var(--color-secondary);
  background: var(--color-primary);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);

  &__item {
    position: relative;
    overflow: hidden;
    text-decoration: none;
    color: var(--color-primary);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    border-radius: 8px;
    padding: 8px;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0);
      transition: all 0.3s ease;
      z-index: 0;
    }
    
    &:hover {
      &::before {
        background: rgba(255, 255, 255, 0.1);
      }
      
      .contacts-block__icon {
        transform: scale(1.3);
      }
    }
    
    &:active {
      transform: translateY(0);
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
  }
  
  &__icon {
    position: relative;
    z-index: 1;
    transition: transform 0.3s ease;
  }
  
  &__tooltip {
    position: absolute;
    bottom: -25px;
    left: 50%;
    transform: translateX(-50%) translateY(10px);
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 0.75rem;
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 10;
    
    &.active {
      opacity: 1;
      visibility: visible;
      transform: translateX(-50%) translateY(0);
    }
    
    &::before {
      content: '';
      position: absolute;
      top: -5px;
      left: 50%;
      transform: translateX(-50%);
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-bottom: 5px solid rgba(0, 0, 0, 0.8);
    }
  }

  &__telegram {
    grid-area: telegram;
    background: #229ED9;
  }

  &__discord {
    grid-area: discord;
    background: #5865F2;
  }

  &__github {
    grid-area: github;
    background: #000000;
  }

  &__inst {
    grid-area: inst;
    background: rgb(64,93,230);
    background: linear-gradient(145deg, rgba(64,93,230,1) 0%, rgba(131,58,180,1) 50%, rgba(225,48,108,1) 100%);
  }

  &__steam {
    grid-area: steam;
    background: #000000;
  }

  &__gmail {
    grid-area: gmail;
    background: #c01818;
  }

  &__linkedin {
    grid-area: linkedin;
    background: #15468b;
  }

  &__youtube {
    grid-area: youtube;
    background: #c01818;
  }
}
</style>