<script setup lang="ts">
import * as monaco from "monaco-editor";
import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
import tsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker";

import exportTypes from "@type-challenges/utils/index.d.ts?raw";

self.MonacoEnvironment = {
  getWorker(_: string, label: string) {
    if (label === "typescript" || label === "javascript")
      // eslint-disable-next-line new-cap
      return new tsWorker();

    // eslint-disable-next-line new-cap
    return new editorWorker();
  },
};

const libSource = `
      declare module '@type-challenges/utils' {
        ${exportTypes}
      }
    `;
monaco.languages.typescript.typescriptDefaults.addExtraLib(libSource, "@type-challenges/utils/index.d.ts");
</script>

<template>
  <main px-8 font-sans text="center gray-700 dark:gray-200">
    <t-header />
    <RouterView />
    <t-footer />
  </main>
</template>
