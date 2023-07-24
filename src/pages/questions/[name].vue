<script setup lang="ts">
import * as monaco from "monaco-editor";
import { useDetail } from "~/api";
import { isDark } from "~/composables";

const props = defineProps<{ name: string }>();
const router = useRouter();

const showMD = ref("");
const editorContainer = ref<HTMLDivElement | null>(null);

onMounted(async () => {
  showMD.value = await useDetail(props.name);
  setTimeout(() => {
    const { width, height } = document.querySelector(".markdown-body")!.getClientRects()[0];

    editorContainer.value!.style.width = `${width}px`;
    editorContainer.value!.style.height = `${height}px`;

    monaco.editor.create(editorContainer.value!, {
      value: "// Type your TypeScript code here...",
      language: "typescript",
      theme: isDark.value ? "vs-dark" : "vs-light",
    });
  });
});
</script>

<template>
  <div grid="~ cols-10 gap-4">
    <div text-start col-span-5>
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
    <div col-span-5 text-start>
      <div ref="editorContainer" />
    </div>
  </div>
</template>
