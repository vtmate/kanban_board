<script setup lang="ts">
import { ref } from "vue";
import CardColumn from "./components/CardColumn.vue";

const columns = ref(["Todo", "In Progress", "Done"]);
</script>

<template>
  <v-app class="bg-yellow">
    <!-- <v-app-bar :elevation="0" :app="false">
      <v-app-bar-title>Application Bar</v-app-bar-title>
    </v-app-bar> -->
    <v-container class="mt-10 container">
      <v-row no-gutters>
        <v-col v-for="(column, index) in columns" :key="index" cols="12" sm="4">
          <CardColumn :title="column" />
        </v-col>
      </v-row>
    </v-container>

    <v-footer class="bg-brown">
      <v-row justify="center" no-gutters>
        <p class="text-white">
          made by
          <a href="https://github.com/vtmate" target="_blank" class="text-pink"
            >vtmate</a
          >
        </p>
      </v-row>
    </v-footer>
  </v-app>
</template>

<style>
* {
  color: rgb(var(--v-theme-brown));
}

body {
  background-color: rgb(var(--v-theme-yellow));
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

.container {
  min-height: 80vh;
}
</style>
