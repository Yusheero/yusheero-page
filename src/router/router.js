import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '../views/home-view/HomeView.vue';
import ExperienceView from '../views/experience-view/ExperienceView.vue';
import ProjectsView from '../views/projects-view/ProjectsView.vue';
import BlogView from '../views/blog-view/BlogView.vue';
import ReviewsView from '@/views/reviews-view/ReviewsView.vue';
import LibraryView from '@/views/library-view/LibraryView.vue';

const routes = [
  { path: '/', component: HomeView, name: 'Home' },
  { path: '/experience', component: ExperienceView, name: 'Experience' },
  { path: '/projects', component: ProjectsView, name: 'Projects' },
  { path: '/blog', component: BlogView, name: 'Blog' },
  { path: '/reviews', component: ReviewsView, name: 'Reviews' },
  { path: '/library', component: LibraryView, name: 'Library' },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})