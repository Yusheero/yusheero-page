import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '../views/HomeView.vue';
import ContactsView from '../views/ContactsView.vue';
import ProjectsView from '../views/ProjectsView.vue';
import BlogView from '../views/BlogView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/contacts', component: ContactsView },
  { path: '/projects', component: ProjectsView },
  { path: '/blog', component: BlogView },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})