export interface Quiz {
  content: QuizContent
  answers: QuizAnswer[]
}

export interface QuizContent {
  caption: string
  questions: QuizQuestion[]
}

export interface QuizAnswer {
  answer: string | number
  config: {
    equalCase: boolean
  }
}

export interface QuizQuestion {
  caption: string
  type: QuizQuestionType
  answerOptions?: QuizAnswerOption[]
}

export interface QuizAnswerOption {
  id: number
  val: string
}

export interface QuizInfo {
  caption: string
  img: string
  questionCount: number
  quizeeId: string
}

export enum QuizQuestionType {
  OneTrue = 'ONE_TRUE',
  SeveralTrue = 'SEVERAL_TRUE',
  WriteAnswer = 'WRITE_ANSWER',
}
