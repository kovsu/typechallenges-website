<script setup lang="ts">
const props = defineProps<{
  level: string
}>();

const emit = defineEmits<{
  "update:selectLevel": [id: string] // 具名元组语法
}>();

const selectLevel = ref(props.level);
const levels = ref(["warm", "easy", "medium", "hard", "extreme"]);
const panel = ref(false);

function handleClick(level: string) {
  selectLevel.value = level;
  emit("update:selectLevel", level);
  panel.value = false;
}
</script>

<template>
  <div relative class="difficulty" w-min>
    <button bg-btn dark:bg-btnDark px-3 py-1 outline-none rounded flex="~ justify-center items-center gap-1" @click="panel = !panel">
      Difficulty
      <i class="i-carbon-caret-down" duration-100 :class="{ 'rotate-180': panel }" />
    </button>
  </div>
  <Teleport v-if="panel" to=".difficulty">
    <div absolute left-0 right-0 bg-btn dark:bg-btnDark rounded class="top-110%" p-2>
      <div
        v-for="(level, index) in levels"
        :key="index"
        p-2 cursor-pointer rounded
        @click="handleClick(level)"
      >
        {{ level }}
      </div>
    </div>
  </Teleport>
</template>
