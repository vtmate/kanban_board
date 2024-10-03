<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <v-container class="bg-white">
    <v-row no-gutters>
      <v-col v-for="n in 3" :key="n" cols="12" sm="4">
        <v-sheet class="ma-2 pa-2"> One of three columns </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
body {
  background-color: rgb(var(--v-theme-white));
}
</style>
