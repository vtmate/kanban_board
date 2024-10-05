<script setup lang="ts">
import { ref } from "vue";
const dialog = ref(false);
const title = ref("");
const description = ref("");

const props = defineProps<{
  addCard: (card: { id: number; title: string; description: string }) => void;
}>();

const save = () => {
  props.addCard({
    id: Math.floor(Math.random() * 100),
    title: title.value,
    description: description.value,
  });
  dialog.value = false;
};

const open = () => {
  title.value = "";
  description.value = "";
};
</script>

<template>
  <div class="plus">
    <v-dialog v-model="dialog" max-width="400">
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn
          icon="mdi-calendar"
          size="x-large"
          variant="plain"
          v-bind="activatorProps"
          @click="open"
          ><img src="../assets/plus.svg" alt="plus icon"
        /></v-btn>
      </template>

      <v-card class="rounded-xl" title="Add new Task">
        <v-form @submit.prevent>
          <v-card-text>
            <v-text-field
              class="w-100"
              label="Task title"
              required
              v-model="title"
            ></v-text-field>
            <v-textarea label="Description" v-model="description"></v-textarea>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn text="Close" variant="plain" @click="dialog = false"></v-btn>

            <v-btn
              class="rounded-xl"
              color="primary"
              text="Save"
              variant="tonal"
              @click="save"
            ></v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<style>
.plus {
  width: 4rem;
}
</style>
