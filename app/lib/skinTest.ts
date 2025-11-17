import { AnswerType } from '../data/questions';

export interface TestResult {
  O: number;
  D: number;
  S: number;
  R: number;
  N: number;
  P: number;
  T: number;
  W: number;
}

export function calculateSkinType(answers: Map<number, AnswerType>): string {
  const scores: TestResult = {
    O: 0,
    D: 0,
    S: 0,
    R: 0,
    N: 0,
    P: 0,
    T: 0,
    W: 0
  };

  // 각 답변의 타입별 점수 집계
  answers.forEach((type) => {
    scores[type]++;
  });

  // 각 축별로 더 높은 점수를 가진 타입 선택
  const moistureType = scores.O >= scores.D ? 'O' : 'D';
  const sensitivityType = scores.S >= scores.R ? 'S' : 'R';
  const pigmentationType = scores.N >= scores.P ? 'N' : 'P';
  const wrinkleType = scores.T >= scores.W ? 'T' : 'W';

  return `${moistureType}${sensitivityType}${pigmentationType}${wrinkleType}`;
}

export function getSkinTypeDescription(type: string): string {
  const descriptions: Record<string, string> = {
    'O': '지성',
    'D': '건성',
    'S': '민감성',
    'R': '저항성',
    'N': '비색소',
    'P': '색소침착',
    'T': '탄력',
    'W': '주름'
  };

  return type.split('').map(char => descriptions[char]).join(' · ');
}
