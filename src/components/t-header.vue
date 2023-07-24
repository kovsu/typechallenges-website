<script setup lang="ts">
import { isDark, toggleDark } from "~/composables";
</script>

<template>
  <header p="x-8 y-6" flex="~">
    <div mr-auto>
      <h2 font-bold text-2xl text-type>
        Type <span text-challenge>Challenges</span>
      </h2>
    </div>
    <div text-4.5 flex="~ gap-3 items-center">
      <button outline-none @click="toggleDark()">
        <i v-if="isDark" class="i-carbon-sun" />
        <i v-else class="i-carbon-moon" />
      </button>
      <a outline-none href="https://github.com/type-challenges/type-challenges" target="_blank">
        <i class="i-carbon-logo-github" />
      </a>
    </div>
  </header>
</template>
