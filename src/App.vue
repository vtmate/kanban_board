<script setup lang="ts">
import { ref } from "vue";
import CardColumn from "./components/CardColumn.vue";
import Card from "./components/Card.vue";

const columns = ref(["Todo", "In Progress", "Done"]);
</script>

<template>
  <v-container>
    <v-row no-gutters>
      <v-col v-for="(column, index) in columns" :key="index" cols="12" sm="4">
        <!-- <v-sheet > {{ column }} </v-sheet> -->
        <CardColumn :title="column" />
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
* {
  color: rgb(var(--v-theme-brown));
}
body {
  background-color: rgb(var(--v-theme-yellow));
}
</style>
