# 개발 이력 및 프로젝트 컨텍스트

## 프로젝트 개요
피부 MBTI 테스트 웹 애플리케이션 - 12개 질문으로 16가지 피부 타입을 진단

## 기술 스택
- **프레임워크**: Next.js 16 (App Router)
- **언어**: TypeScript
- **스타일링**: Tailwind CSS
- **배포**: Vercel
- **저장소**: https://github.com/psj4610/skin_mbti

## 프로젝트 구조

```
skin-mbti-test/
├── app/
│   ├── components/
│   │   ├── Header.tsx          # 네비게이션 헤더
│   │   ├── HeroBanner.tsx      # 히어로 배너
│   │   └── Footer.tsx          # 푸터
│   ├── data/
│   │   ├── questions.ts        # 12개 질문 데이터
│   │   └── results.ts          # 16가지 피부 타입 결과
│   ├── lib/
│   │   └── skinTest.ts         # 피부 타입 계산 로직
│   ├── layout.tsx              # 루트 레이아웃
│   ├── page.tsx                # 메인 페이지
│   └── globals.css
├── public/
└── README.md
```

## 주요 기능

### 1. 피부 타입 분류 시스템
4가지 축을 기반으로 16가지 타입 분석:
- **O/D**: 유분(Oily) vs 건조(Dry)
- **S/R**: 민감성(Sensitive) vs 저항성(Resistant)
- **N/P**: 비색소(Non-pigmented) vs 색소침착(Pigmented)
- **T/W**: 탄력(Tight) vs 주름(Wrinkled)

결과: OSNT, OSNW, OSPT, OSPW, ORNT, ORNW, ORPT, ORPW, DSNT, DSNW, DSPT, DSPW, DRNT, DRNW, DRPT, DRPW

### 2. 3단계 사용자 경험
1. **시작 화면**: 히어로 배너, 테스트 소개, 16가지 타입 그리드
2. **질문 화면**: 진행률 표시, 12개 질문, 이전 질문 이동
3. **결과 화면**: 피부 타입, 특징, 관리 포인트, 스킨케어 추천

### 3. 디자인 시스템
- **색상 테마**: Material Design 블루 (#1976d2)
- **컴포넌트**: 카드, 버튼, 배지, 그라데이션
- **애니메이션**: 호버 효과, 스케일, 트랜지션
- **반응형**: 모바일, 태블릿, 데스크톱

## 개발 이력

### 2024-11-17: 초기 구현
- Next.js 프로젝트 생성
- 12개 질문 데이터 작성 (app/data/questions.ts)
- 16가지 피부 타입 결과 작성 (app/data/results.ts)
- 피부 타입 계산 로직 구현 (app/lib/skinTest.ts)
- 기본 UI 구현 (시작/질문/결과 화면)
- Git 저장소 초기화

### 2024-11-17: 디자인 업데이트
- Header 컴포넌트 추가 (로고, 네비게이션, 모바일 메뉴)
- HeroBanner 컴포넌트 추가 (히어로 섹션, 통계 카드)
- Footer 컴포넌트 추가 (소셜 링크, 정보)
- Material Design 스타일 적용
- 테스트 시작 섹션 확장
- 16가지 피부 타입 소개 섹션 추가
- UI/UX 개선 (아이콘, 애니메이션, 카드 디자인)
- GitHub 푸시: https://github.com/psj4610/skin_mbti

## 다음 세션에서 작업할 때

### 빠른 시작
```bash
cd /home/jhin/skin-mbti-test
npm run dev
```

### 컨텍스트 파악하기
1. 이 파일(DEVELOPMENT.md) 읽기
2. README.md 확인
3. Git 커밋 이력: `git log --oneline`
4. 프로젝트 구조: `tree -L 2 app/`

### 주요 파일 위치
- **질문 수정**: `app/data/questions.ts`
- **결과 수정**: `app/data/results.ts`
- **메인 로직**: `app/page.tsx`
- **디자인 수정**: 각 컴포넌트 또는 page.tsx의 Tailwind 클래스

## 참고 사항

### 질문 데이터 구조
```typescript
{
  id: number,
  question: string,
  category: "moisture" | "sensitivity" | "pigmentation" | "wrinkle",
  answers: [
    { text: string, type: AnswerType, score: number }
  ]
}
```

### 결과 데이터 구조
```typescript
{
  type: string,           // 예: "OSNT"
  title: string,          // 예: "유분기 많은 민감성 피부"
  description: string,
  characteristics: string[],
  recommendations: string[],
  skincare: string[]
}
```

### 피부 타입 계산 로직
각 질문의 답변에서 타입(O, D, S, R, N, P, T, W)을 집계하여 4개 축마다 더 높은 빈도의 타입을 선택합니다.

## 향후 개선 아이디어

### 기능
- [ ] 결과 공유 기능 (SNS, 링크 복사)
- [ ] 결과 다운로드 (PDF/이미지)
- [ ] 이전 테스트 결과 저장 (로컬 스토리지)
- [ ] 피부 타입별 제품 추천 링크
- [ ] 다국어 지원 (영어, 일본어)
- [ ] 피부 관리 팁 블로그 섹션

### 디자인
- [ ] 다크 모드
- [ ] 커스텀 색상 테마
- [ ] 애니메이션 강화 (Framer Motion)
- [ ] 로딩 스켈레톤
- [ ] 더 다양한 아이콘/일러스트

### 기술
- [ ] SEO 최적화 (메타태그, OG 이미지)
- [ ] 애널리틱스 연동 (GA4)
- [ ] 성능 최적화 (이미지, 번들 크기)
- [ ] PWA 지원
- [ ] A/B 테스팅

## 트러블슈팅

### 개발 서버가 안 켜질 때
```bash
rm -rf .next
npm install
npm run dev
```

### TypeScript 에러
```bash
npm run build  # 전체 타입 체크
```

### Git 충돌
```bash
git status
git diff
# 충돌 해결 후
git add .
git commit -m "fix: resolve conflicts"
```

## 참고 문서
- Next.js 문서: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Vercel 배포: https://vercel.com/docs

## 연락처
- GitHub 저장소: https://github.com/psj4610/skin_mbti
- 개발자: psj4610
