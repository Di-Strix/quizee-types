export interface Quiz {
  questions: QuizQuestion[];
  answers: QuizAnswer[];
  info: QuizInfo;
}

export interface QuizAnswer {
  answer: QuizUserAnswers;
  answerTo: string;
  config: {
    equalCase: boolean;
  };
}

export interface QuizUserAnswers extends Array<string> {}

export interface QuizQuestion {
  caption: string;
  id: string;
  type: QuizQuestionType;
  answerOptions: QuizAnswerOption[];
}

export interface QuizAnswerOption {
  id: string;
  value: string;
}

export interface QuizInfo {
  caption: string;
  img: string;
  questionsCount: number;
  id: string;
}

export enum QuizQuestionType {
  OneTrue = 'ONE_TRUE',
  SeveralTrue = 'SEVERAL_TRUE',
  WriteAnswer = 'WRITE_ANSWER',
}
