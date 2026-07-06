import {
  createRouter,
  createWebHistory,
  defineAsyncComponent,
} from 'vue-router';

const HomePage = defineAsyncComponent(() =>
  import('../components/HomePage/HomePage.vue'),
);
const MoviesPage = defineAsyncComponent(() =>
  import('../components/MoviesPage/MoviesPage.vue'),
);
const MovieDetailsPage = defineAsyncComponent(() =>
  import('../components/MovieDetailsPage/MovieDetailsPage.vue'),
);
const Cast = defineAsyncComponent(() => import('../components/Cast/Cast.vue'));
const Reviews = defineAsyncComponent(() =>
  import('../components/Reviews/Reviews.vue'),
);

const routes = [
  { path: '/', component: HomePage },
  { path: '/movies', component: MoviesPage },
  {
    path: '/movies/:movieId',
    component: MovieDetailsPage,
    children: [
      { path: 'cast', component: Cast },
      { path: 'reviews', component: Reviews },
    ],
  },
  { path: '/:pathMatch(.*)*', redirect: '/' },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
