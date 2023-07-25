<script setup lang="ts">
import * as monaco from "monaco-editor";
import { getTemplate, getTestCase, useDetail } from "~/api";
import { isDark, ls } from "~/composables";

const props = defineProps<{ name: string }>();
const router = useRouter();
const isLoading = ref(false);

const { done, setDone } = ls();
const isDone = computed(() => {
  return !done.value?.includes(parseInt(props.name.split("-")[0]));
});

const showMD = ref("");
const editorContainer = ref<HTMLDivElement | null>(null);

onMounted(async () => {
  showMD.value = await useDetail(props.name);
  const template = await getTemplate(props.name);
  const testCase = await getTestCase(props.name);

  const code = `${template}\n\n${testCase}`;

  setTimeout(() => {
    const { width, height } = document.querySelector(".markdown-body")!.getClientRects()[0];

    editorContainer.value!.style.width = `${width}px`;
    editorContainer.value!.style.height = `${height > 500 ? height : 500}px`;

    monaco.editor.create(editorContainer.value!, {
      value: code,
      language: "typescript",
      theme: isDark.value ? "vs-dark" : "vs-light",
    });
  });
  isLoading.value = true;
});

function checkout() {
  window.open(`https://github.com/type-challenges/type-challenges/issues?q=is%3Aissue+is%3Aopen+${parseInt(props.name.split("-")[0])}`);
}
</script>

<template>
  <div v-if="!isLoading" p-4 flex="~ items-center justify-center">
    <t-loading />
  </div>
  <div v-else grid="~ cols-10 gap-4">
    <div text-start col-span-5>
      <VueShowdown
        class="markdown-body"
        :markdown="showMD"
      />
      <div flex="~ gap-4 items-center">
        <button mt-4 btn :class="{ done: !isDone }" flex="~ items-center gap-2" @click="setDone(props.name.split('-')[0])">
          <i class="i-carbon-checkmark-outline" />{{ isDone ? "Done" : "Cancel" }}
        </button>
        <button mt-4 btn flex="~ items-center gap-2" @click="checkout">
          <i class="i-carbon-earth-filled" />Checkout Solutions
        </button>
        <button mt-4 btn @click="router.back()">
          Back
        </button>
      </div>
    </div>
    <div col-span-5 text-start>
      <div ref="editorContainer" />
    </div>
  </div>
</template>
