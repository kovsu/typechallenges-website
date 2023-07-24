import { Octokit } from "octokit";
import type { Question, QuestionWithLevel } from "../types";

const octokit = new Octokit();
const owner = "type-challenges";
const repo = "type-challenges";
const path = "questions";

const res: QuestionWithLevel = {};

export const useQuestions = async () => {
  if (Object.keys(res).length) return res;
  const { data } = await octokit.rest.repos.getContent({
    owner,
    repo,
    path,
  });

  (data as Question[]).forEach((item) => {
    const { name } = item;
    const level = name.split("-")[1];
    if (!res[level])
      res[level] = [item];
    else
      res[level].push(item);
  });

  return res;
};
