'use client';

import { useState } from 'react';
import { questions } from '@/lib/questions';

export default function QuizPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  
  // questions 배열이 비어있을 경우를 대비
  if (questions.length === 0) {
    return <div>질문을 불러올 수 없습니다.</div>;
  }
  
  const currentQuestion = questions[currentQuestionIndex];

  // [수정] 버튼 클릭을 처리할 함수 추가
  const handleChoiceClick = () => {
    const nextQuestionIndex = currentQuestionIndex + 1;

    // 다음 질문이 있으면 상태를 업데이트
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      // 퀴즈가 끝나면 결과 페이지로 이동 (추후 구현)
      alert('퀴즈가 종료되었습니다! 결과 페이지로 이동합니다.');
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gradient-to-br from-pink-500 to-amber-400">
      <div className="w-full max-w-xl text-center">
        <p className="text-2xl font-bold text-white mb-4">
          Q{currentQuestion.id}.
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          {currentQuestion.text}
        </h2>
        <div className="flex flex-col gap-4">
          {currentQuestion.choices.map((choice) => (
            <button
              key={choice.text}
              onClick={handleChoiceClick} // [수정] onClick 이벤트 연결
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