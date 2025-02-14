import { create } from "zustand";
import { Question } from "../interfaces/types";

interface State {
  questions: Question[];
  currentQuestion: number;
  fetchQuestions: (limit: number) => Promise<void>;
}

export const useQuestionsStore = create<State>((set) => {
  return {
    questions: [],
    currentQuestion: 0,
    fetchQuestions: async (limit: number) => {
      set({
        questions: [
          {
            "id": 44,
            "question": "¿Cuál es el resultado de la siguiente expresión?",
            "code": "2 * '3'",
            "answers": [
              "6",
              "5",
              "'6'",
              "Error"
            ],
            "correctAnswer": 0
          },
        ]
      })
    }
  }
})