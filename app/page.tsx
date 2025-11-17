'use client';

import { useState } from 'react';
import { questions, AnswerType } from './data/questions';
import { skinTypeResults } from './data/results';
import { calculateSkinType, getSkinTypeDescription } from './lib/skinTest';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import Footer from './components/Footer';

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

    // 테스트 섹션으로 스크롤
    setTimeout(() => {
      document.getElementById('test')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      {/* 시작 화면 */}
      {stage === 'start' && (
        <>
          <HeroBanner />

          {/* 테스트 시작 섹션 */}
          <section id="test" className="py-16 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                  피부 타입 테스트 시작하기
                </h2>
                <p className="text-gray-600 text-lg">
                  간단한 질문에 답하고 나의 정확한 피부 타입을 알아보세요
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl shadow-2xl p-8 md:p-12">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                    <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">1</span>
                    테스트 방법
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start bg-white rounded-xl p-4 shadow-sm">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">정직하게 답변하기</h4>
                        <p className="text-gray-600 text-sm">각 질문에 현재 피부 상태를 기준으로 가장 가까운 답변을 선택해주세요</p>
                      </div>
                    </div>
                    <div className="flex items-start bg-white rounded-xl p-4 shadow-sm">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">약 2분 소요</h4>
                        <p className="text-gray-600 text-sm">총 12개의 질문으로 구성되어 있으며, 언제든 이전 질문으로 돌아갈 수 있습니다</p>
                      </div>
                    </div>
                    <div className="flex items-start bg-white rounded-xl p-4 shadow-sm">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">즉시 결과 확인</h4>
                        <p className="text-gray-600 text-sm">모든 질문에 답하면 바로 상세한 피부 타입 분석 결과를 확인할 수 있습니다</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                    <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">2</span>
                    분석 항목
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-white rounded-xl p-5 shadow-sm border-l-4 border-blue-500">
                      <div className="font-bold text-gray-800 mb-2">💧 유분/건조도 (O/D)</div>
                      <p className="text-sm text-gray-600">피부의 유분 생성과 수분 보유력을 분석합니다</p>
                    </div>
                    <div className="bg-white rounded-xl p-5 shadow-sm border-l-4 border-pink-500">
                      <div className="font-bold text-gray-800 mb-2">🌡️ 민감도 (S/R)</div>
                      <p className="text-sm text-gray-600">외부 자극에 대한 피부 반응성을 평가합니다</p>
                    </div>
                    <div className="bg-white rounded-xl p-5 shadow-sm border-l-4 border-purple-500">
                      <div className="font-bold text-gray-800 mb-2">🎨 색소침착 (N/P)</div>
                      <p className="text-sm text-gray-600">기미, 잡티 등 색소 문제를 확인합니다</p>
                    </div>
                    <div className="bg-white rounded-xl p-5 shadow-sm border-l-4 border-green-500">
                      <div className="font-bold text-gray-800 mb-2">✨ 탄력/주름 (T/W)</div>
                      <p className="text-sm text-gray-600">피부 탄력과 노화 징후를 체크합니다</p>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <button
                    onClick={handleStart}
                    className="px-12 py-5 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-lg font-bold rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 hover:from-blue-700 hover:to-blue-600"
                  >
                    테스트 시작하기 →
                  </button>
                  <p className="text-gray-500 text-sm mt-4">무료 · 회원가입 불필요</p>
                </div>
              </div>
            </div>
          </section>

          {/* 피부 정보 섹션 */}
          <section id="about" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                  16가지 피부 타입
                </h2>
                <p className="text-gray-600 text-lg">
                  과학적 분석을 통한 정확한 피부 진단
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.keys(skinTypeResults).map((type) => (
                  <div key={type} className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-shadow text-center">
                    <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-lg mb-2">
                      {type}
                    </div>
                    <p className="text-xs text-gray-600 leading-tight">{skinTypeResults[type].title}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* 질문 화면 */}
      {stage === 'test' && (
        <main className="flex-grow bg-white py-12">
          <div className="container mx-auto px-4 max-w-3xl">
            {/* 진행률 바 */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-semibold text-gray-700">
                  질문 {currentQuestion + 1} / {questions.length}
                </span>
                <span className="text-sm font-semibold text-blue-600">
                  {Math.round(progress)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-blue-600 to-blue-500 h-3 rounded-full transition-all duration-500 ease-out shadow-lg"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* 질문 카드 */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl shadow-2xl p-8 md:p-10 mb-6">
              <div className="mb-3 inline-block px-4 py-1 bg-blue-100 rounded-full">
                <span className="text-sm font-bold text-blue-700">
                  {questions[currentQuestion].category === 'moisture' && '💧 유분/건조도'}
                  {questions[currentQuestion].category === 'sensitivity' && '🌡️ 민감도'}
                  {questions[currentQuestion].category === 'pigmentation' && '🎨 색소침착'}
                  {questions[currentQuestion].category === 'wrinkle' && '✨ 탄력/주름'}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800 leading-tight">
                {questions[currentQuestion].question}
              </h2>

              <div className="space-y-3">
                {questions[currentQuestion].answers.map((answer, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(answer.type)}
                    className="w-full p-5 text-left rounded-2xl border-2 border-gray-200 bg-white hover:border-blue-500 hover:bg-blue-50 hover:shadow-lg transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <div className="flex items-center">
                      <span className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-4 text-sm font-semibold text-gray-600">
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span className="text-gray-800 font-medium">{answer.text}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 이전으로 버튼 */}
            {currentQuestion > 0 && (
              <button
                onClick={() => setCurrentQuestion(currentQuestion - 1)}
                className="flex items-center text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
                이전 질문
              </button>
            )}
          </div>
        </main>
      )}

      {/* 결과 화면 */}
      {stage === 'result' && skinTypeResults[skinType] && (
        <main className="flex-grow bg-white py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-green-100 rounded-full mb-4">
                <span className="text-green-800 font-semibold text-sm">✓ 분석 완료</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                테스트 결과
              </h1>
              <p className="text-gray-600 text-lg">당신의 피부 타입은</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8">
              <div className="text-center mb-10">
                <div className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-4xl md:text-5xl font-bold rounded-2xl shadow-xl mb-6">
                  {skinType}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">
                  {skinTypeResults[skinType].title}
                </h2>
                <p className="text-blue-600 font-semibold text-lg">
                  {getSkinTypeDescription(skinType)}
                </p>
              </div>

              <div className="space-y-8">
                <div className="bg-white rounded-2xl p-6 shadow-md">
                  <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
                    <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">📋</span>
                    설명
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {skinTypeResults[skinType].description}
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-md">
                  <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
                    <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">✨</span>
                    주요 특징
                  </h3>
                  <ul className="space-y-3">
                    {skinTypeResults[skinType].characteristics.map((char, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-sm">
                          {index + 1}
                        </span>
                        <span className="text-gray-700">{char}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-md">
                  <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
                    <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">💡</span>
                    관리 포인트
                  </h3>
                  <ul className="space-y-3">
                    {skinTypeResults[skinType].recommendations.map((rec, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-md">
                  <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
                    <span className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">🧴</span>
                    추천 스킨케어
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {skinTypeResults[skinType].skincare.map((product, index) => (
                      <div
                        key={index}
                        className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-100 text-gray-700 font-medium"
                      >
                        {product}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center space-y-4">
              <button
                onClick={handleRestart}
                className="px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-lg font-bold rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
              >
                다시 테스트하기
              </button>
              <p className="text-gray-500 text-sm">결과가 마음에 드셨나요? 친구와 공유해보세요!</p>
            </div>
          </div>
        </main>
      )}

      <Footer />
    </div>
  );
}
