# 피부 MBTI 테스트

나의 피부 타입을 정확하게 알아보는 웹 애플리케이션입니다. 12개의 질문을 통해 16가지 피부 타입 중 하나를 진단하고, 맞춤형 스킨케어 솔루션을 제공합니다.

## 특징

- **16가지 피부 타입 진단**: OSNT부터 DRPW까지 다양한 피부 타입 분석
- **4가지 분석 축**:
  - O/D: 유분(Oily) vs 건조(Dry)
  - S/R: 민감성(Sensitive) vs 저항성(Resistant)
  - N/P: 비색소(Non-pigmented) vs 색소침착(Pigmented)
  - T/W: 탄력(Tight) vs 주름(Wrinkled)
- **맞춤형 추천**: 피부 타입별 특징, 관리 포인트, 스킨케어 제품 추천
- **반응형 디자인**: 모바일, 태블릿, 데스크톱 모두 지원
- **직관적인 UI**: 진행률 표시 및 단계별 안내

## 기술 스택

- **프레임워크**: Next.js 16 (App Router)
- **언어**: TypeScript
- **스타일링**: Tailwind CSS
- **배포**: Vercel

## 시작하기

### 개발 환경 설정

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 빌드

```bash
# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

## 프로젝트 구조

```
skin-mbti-test/
├── app/
│   ├── data/
│   │   ├── questions.ts    # 테스트 질문 데이터
│   │   └── results.ts      # 피부 타입 결과 데이터
│   ├── lib/
│   │   └── skinTest.ts     # 피부 타입 계산 로직
│   ├── layout.tsx          # 루트 레이아웃
│   └── page.tsx            # 메인 페이지 (시작/테스트/결과)
├── public/                 # 정적 파일
└── package.json
```

## Vercel 배포 방법

### 1. GitHub 저장소 생성 및 푸시

```bash
# GitHub에서 새 저장소 생성 후
git remote add origin https://github.com/YOUR_USERNAME/skin-mbti-test.git
git branch -M main
git push -u origin main
```

### 2. Vercel 배포

1. [Vercel](https://vercel.com)에 로그인
2. "New Project" 클릭
3. GitHub 저장소 선택 (skin-mbti-test)
4. 프로젝트 설정 확인 (기본 설정 그대로 사용)
5. "Deploy" 클릭

배포가 완료되면 자동으로 URL이 생성됩니다!

### 3. 커스텀 도메인 (선택사항)

Vercel 대시보드에서 Settings > Domains로 이동하여 커스텀 도메인을 추가할 수 있습니다.

## 커스터마이징

### 질문 수정하기

`app/data/questions.ts` 파일에서 질문을 추가하거나 수정할 수 있습니다.

```typescript
{
  id: 1,
  question: "질문 내용",
  category: "moisture", // moisture, sensitivity, pigmentation, wrinkle
  answers: [
    { text: "답변 1", type: "O", score: 2 },
    { text: "답변 2", type: "D", score: 1 }
  ]
}
```

### 결과 수정하기

`app/data/results.ts` 파일에서 각 피부 타입별 설명과 추천을 수정할 수 있습니다.

### 스타일링 변경

`app/page.tsx`에서 Tailwind CSS 클래스를 수정하여 색상과 디자인을 변경할 수 있습니다.

## 라이센스

MIT License

## 기여

이슈와 풀 리퀘스트를 환영합니다!
