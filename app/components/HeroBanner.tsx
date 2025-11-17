export default function HeroBanner() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
      {/* 배경 데코레이션 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-pink-100 rounded-full opacity-30 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* 배지 */}
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></span>
            <span className="text-blue-800 font-medium text-sm">과학적인 피부 분석</span>
          </div>

          {/* 메인 타이틀 */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-gray-800">나의 피부 타입을</span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              정확하게 알아보세요
            </span>
          </h1>

          {/* 서브 타이틀 */}
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            12가지 질문으로 16가지 피부 타입을 진단하고
            <br className="hidden sm:block" />
            맞춤형 스킨케어 솔루션을 받아보세요
          </p>

          {/* 통계 카드 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-10 max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-6 transform hover:scale-105 transition-transform">
              <div className="text-3xl font-bold text-blue-600 mb-2">12</div>
              <div className="text-gray-600 text-sm">과학적 질문</div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 transform hover:scale-105 transition-transform">
              <div className="text-3xl font-bold text-blue-600 mb-2">16</div>
              <div className="text-gray-600 text-sm">피부 타입 분석</div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 transform hover:scale-105 transition-transform">
              <div className="text-3xl font-bold text-blue-600 mb-2">2분</div>
              <div className="text-gray-600 text-sm">소요 시간</div>
            </div>
          </div>

          {/* 특징 리스트 */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-md">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700 font-medium">무료 테스트</span>
            </div>
            <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-md">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700 font-medium">즉시 결과 확인</span>
            </div>
            <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-md">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700 font-medium">맞춤 케어 추천</span>
            </div>
          </div>
        </div>
      </div>

      {/* 하단 웨이브 */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
