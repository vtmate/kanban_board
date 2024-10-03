<script setup lang="ts">
import { ref } from "vue";
import Card from "./Card.vue";
import AddCardDialog from "./AddCardDialog.vue";

const cards = ref([
  { title: "Task 1", description: "Description 1" },
  { title: "Task 2", description: "Description 2" },
  { title: "Task 3", description: "Description 3" },
]);

const deleteCard = (index: number) => {
  cards.value.splice(index, 1);
};

const addCard = (card: { title: string; description: string }) => {
  cards.value.push(card);
};

const props = defineProps<{
  title: string;
}>();
</script>

<template>
  <h1>
    {{ props.title }}
  </h1>
  <Card
    v-for="(card, id) in cards"
    :id="id"
    :title="card.title"
    :description="card.description"
    :deleteCard="deleteCard"
  />
  <AddCardDialog :addCard="addCard" />
</template>
