export type QuizId = string;
export type QuestionId = string;
export type AnswerOptionId = string;
export type QuestionType = 'ONE_TRUE' | 'SEVERAL_TRUE' | 'WRITE_ANSWER';

export interface Quiz {
  questions: Question[];
  answers: Answer[];
  info: QuizInfo;
}

export interface Answer {
  answer: AnswerOptionId[];
  answerTo: QuestionId;
  config: {
    equalCase: boolean;
  };
}

export interface Question {
  caption: string;
  id: QuizId;
  type: QuestionType;
  answerOptions: AnswerOption[];
}

export interface AnswerOption {
  id: AnswerOptionId;
  value: string;
}

export interface QuizInfo {
  caption: string;
  img: string;
  questionsCount: number;
  id: string;
}
