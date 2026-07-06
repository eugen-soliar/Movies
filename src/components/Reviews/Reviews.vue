<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { fetchReviewsById } from '../../services/fetchAPI';

const route = useRoute();
const reviews = ref([]);

watch(
  () => route.params.movieId,
  async movieId => {
    if (!movieId) return;
    reviews.value = await fetchReviewsById(movieId);
  },
  { immediate: true },
);
</script>

<template>
  <ul v-if="reviews.length > 0">
    <li v-for="review in reviews" :key="review.author">
      <p>{{ review.author }}</p>
      <p>{{ review.content }}</p>
    </li>
  </ul>
  <p v-else>Sorry, no reviews given</p>
</template>
