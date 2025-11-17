'use client';

import { useState } from 'react';
import { questions, AnswerType } from './data/questions';
import { skinTypeResults } from './data/results';
import { calculateSkinType, getSkinTypeDescription } from './lib/skinTest';

type Stage = 'start' | 'test' | 'result';

export default function Home() {
  const [stage, setStage] = useState<Stage>('start');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Map<number, AnswerType>>(new Map());
  const [skinType, setSkinType] = useState<string>('');

  const handleStart = () => {
    setStage('test');
    setCurrentQuestion(0);
    setAnswers(new Map());
  };

  const handleAnswer = (answerType: AnswerType) => {
    const newAnswers = new Map(answers);
    newAnswers.set(questions[currentQuestion].id, answerType);
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // 테스트 완료
      const result = calculateSkinType(newAnswers);
      setSkinType(result);
      setStage('result');
    }
  };

  const handleRestart = () => {
    setStage('start');
    setCurrentQuestion(0);
    setAnswers(new Map());
    setSkinType('');
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        {/* 시작 화면 */}
        {stage === 'start' && (
          <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
            <div className="mb-8">
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
                피부 MBTI 테스트
              </h1>
              <p className="text-xl text-gray-600 mb-2">
                나의 피부 타입을 정확하게 알아보세요
              </p>
              <p className="text-gray-500">
                총 12개의 질문으로 구성되어 있습니다
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 max-w-md">
              <h2 className="text-lg font-semibold mb-4 text-gray-800">
                테스트 방법
              </h2>
              <ul className="text-left space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>각 질문에 가장 가까운 답변을 선택해주세요</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>평소 피부 상태를 기준으로 답변해주세요</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>모든 질문에 답변하면 결과가 나옵니다</span>
                </li>
              </ul>
            </div>

            <button
              onClick={handleStart}
              className="px-8 py-4 bg-gradient-to-r from-pink-500 to-blue-500 text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              테스트 시작하기
            </button>
          </div>
        )}

        {/* 질문 화면 */}
        {stage === 'test' && (
          <div className="py-8">
            {/* 진행률 바 */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-600">
                  질문 {currentQuestion + 1} / {questions.length}
                </span>
                <span className="text-sm font-medium text-gray-600">
                  {Math.round(progress)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-pink-500 to-blue-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* 질문 카드 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
              <div className="mb-2 text-sm font-medium text-pink-500">
                {questions[currentQuestion].category === 'moisture' && '유분/건조도'}
                {questions[currentQuestion].category === 'sensitivity' && '민감도'}
                {questions[currentQuestion].category === 'pigmentation' && '색소침착'}
                {questions[currentQuestion].category === 'wrinkle' && '탄력/주름'}
              </div>
              <h2 className="text-2xl font-bold mb-8 text-gray-800">
                {questions[currentQuestion].question}
              </h2>

              <div className="space-y-3">
                {questions[currentQuestion].answers.map((answer, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(answer.type)}
                    className="w-full p-4 text-left rounded-xl border-2 border-gray-200 hover:border-pink-300 hover:bg-pink-50 transition-all transform hover:scale-[1.02]"
                  >
                    <span className="text-gray-700">{answer.text}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 이전으로 버튼 */}
            {currentQuestion > 0 && (
              <button
                onClick={() => setCurrentQuestion(currentQuestion - 1)}
                className="text-gray-500 hover:text-gray-700 text-sm"
              >
                ← 이전 질문
              </button>
            )}
          </div>
        )}

        {/* 결과 화면 */}
        {stage === 'result' && skinTypeResults[skinType] && (
          <div className="py-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
                테스트 결과
              </h1>
              <p className="text-gray-600">당신의 피부 타입은</p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
              <div className="text-center mb-8">
                <div className="inline-block px-6 py-3 bg-gradient-to-r from-pink-500 to-blue-500 text-white text-3xl font-bold rounded-full mb-4">
                  {skinType}
                </div>
                <h2 className="text-2xl font-bold mb-2 text-gray-800">
                  {skinTypeResults[skinType].title}
                </h2>
                <p className="text-gray-500">
                  {getSkinTypeDescription(skinType)}
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">
                  설명
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {skinTypeResults[skinType].description}
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">
                  주요 특징
                </h3>
                <ul className="space-y-2">
                  {skinTypeResults[skinType].characteristics.map((char, index) => (
                    <li key={index} className="flex items-start text-gray-600">
                      <span className="mr-2 text-pink-500">•</span>
                      <span>{char}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">
                  관리 포인트
                </h3>
                <ul className="space-y-2">
                  {skinTypeResults[skinType].recommendations.map((rec, index) => (
                    <li key={index} className="flex items-start text-gray-600">
                      <span className="mr-2 text-blue-500">✓</span>
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-800">
                  추천 스킨케어
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {skinTypeResults[skinType].skincare.map((product, index) => (
                    <div
                      key={index}
                      className="p-3 bg-gradient-to-r from-pink-50 to-blue-50 rounded-lg text-gray-700"
                    >
                      {product}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={handleRestart}
                className="px-8 py-3 bg-gradient-to-r from-pink-500 to-blue-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                다시 테스트하기
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
