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

export const useDetail = async (name: string) => {
  const { data } = await octokit.rest.repos.getContent({
    owner,
    repo,
    path: `${path}/${name}/README.md`,
  });

  return atob((data as Question).content).toString().replace("Related Challenges", "");
};

export const getTemplate = async (name: string) => {
  const { data } = await octokit.rest.repos.getContent({
    owner,
    repo,
    path: `${path}/${name}/template.ts`,
  });

  return atob((data as Question).content).toString();
};

export const getTestCase = async (name: string) => {
  const { data } = await octokit.rest.repos.getContent({
    owner,
    repo,
    path: `${path}/${name}/test-cases.ts`,
  });

  return atob((data as Question).content).toString();
};
