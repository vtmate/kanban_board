<script setup lang="ts">
// import { ref } from "vue";

const props = defineProps<{
  title: string;
  description?: string;
  id: number;
  deleteCard: (index: number) => void;
}>();
</script>

<template>
  <v-card class="my-2 mx-4 pa-2 rounded-xl bg-white" hover>
    <v-card-title>{{ props.title }}</v-card-title>
    <v-divider :thickness="2" class="mx-4"></v-divider>
    <v-card-text>{{ props.description }} </v-card-text>
    <v-container>
      <v-row>
        <v-col cols="12" class="d-flex justify-end py-0">
          <v-btn @click="deleteCard(id)" size="small" variant="plain"
            ><img src="../assets/delete.svg" alt="delete icon"
          /></v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
