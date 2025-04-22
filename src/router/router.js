import { createMemoryHistory, createRouter } from 'vue-router'

// Определяем ленивые импорты компонентов с использованием динамического импорта
const HomeView = () => import('@/views/home-view.vue')
const ExperienceView = () => import('@/views/experience-view.vue')
const ProjectsView = () => import('@/views/projects-view.vue')
const BlogView = () => import('@/views/blog-view.vue')
const ReviewsView = () => import('@/views/reviews-view.vue')
const LibraryView = () => import('@/views/library-view.vue')
const PlansView = () => import('@/views/plans-view.vue')
// Импортируем компоненты для подстраниц библиотеки
const CategoryView = () => import('@/views/library-category-view.vue')

const routes = [
  { 
    path: '/', 
    component: HomeView, 
    name: 'Home',
    // Добавляем метаданные без prefetch
    meta: { 
      title: 'Главная страница',
      // prefetch отключен
      prefetch: false 
    }
  },
  { 
    path: '/experience', 
    component: ExperienceView, 
    name: 'Experience',
    meta: { 
      title: 'Опыт работы',
      prefetch: false
    }
  },
  { 
    path: '/projects', 
    component: ProjectsView, 
    name: 'Projects',
    meta: { 
      title: 'Проекты',
      prefetch: false
    }
  },
  { 
    path: '/blog', 
    component: BlogView, 
    name: 'Blog',
    meta: { 
      title: 'Блог',
      prefetch: false
    }
  },
  { 
    path: '/reviews', 
    component: ReviewsView, 
    name: 'Reviews',
    meta: { 
      title: 'Отзывы',
      prefetch: false
    }
  },
  { 
    path: '/library', 
    component: LibraryView, 
    name: 'Library',
    meta: { 
      title: 'Библиотека',
      prefetch: false
    }
  },
  { 
    path: '/library/:category', 
    component: CategoryView, 
    name: 'LibraryCategory',
    meta: { 
      title: 'Категория библиотеки',
      prefetch: false
    },
    props: true
  },
  { 
    path: '/plans', 
    component: PlansView, 
    name: 'Plans',
    meta: { 
      title: 'Планы',
      prefetch: false
    }
  },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

// Добавляем обработчик для установки заголовка страницы и предзагрузки компонентов
router.beforeEach((to, from, next) => {
  // Устанавливаем заголовок страницы из метаданных
  document.title = to.meta.title ? `${to.meta.title} | Yusheero` : 'Yusheero';
  
  // Продолжаем навигацию
  next();
})

// Механизм prefetch отключен
// router.afterEach((to) => {
//   // Находим все маршруты с prefetch: true
//   const routesToPrefetch = routes
//     .filter(route => route.meta && route.meta.prefetch && route.path !== to.path);
//   
//   // Предзагружаем компоненты после небольшой задержки
//   setTimeout(() => {
//     routesToPrefetch.forEach(route => {
//       if (typeof route.component === 'function') {
//         route.component();
//       }
//     });
//   }, 2000); // Задержка в 2 секунды
// })