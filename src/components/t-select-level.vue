<script setup lang="ts">
const props = defineProps<{
  level: string
}>();

const emit = defineEmits<{
  "update:selectLevel": [id: string] // 具名元组语法
}>();

const selectLevel = ref(props.level);
const levels = ref(["warm", "easy", "medium", "hard", "extreme"]);
</script>

<template>
  <select id="question-level" v-model="selectLevel" name="level" outline-none border-none bg-transparent @change="emit('update:selectLevel', selectLevel)">
    <option v-for="(level, index) in levels" :key="index" :value="level">
      {{ level }}
    </option>
  </select>
</template>
