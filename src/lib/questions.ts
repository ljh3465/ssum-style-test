// src/lib/questions.ts

// 각 선택지에 대한 타입 정의
export interface Choice {
  text: string; // 선택지에 표시될 텍스트
  score: number; // 선택지가 가지는 점수 (0, 1, 2)
}

// 각 질문에 대한 타입 정의
export interface Question {
  id: number; // 질문의 고유 ID
  text: string; // 질문 내용
  choices: Choice[]; // 질문에 포함된 선택지 배열
}

// [추가] 실제 질문 데이터 배열
export const questions: Question[] = [
  {
    id: 1,
    text: "누군가에게 호감이 생겼을 때 나는?",
    choices: [
      { text: "상대방도 나에게 호감이 있는지 먼저 확인한다", score: 1 },
      { text: "티 나게 표현하며 적극적으로 다가간다", score: 2 },
      { text: "상대방이 먼저 다가와 주길 바란다", score: 0 },
    ],
  },
  // 여기에 다음 질문들을 추가할 예정입니다.
];