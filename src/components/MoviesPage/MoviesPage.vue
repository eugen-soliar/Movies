<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { fetchGenres, fetchMoviesBySearch } from '../../services/fetchAPI';
import MoviesList from '../../views/MoviesList.vue';
import LoadMore from '../LoadMore/LoadMore.vue';
import scrollDown from '../../utils/scrollDown';
import s from './MoviesPage.module.css';

const route = useRoute();
const router = useRouter();

const page = ref(1);
const searchQuery = ref('');
const movies = ref([]);
const genres = ref([]);

const searchUrl = computed(() => route.query.searchQuery ?? '');

watch([page, searchUrl], async ([newPage, newSearch]) => {
  if (newSearch === '') return;
  try {
    const data = await fetchMoviesBySearch(newSearch, newPage);
    movies.value = [...movies.value, ...data.results];
    if (newPage > 1) scrollDown();
  } catch (error) {
    console.log('something went wrong', error);
  }
});

onMounted(async () => {
  const response = await fetchGenres();
  genres.value = [...genres.value, ...response];
});

const onHandleSubmit = evt => {
  evt.preventDefault();
  if (searchQuery.value === '') return;
  page.value = 1;
  movies.value = [];
  router.push({ query: { searchQuery: searchQuery.value } });
  searchQuery.value = '';
};

const onLoadMore = () => {
  page.value += 1;
};
</script>

<template>
  <div>
    <form :class="s.form" @submit="onHandleSubmit">
      <input :class="s.input" v-model="searchQuery" :name="searchQuery" />
    </form>
    <MoviesList :movies="movies" :genres="genres" />
    <LoadMore v-if="movies.length > 20" @click="onLoadMore" />
  </div>
</template>

<style module src="./MoviesPage.module.css"></style>
