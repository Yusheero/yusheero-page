<script setup>
import { useStore } from '@/store/store';
import ContactsViewMobile from '@/views/contacts-view/contacts-view-mobile/ContactsViewMobile.vue'
import ContactsViewDesktop from '@/views/contacts-view/contacts-view-desktop/ContactsViewDesktop.vue'

const store = useStore()
</script>

<template>
  <ContactsViewMobile v-if="store.isMobile" />
  <ContactsViewDesktop v-if="!store.isMobile" />
</template>

<style lang="scss">

</style>