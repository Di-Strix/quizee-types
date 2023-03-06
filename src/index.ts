export type QuizId = string;
export type QuestionId = string;
export type AnswerOptionId = string;
export type QuestionType = 'ONE_TRUE' | 'SEVERAL_TRUE' | 'WRITE_ANSWER';

export interface DBQuiz {
  questions: Question[];
  answers: Answer[];
  info: DBQuizInfo;
}

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

export interface DBQuizInfo extends Required<QuizInfo> {}

export interface QuizInfo {
  caption: string;
  questionsCount?: number;
  img?: string;
  id?: string;
}
