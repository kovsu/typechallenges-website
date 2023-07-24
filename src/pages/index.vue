<script setup lang="ts">
import { useQuestions } from "~/api";

const questions = ref();
const level = ref("warm");

onMounted(async () => {
  questions.value = await useQuestions();
});

function selectLevel(val: string) {
  level.value = val;
}
</script>

<template>
  <div v-if="!questions">
    loading...
  </div>
  <div v-else>
    <t-select-level :level="level" @update:select-level="selectLevel" />
    <div>
      <div v-for="(question, index) in questions[level]" :key="index">
        <RouterLink :to="`/questions/${question.name}`">
          {{ question.name }}
        </RouterLink>
      </div>
    </div>
  </div>
</template>
