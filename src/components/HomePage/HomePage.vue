<script setup>
import { ref, watch, onMounted } from 'vue';
import { fetchPopularMovies, fetchGenres } from '../../services/fetchAPI';
import MoviesList from '../../views/MoviesList.vue';
import LoadMore from '../LoadMore/LoadMore.vue';
import scrollDown from '../../utils/scrollDown';
import s from './HomePage.module.css';

const page = ref(1);
const movies = ref([]);
const genres = ref([]);

watch(
  page,
  async newPage => {
    try {
      const data = await fetchPopularMovies(newPage);
      movies.value = [...movies.value, ...data.results];
      if (newPage > 1) scrollDown();
    } catch (error) {
      console.log('something went wrong', error);
    }
  },
  { immediate: true },
);

onMounted(async () => {
  const response = await fetchGenres();
  genres.value = [...genres.value, ...response];
});

const onLoadMore = () => {
  page.value += 1;
};
</script>

<template>
  <div>
    <section :class="s.section">
      <MoviesList :movies="movies" :genres="genres" />
      <LoadMore @click="onLoadMore" />
    </section>
  </div>
</template>

<style module src="./HomePage.module.css"></style>
