<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { fetchCastById } from '../../services/fetchAPI';
import s from './Cast.module.css';

const route = useRoute();
const moviesCast = ref([]);

watch(
  () => route.params.movieId,
  async movieId => {
    if (!movieId) return;
    moviesCast.value = await fetchCastById(movieId);
  },
  { immediate: true },
);
</script>

<template>
  <ul :class="s.cardSet">
    <li v-for="cast in moviesCast" :key="cast.id" :class="s.item">
      <div>
        <img
          :src="`https://image.tmdb.org/t/p/w200/${cast.profile_path}`"
          :alt="cast.name"
        />
        <h4 :class="s.actor">{{ cast.name }}</h4>
      </div>
    </li>
  </ul>
</template>

<style module src="./Cast.module.css"></style>
