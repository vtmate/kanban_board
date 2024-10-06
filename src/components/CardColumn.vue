<script setup lang="ts">
import { ref } from "vue";
import Card from "./Card.vue";
import AddCardDialog from "./AddCardDialog.vue";
import draggable from "vuedraggable";
import { addCard, deleteCard } from "../cardService";

interface Card {
  id: number;
  title: string;
  description: string;
}

const cards = ref<Card[]>([]);

const handleDeleteCard = (id: number) => {
  cards.value = deleteCard(cards.value, id);
};

const handleAddCard = (card: Card) => {
  cards.value = addCard(cards.value, card);
};

const props = defineProps<{
  title: string;
}>();
</script>

<template>
  <!-- CardColumn header -->
  <v-row
    class="align-center pl-6 mx-1 mb-4 rounded-xl justify-space-between border border-brown border-md"
    no-gutters
  >
    <v-col cols="auto" class="flex-grow-0 d-inline-flex">
      <p class="text-h5 heading font-weight-bold">
        {{ props.title }}
      </p>
    </v-col>
    <v-col cols="auto" class="flex-grow-0 d-inline-flex">
      <AddCardDialog :addCard="handleAddCard" />
    </v-col>
  </v-row>

  <!-- Cardcolumn body containing draggable Cards -->
  <draggable
    class="draggable"
    v-model="cards"
    group="my-group"
    :itemKey="'title'"
    chosen-class="chosen-item"
    ghost-class="dragging-item"
  >
    <template #item="{ element }">
      <div>
        <Card
          :id="element.id"
          :title="element.title"
          :description="element.description"
          :deleteCard="handleDeleteCard"
        />
      </div>
    </template>
  </draggable>
</template>

<style>
.draggable {
  min-height: 20vh;
}

.dragging-item {
  opacity: 60%;
}

@media only screen and (min-width: 800px) {
  .draggable {
    min-height: 60vh !important;
  }
}
</style>
