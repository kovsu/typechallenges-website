<script setup lang="ts">
const props = defineProps<{ name: string }>();
const router = useRouter();
</script>

<template>
  <div>
    <p>
      Hi, {{ props.name }}
    </p>

    <div>
      <button m-3 mt-8 text-sm btn @click="router.back()">
        Back
      </button>
    </div>
  </div>
</template>
