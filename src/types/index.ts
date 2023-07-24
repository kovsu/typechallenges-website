export interface Question {
  name: string
  path: string
  url: string
  content: string
}

export interface QuestionWithLevel {
  [key: string]: Question[]
}
