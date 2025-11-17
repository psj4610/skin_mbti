# Claude Code 프로젝트 컨텍스트

이 파일은 Claude Code가 프로젝트를 이해하는 데 도움을 주기 위한 컨텍스트 파일입니다.

## 프로젝트 요약
**피부 MBTI 테스트** - 사용자의 피부 타입을 16가지로 분류하는 웹 애플리케이션

## 핵심 정보

### 데이터 구조
- `app/data/questions.ts`: 12개 질문 (각 4개 답변)
- `app/data/results.ts`: 16개 피부 타입 결과
- 4개 축: O/D, S/R, N/P, T/W

### 주요 컴포넌트
- `app/page.tsx`: 메인 페이지 (start/test/result 3단계)
- `app/components/Header.tsx`: 네비게이션
- `app/components/HeroBanner.tsx`: 히어로 배너
- `app/components/Footer.tsx`: 푸터

### 디자인
- Material Design 블루 테마 (#1976d2)
- Tailwind CSS
- 완전 반응형

### 배포
- GitHub: https://github.com/psj4610/skin_mbti
- Vercel: 배포 예정/완료

## 자주 하는 작업

### 질문 추가/수정
`app/data/questions.ts` 편집

### 결과 설명 수정
`app/data/results.ts` 편집

### 디자인 변경
각 컴포넌트의 Tailwind 클래스 수정

### 배포
```bash
git add .
git commit -m "커밋 메시지"
git push origin main
```

## 참고
상세한 개발 이력은 `DEVELOPMENT.md` 참조
