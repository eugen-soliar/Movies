<script setup>
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { fetchMovieById } from '../../services/fetchAPI';
import s from './MovieDetailsPage.module.css';

const route = useRoute();
const router = useRouter();

const movie = ref(null);

watch(
  () => route.params.movieId,
  async movieId => {
    if (!movieId) return;
    movie.value = await fetchMovieById(movieId);
  },
  { immediate: true },
);

const onReturn = () => {
  router.push(route.state?.from ?? '/');
};
</script>

<template>
  <template v-if="movie">
    <button :class="$style.ReturnBtn" type="button" @click="onReturn">
      Return
    </button>

    <div :class="$style.poster">
      <img
        :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
        :alt="movie.title"
      />
      <div :class="$style.posterInfo">
        <h3>
          <span>{{ movie.title }} / </span>
          <span>{{ movie.release_date }}</span>
        </h3>
        <h3>Overview</h3>
        <p>{{ movie.overview }}</p>
        <h3>Genres:</h3>
        <ul>
          <li v-for="genre in movie.genres" :key="genre.id">
            {{ genre.name }}
          </li>
        </ul>
      </div>
    </div>

    <div :class="$style.navLink">
      <RouterLink
        :class="$style.link"
        :to="{
          path: `/movies/${route.params.movieId}/cast`,
          state: route.state,
        }"
      >
        Cast
      </RouterLink>
      <RouterLink
        :class="$style.link"
        :to="{
          path: `/movies/${route.params.movieId}/reviews`,
          state: route.state,
        }"
      >
        Review
      </RouterLink>
    </div>

    <Suspense>
      <RouterView />
      <template #fallback>
        <div :class="$style.loader"></div>
      </template>
    </Suspense>
  </template>
</template>

<style module src="./MovieDetailsPage.module.css"></style>
