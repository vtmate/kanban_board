<script setup lang="ts">
import { ref } from "vue";
import Card from "./Card.vue";

const cards = ref([
  { title: "Task 1", description: "Description 1" },
  { title: "Task 2", description: "Description 2" },
  { title: "Task 3", description: "Description 3" },
]);

const props = defineProps<{
  title: string;
}>();
</script>

<template>
  <h1>
    {{ props.title }}
  </h1>
  <Card v-for="card in cards" :title="card.title" />
</template>
