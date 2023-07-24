<script setup lang="ts">
import { useQuestions } from "~/api";

const router = useRouter();

const questions = ref();
const levels = ["warm", "easy", "medium", "hard", "extreme"];

const levelColor: {
  [key: string]: string
} = {
  warm: "bg-yellow-400",
  easy: "bg-green-400",
  medium: "bg-blue-400",
  hard: "bg-purple-400",
  extreme: "bg-red-400",
};

onMounted(async () => {
  questions.value = await useQuestions();
});

function toDetail(name: string) {
  router.push(`/questions/${name}`);
}
</script>

<template>
  <div v-if="!questions">
    loading...
  </div>
  <div v-else>
    <div v-for="level in levels" :key="level" flex="~ col">
      <div text-start py-3>
        <p font-bold text-xl inline-flex relative>
          <span underline underline-offset-6>{{ level }}</span>
          <span text-2 w-4 h-4 rounded-xl text-white ml-1 :class="levelColor[level]" flex="~ justify-center items-center">{{ questions[level].length }}</span>
        </p>
      </div>
      <div flex="~ justify-start items-center wrap gap-2">
        <div v-for="question in questions[level]" :key="question.name">
          <div bg-btn hover:bg-btnHover dark="bg-btnDark hover:bg-btnDarkHover" duration-100 :class="{ 'bg-green-500! text-white': question.name === '02688-medium-startswith' }" py-2 px-3 rounded cursor-pointer @click="toDetail(question.name)">
            <p>{{ question.name.split("-").slice(2).join(" ") }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
