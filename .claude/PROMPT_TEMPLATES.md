# Claude Code 프롬프트 템플릿

다음 세션에서 작업을 이어갈 때 사용할 수 있는 효과적인 프롬프트 모음입니다.

## 📋 기본 프롬프트 (작업 시작 시 필수)

### 프로젝트 컨텍스트 로드
```
/home/jhin/skin-mbti-test 프로젝트를 이어서 작업하려고 해.
먼저 다음 파일들을 읽고 프로젝트를 파악해줘:
1. DEVELOPMENT.md - 개발 이력과 구조
2. .claude/PROJECT_CONTEXT.md - 프로젝트 요약
3. git log --oneline -5 - 최근 커밋 이력

파악이 끝나면 현재 프로젝트 상태를 요약해줘.
```

## 🎯 작업별 프롬프트

### 1. 새로운 기능 추가
```
피부 MBTI 테스트 프로젝트(/home/jhin/skin-mbti-test)에서 [구체적인 기능]을 추가하고 싶어.

먼저:
1. DEVELOPMENT.md 읽고 프로젝트 구조 파악
2. 관련 파일들 확인 (app/page.tsx, app/components/ 등)
3. 기능 구현 계획 세우기

그 다음 단계별로 구현해줘.

[추가하고 싶은 기능 상세 설명]
```

### 2. 디자인 수정
```
피부 MBTI 테스트 프로젝트(/home/jhin/skin-mbti-test)의 디자인을 수정하려고 해.

현재 디자인:
- Material Design 블루 테마 (#1976d2)
- Tailwind CSS 사용
- Header, HeroBanner, Footer 컴포넌트 존재

수정하고 싶은 부분:
[구체적인 디자인 변경 사항]

관련 파일을 확인하고 수정해줘.
```

### 3. 질문 추가/수정
```
피부 MBTI 테스트 프로젝트(/home/jhin/skin-mbti-test)의 질문을 수정하고 싶어.

먼저 app/data/questions.ts를 읽고 현재 질문 구조를 파악한 다음,
다음과 같이 수정해줘:

[수정할 질문 내용]

예시:
- 질문 5번을 "새로운 질문 내용"으로 변경
- 새로운 질문 추가 (카테고리: sensitivity)
```

### 4. 피부 타입 결과 수정
```
피부 MBTI 테스트 프로젝트(/home/jhin/skin-mbti-test)의 결과 설명을 수정하고 싶어.

app/data/results.ts를 확인하고 [특정 피부 타입]의 내용을 다음과 같이 수정해줘:

- 타입: OSNT (또는 다른 타입)
- 수정할 항목: [characteristics/recommendations/skincare]
- 새로운 내용: [구체적인 내용]
```

### 5. 버그 수정
```
피부 MBTI 테스트 프로젝트(/home/jhin/skin-mbti-test)에서 버그가 발생했어.

증상:
[버그 증상 상세 설명]

재현 방법:
1. [단계별 재현 방법]

먼저 관련 파일들을 확인하고 원인을 찾은 다음 수정해줘.
```

### 6. 성능 최적화
```
피부 MBTI 테스트 프로젝트(/home/jhin/skin-mbti-test)의 성능을 개선하고 싶어.

먼저:
1. 현재 프로젝트 구조 파악 (DEVELOPMENT.md)
2. package.json 확인
3. 주요 컴포넌트 분석 (app/page.tsx, components/)

그 다음 성능 개선 방안을 제안하고 구현해줘.
```

### 7. SEO 최적화
```
피부 MBTI 테스트 프로젝트(/home/jhin/skin-mbti-test)의 SEO를 개선하고 싶어.

현재:
- Next.js 16 App Router 사용
- app/layout.tsx에 기본 메타데이터 있음

추가하고 싶은 것:
- OG 이미지
- 상세한 메타 태그
- sitemap.xml
- robots.txt

단계별로 구현해줘.
```

## 🔧 유지보수 프롬프트

### Git 작업
```
피부 MBTI 테스트 프로젝트(/home/jhin/skin-mbti-test)에서:

1. 현재 변경사항 확인 (git status)
2. 적절한 커밋 메시지로 커밋
3. GitHub(https://github.com/psj4610/skin_mbti)에 푸시

커밋 내용: [수정한 내용 간단히]
```

### 배포 확인
```
피부 MBTI 테스트 프로젝트(/home/jhin/skin-mbti-test)를:

1. 빌드 테스트 (npm run build)
2. 에러가 있다면 수정
3. GitHub에 푸시하여 Vercel 자동 배포 트리거

진행 상황을 알려줘.
```

### 의존성 업데이트
```
피부 MBTI 테스트 프로젝트(/home/jhin/skin-mbti-test)의 패키지를 업데이트하고 싶어.

1. package.json 확인
2. 업데이트 가능한 패키지 확인
3. 주요 패키지 업데이트 (Breaking change 주의)
4. 테스트

어떤 패키지들을 업데이트할 수 있는지 알려줘.
```

## 💡 탐색/분석 프롬프트

### 프로젝트 이해하기
```
/home/jhin/skin-mbti-test 프로젝트를 처음 봤어.

다음을 분석해줘:
1. DEVELOPMENT.md - 전체 구조와 이력
2. 주요 파일 3개 (page.tsx, questions.ts, results.ts)
3. 프로젝트의 강점과 개선 가능한 부분

이해하기 쉽게 요약해줘.
```

### 코드 리뷰
```
피부 MBTI 테스트 프로젝트(/home/jhin/skin-mbti-test)의 코드를 리뷰해줘.

집중할 부분:
- [특정 파일이나 기능]

다음 관점에서:
1. 코드 품질
2. 성능
3. 접근성
4. 보안
5. 베스트 프랙티스

개선 제안도 함께 부탁해.
```

## 🎨 참고 사이트 반영 프롬프트

### 디자인 참고
```
피부 MBTI 테스트 프로젝트(/home/jhin/skin-mbti-test)에 [URL] 사이트의 디자인을 참고하고 싶어.

먼저 해당 사이트를 분석하고, 다음 요소들을 우리 프로젝트에 반영해줘:
- [구체적인 요소들: 배너, 메뉴, 색상, 레이아웃 등]

현재 프로젝트 구조를 유지하면서 통합해줘.
```

## 📝 프롬프트 작성 팁

### ✅ 좋은 프롬프트
1. **프로젝트 경로 명시**: `/home/jhin/skin-mbti-test`
2. **컨텍스트 문서 참조**: DEVELOPMENT.md, PROJECT_CONTEXT.md
3. **구체적인 작업 설명**: "질문 5번 수정" (O) vs "질문 고쳐줘" (X)
4. **단계별 요청**: "먼저 확인하고 → 분석하고 → 구현해줘"
5. **관련 파일 언급**: "app/data/questions.ts 확인해줘"

### ❌ 피해야 할 프롬프트
1. "테스트 고쳐줘" (너무 모호함)
2. "이전에 했던 작업 이어서 해줘" (이전 세션 기억 못함)
3. 파일 경로 없이 "그 파일 수정해줘"
4. 구체적인 설명 없이 "디자인 바꿔줘"

## 🚀 빠른 시작 올인원 프롬프트

```
/home/jhin/skin-mbti-test 피부 MBTI 테스트 프로젝트 작업을 이어가려고 해.

1단계: 프로젝트 파악
- DEVELOPMENT.md 읽기
- git log --oneline -5 확인
- 프로젝트 구조 요약

2단계: 현재 상태 확인
- npm run dev로 개발 서버 실행되는지 체크
- 주요 파일 상태 확인

3단계: 작업 진행
[구체적으로 하고 싶은 작업]

단계별로 진행하면서 상황을 알려줘.
```

---

## 💾 이 파일 사용법

다음 세션에서:
1. 이 파일을 열어서 원하는 템플릿 찾기
2. [대괄호] 안의 내용을 실제 내용으로 채우기
3. Claude Code에 복사/붙여넣기

또는:

```
.claude/PROMPT_TEMPLATES.md 파일을 읽고 [작업 종류]에 맞는 프롬프트를 생성해줘.
내가 하고 싶은 작업: [구체적인 작업 설명]
```
