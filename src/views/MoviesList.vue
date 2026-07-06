<script setup>
import { useRoute } from 'vue-router';
import findGenre from '../utils/genreFinder';
import s from './views.module.css';

const props = defineProps({
  movies: Array,
  genres: Array,
});

const route = useRoute();

const POSTER_URL = 'https://image.tmdb.org/t/p/w300/';
</script>

<template>
  <ul :class="s.gallery">
    <li
      v-for="movie in props.movies"
      :key="movie.id"
      :class="s.galleryItemCard"
    >
      <RouterLink :to="{ path: `/movies/${movie.id}`, state: { from: route } }">
        <div :class="s.posterContainer">
          <img :src="`${POSTER_URL}${movie.poster_path}`" :alt="movie.title" />
        </div>
        <div>
          <h2 :class="s.textTitle">{{ movie.title }}</h2>
          <p :class="s.textGenre">
            {{ findGenre(movie, props.genres) }} | {{ movie.release_date }}
          </p>
        </div>
      </RouterLink>
    </li>
  </ul>
</template>

<style module src="./views.module.css"></style>
