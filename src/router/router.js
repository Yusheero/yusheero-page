import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '@/views/home-view.vue';
import ExperienceView from '@/views/experience-view.vue';
import ProjectsView from '@/views/projects-view.vue';
import BlogView from '@/views/blog-view.vue';
import ReviewsView from '@/views/reviews-view.vue';
import LibraryView from '@/views/library-view.vue';
import PlansView from '@/views/plans-view.vue';

const routes = [
  { path: '/', component: HomeView, name: 'Home' },
  { path: '/experience', component: ExperienceView, name: 'Experience' },
  { path: '/projects', component: ProjectsView, name: 'Projects' },
  { path: '/blog', component: BlogView, name: 'Blog' },
  { path: '/reviews', component: ReviewsView, name: 'Reviews' },
  { path: '/library', component: LibraryView, name: 'Library' },
  { path: '/plans', component: PlansView, name: 'Plans' },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})