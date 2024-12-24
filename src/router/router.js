import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '../views/home-view/HomeView.vue';
import ContactsView from '../views/contacts-view/ContactsView.vue';
import ProjectsView from '../views/projects-view/ProjectsView.vue';
import BlogView from '../views/blog-view/BlogView.vue';

const routes = [
  { path: '/', component: HomeView, name: 'Home' },
  { path: '/contacts', component: ContactsView, name: 'Contacts' },
  { path: '/projects', component: ProjectsView, name: 'Projects' },
  { path: '/blog', component: BlogView, name: 'Blog' },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})