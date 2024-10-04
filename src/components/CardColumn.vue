<script setup lang="ts">
import { ref } from "vue";
import Card from "./Card.vue";
import AddCardDialog from "./AddCardDialog.vue";
import draggable from "vuedraggable";

interface Card {
  id: number;
  title: string;
  description: string;
}

const cards = ref<Card[]>([]);

const deleteCard = (id: number) => {
  cards.value = cards.value.filter((card) => card.id !== id);
};

const addCard = (card: { id: number; title: string; description: string }) => {
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

  <draggable
    class="draggable"
    v-model="cards"
    group="my-group"
    :itemKey="'title'"
    ghost-class="dragging-item"
  >
    <template #item="{ element }">
      <div>
        <Card
          :id="element.id"
          :title="element.title"
          :description="element.description"
          :deleteCard="deleteCard"
        />
        <!-- <div class="list-item">
            {{ element.description }}
          </div> -->
      </div>
    </template>
  </draggable>
  <AddCardDialog :addCard="addCard" />
</template>

<style>
.draggable {
  min-height: 60vh;
}
</style>
