export type AnswerType = 'O' | 'D' | 'S' | 'R' | 'N' | 'P' | 'T' | 'W';

export interface Answer {
  text: string;
  type: AnswerType;
  score: number;
}

export interface Question {
  id: number;
  question: string;
  answers: Answer[];
  category: string;
}

export const questions: Question[] = [
  // 유분/건조 (O/D) 질문들
  {
    id: 1,
    question: "세안 후 2-3시간이 지났을 때 피부 상태는?",
    category: "moisture",
    answers: [
      { text: "얼굴 전체가 번들거리고 기름기가 많다", type: "O", score: 2 },
      { text: "T존만 살짝 번들거린다", type: "O", score: 1 },
      { text: "별다른 느낌이 없다", type: "D", score: 0 },
      { text: "당기거나 건조한 느낌이 든다", type: "D", score: 2 }
    ]
  },
  {
    id: 2,
    question: "화장을 하면 어떤 느낌인가요?",
    category: "moisture",
    answers: [
      { text: "화장이 쉽게 번지고 무너진다", type: "O", score: 2 },
      { text: "오후가 되면 T존이 번들거린다", type: "O", score: 1 },
      { text: "하루종일 잘 유지된다", type: "D", score: 0 },
      { text: "들뜨고 각질이 보인다", type: "D", score: 2 }
    ]
  },
  {
    id: 3,
    question: "모공 크기는 어떤가요?",
    category: "moisture",
    answers: [
      { text: "모공이 매우 크고 눈에 띈다", type: "O", score: 2 },
      { text: "T존의 모공이 약간 보인다", type: "O", score: 1 },
      { text: "모공이 거의 보이지 않는다", type: "D", score: 1 },
      { text: "모공은 안 보이지만 피부가 거칠다", type: "D", score: 2 }
    ]
  },

  // 민감성/저항성 (S/R) 질문들
  {
    id: 4,
    question: "새로운 화장품을 사용할 때",
    category: "sensitivity",
    answers: [
      { text: "자주 트러블이나 붉어짐이 생긴다", type: "S", score: 2 },
      { text: "가끔 따끔거리거나 불편하다", type: "S", score: 1 },
      { text: "별 문제없이 잘 맞는다", type: "R", score: 1 },
      { text: "어떤 제품이든 전혀 문제없다", type: "R", score: 2 }
    ]
  },
  {
    id: 5,
    question: "피부가 붉어지는 경우가 있나요?",
    category: "sensitivity",
    answers: [
      { text: "자주 붉어지고 오래 지속된다", type: "S", score: 2 },
      { text: "특정 상황에서 붉어진다", type: "S", score: 1 },
      { text: "거의 붉어지지 않는다", type: "R", score: 1 },
      { text: "한 번도 붉어진 적이 없다", type: "R", score: 2 }
    ]
  },
  {
    id: 6,
    question: "햇빛에 노출되면",
    category: "sensitivity",
    answers: [
      { text: "바로 붉어지고 따갑다", type: "S", score: 2 },
      { text: "조금 따갑거나 간지럽다", type: "S", score: 1 },
      { text: "큰 불편함이 없다", type: "R", score: 1 },
      { text: "전혀 느끼지 못한다", type: "R", score: 2 }
    ]
  },

  // 색소침착 (N/P) 질문들
  {
    id: 7,
    question: "기미, 주근깨, 잡티가 있나요?",
    category: "pigmentation",
    answers: [
      { text: "많이 있고 점점 늘어난다", type: "P", score: 2 },
      { text: "약간 있다", type: "P", score: 1 },
      { text: "거의 없다", type: "N", score: 1 },
      { text: "전혀 없다", type: "N", score: 2 }
    ]
  },
  {
    id: 8,
    question: "여드름 자국이나 상처 자국은?",
    category: "pigmentation",
    answers: [
      { text: "오래가고 잘 안 없어진다", type: "P", score: 2 },
      { text: "조금 남아있다", type: "P", score: 1 },
      { text: "금방 사라진다", type: "N", score: 1 },
      { text: "거의 남지 않는다", type: "N", score: 2 }
    ]
  },
  {
    id: 9,
    question: "피부 톤이 고르지 않은 편인가요?",
    category: "pigmentation",
    answers: [
      { text: "톤 차이가 심하다", type: "P", score: 2 },
      { text: "약간 불균일하다", type: "P", score: 1 },
      { text: "비교적 고르다", type: "N", score: 1 },
      { text: "매우 균일하다", type: "N", score: 2 }
    ]
  },

  // 탄력/주름 (T/W) 질문들
  {
    id: 10,
    question: "눈가나 입가의 주름은?",
    category: "wrinkle",
    answers: [
      { text: "깊은 주름이 여러 개 있다", type: "W", score: 2 },
      { text: "잔주름이 보인다", type: "W", score: 1 },
      { text: "거의 없다", type: "T", score: 1 },
      { text: "전혀 없다", type: "T", score: 2 }
    ]
  },
  {
    id: 11,
    question: "피부의 탄력은 어떤가요?",
    category: "wrinkle",
    answers: [
      { text: "탄력이 많이 떨어졌다", type: "W", score: 2 },
      { text: "조금 처진 느낌이다", type: "W", score: 1 },
      { text: "탄력이 좋은 편이다", type: "T", score: 1 },
      { text: "매우 탄력있고 팽팽하다", type: "T", score: 2 }
    ]
  },
  {
    id: 12,
    question: "옆에서 봤을 때 얼굴 윤곽은?",
    category: "wrinkle",
    answers: [
      { text: "처지고 윤곽이 흐릿하다", type: "W", score: 2 },
      { text: "약간 처진 듯하다", type: "W", score: 1 },
      { text: "윤곽이 뚜렷하다", type: "T", score: 1 },
      { text: "매우 또렷하고 탄력있다", type: "T", score: 2 }
    ]
  }
];
