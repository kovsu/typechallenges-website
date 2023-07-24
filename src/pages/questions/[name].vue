<script setup lang="ts">
import { useDetail } from "~/api";

const props = defineProps<{ name: string }>();
const router = useRouter();

const showMD = ref("");

onMounted(async () => {
  showMD.value = await useDetail(props.name);
});
</script>

<template>
  <div text-start>
    <VueShowdown
      class="markdown-body"
      :markdown="showMD"
    />
    <div>
      <button mt-4 text-xl btn @click="router.back()">
        Back
      </button>
    </div>
  </div>
</template>
