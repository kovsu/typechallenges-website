export const ls = function () {
  const done = ref(JSON.parse(localStorage.getItem("tsch-done") || "[]") as number[]);

  const setDone = function (_done: string) {
    if (done.value.includes(parseInt(_done)))
      done.value = done.value.filter(d => d !== parseInt(_done));
    else
      done.value?.push(parseInt(_done));

    localStorage.setItem("tsch-done", JSON.stringify(done.value));
  };

  return {
    done,
    setDone,
  };
};
