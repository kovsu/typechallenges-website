export interface Question {
  name: string
  path: string
  url: string
}

export interface QuestionWithLevel {
  [key: string]: Question[]
}
