// src/app/quiz/page.tsx

'use client'; // 상태 관리를 위해 클라이언트 컴포넌트로 설정

import { useState } from 'react';
import { questions } from '@/lib/questions';

export default function QuizPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gradient-to-br from-pink-500 to-amber-400">
      <div className="w-full max-w-xl text-center">
        {/* 질문 번호 */}
        <p className="text-2xl font-bold text-white mb-4">
          Q{currentQuestion.id}.
        </p>

        {/* 질문 텍스트 */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          {currentQuestion.text}
        </h2>

        {/* 선택지 버튼들 */}
        <div className="flex flex-col gap-4">
          {currentQuestion.choices.map((choice) => (
            <button
              key={choice.text}
              className="w-full px-6 py-4 bg-white/90 text-pink-600 font-bold rounded-xl shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95"
            >
              {choice.text}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}   