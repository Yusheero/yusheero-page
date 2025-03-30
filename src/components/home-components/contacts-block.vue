<script setup>
import { TelegramIcon, DiscordIcon, GitHubIcon, InstagramIcon, SteamIcon, GmailIcon, LinkedInIcon, YouTubeIcon } from 'vue3-simple-icons';
import { ref } from 'vue';
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
  { name: 'steam', icon: SteamIcon, url: 'https://steamcommunity.com/id/yusheero', label: 'Steam', color: '#000000' },
  { name: 'gmail', icon: GmailIcon, url: '#', label: 'Gmail', color: '#c01818' },
  { name: 'linkedin', icon: LinkedInIcon, url: '#', label: 'LinkedIn', color: '#15468b' },
  { name: 'youtube', icon: YouTubeIcon, url: 'https://www.youtube.com/@yusheero', label: 'YouTube', color: '#c01818' }
];
</script>

<template>
  <div class="contacts-block">
    <div class="contacts-block__content">
      <div class="contacts-block__grid">
        <a 
          v-for="social in socialLinks" 
          :key="social.name"
          :class="['contacts-block__item']"
          :href="social.url"
          target="_blank"
          rel="noopener noreferrer"
          @mouseenter="showTooltip(social.name)"
          @mouseleave="hideTooltip()"
        >
          <component :is="social.icon" class="contacts-block__icon" />
          <span 
            class="contacts-block__tooltip" 
            :class="{ 'active': activeTooltip === social.name }"
          >
            {{ social.label }}
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contacts-block {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  overflow: hidden;
  
  &__content {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: rgba(10, 26, 18, 0.95);
    border: 1px solid #4FFA9A;
    border-radius: 5px;
    box-shadow: 0 0 20px rgba(79, 250, 154, 0.3);
    color: #E0E0E0;
    overflow: hidden;
    padding: 10px;
  }
  
  &__grid {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 8px;
  }

  &__item {
    position: relative;
    overflow: hidden;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    background-color: rgba(10, 26, 18, 0.7);
    border: 1px solid rgba(79, 250, 154, 0.3);
    transition: all 0.2s ease;
    
    &:hover {
      background-color: rgba(79, 250, 154, 0.15);
      border-color: rgba(79, 250, 154, 0.6);
      box-shadow: 0 0 10px rgba(79, 250, 154, 0.3);
      
      .contacts-block__icon {
        filter: drop-shadow(0 0 5px rgba(79, 250, 154, 0.7));
      }
    }

    @media (max-width: 768px) {
      height: 90px;
    }
  }
  
  &__icon {
    width: 24px;
    height: 24px;
    fill: #4FFA9A !important;
    filter: drop-shadow(0 0 3px rgba(79, 250, 154, 0.4));
    transition: filter 0.2s ease;
  }
  
  &__tooltip {
    position: absolute;
    bottom: -25px;
    left: 50%;
    transform: translateX(-50%) translateY(10px);
    background-color: rgba(10, 26, 18, 0.9);
    color: #4FFA9A;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 11px;
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 10;
    border: 1px solid rgba(79, 250, 154, 0.4);
    text-shadow: 0 0 3px rgba(79, 250, 154, 0.4);
    
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
      border-bottom: 5px solid rgba(79, 250, 154, 0.4);
    }
  }
}
</style>