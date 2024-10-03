<script setup lang="ts">
// import { ref } from "vue";

const props = defineProps<{
  title: string;
  description?: string; // optional prop
}>();
</script>

<template>
  <v-card class="ma-2 pa-2 rounded-xl" hover>
    <v-card-title>{{ props.title }}</v-card-title>
    <v-divider :thickness="2" class="mx-4"></v-divider>
    <v-card-text
      >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
      repudiandae excepturi dolore voluptas voluptatum vero at laudantium qui ea
      et.
    </v-card-text>
  </v-card>
</template>
