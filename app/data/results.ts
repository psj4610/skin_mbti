export interface SkinTypeResult {
  type: string;
  title: string;
  description: string;
  characteristics: string[];
  recommendations: string[];
  skincare: string[];
}

export const skinTypeResults: Record<string, SkinTypeResult> = {
  "OSNT": {
    type: "OSNT",
    title: "유분기 많은 민감성 피부",
    description: "피부 유분은 많지만 민감하고 색소침착이 잘 되지 않으며 탄력이 좋은 피부입니다.",
    characteristics: [
      "T존을 중심으로 번들거림",
      "자극에 쉽게 반응하는 민감성",
      "색소침착이 잘 되지 않음",
      "탄력이 좋고 주름이 적음"
    ],
    recommendations: [
      "유분기 적은 저자극 제품 사용",
      "진정 성분이 함유된 제품 선택",
      "과도한 각질 제거 피하기",
      "논코메도제닉 제품 선택"
    ],
    skincare: [
      "젤 타입의 가벼운 클렌저",
      "알코올 프리 토너",
      "수분 세럼",
      "가벼운 젤 크림"
    ]
  },
  "OSNW": {
    type: "OSNW",
    title: "유분성 민감 노화 피부",
    description: "유분이 많으면서도 민감하고, 색소침착은 적지만 노화 징후가 있는 피부입니다.",
    characteristics: [
      "피부 유분이 많음",
      "민감하고 자극받기 쉬움",
      "잔주름과 탄력 저하",
      "색소침착은 적은 편"
    ],
    recommendations: [
      "유수분 밸런스 맞추기",
      "저자극 안티에이징 제품",
      "수분 공급 중점",
      "부드러운 마사지로 탄력 개선"
    ],
    skincare: [
      "순한 클렌징 폼",
      "진정 토너",
      "펩타이드 세럼",
      "보습 겸 탄력 크림"
    ]
  },
  "OSPT": {
    type: "OSPT",
    title: "유분성 민감 색소 피부",
    description: "유분이 많고 민감하며 색소침착이 잘 되지만 탄력은 좋은 피부입니다.",
    characteristics: [
      "번들거림과 민감성 동시 존재",
      "기미, 잡티 등 색소 문제",
      "탄력은 비교적 좋음",
      "자극에 쉽게 반응"
    ],
    recommendations: [
      "저자극 미백 제품 사용",
      "철저한 자외선 차단",
      "순한 각질 관리",
      "진정과 미백 동시 케어"
    ],
    skincare: [
      "저자극 클렌저",
      "미백 토너",
      "비타민C 세럼",
      "SPF50+ 선크림"
    ]
  },
  "OSPW": {
    type: "OSPW",
    title: "복합성 민감 노화 피부",
    description: "유분, 민감성, 색소침착, 주름이 모두 있는 집중 관리가 필요한 피부입니다.",
    characteristics: [
      "다양한 피부 고민 복합",
      "유분과 민감성",
      "색소침착과 주름",
      "종합적 관리 필요"
    ],
    recommendations: [
      "단계별 집중 케어",
      "저자극 멀티 기능 제품",
      "전문가 상담 권장",
      "꾸준한 홈케어"
    ],
    skincare: [
      "약산성 클렌저",
      "멀티 기능 에센스",
      "복합 기능성 세럼",
      "영양 크림"
    ]
  },
  "ORNT": {
    type: "ORNT",
    title: "지성 건강 피부",
    description: "유분은 많지만 자극에 강하고 색소침착, 주름 걱정이 적은 건강한 피부입니다.",
    characteristics: [
      "피지 분비 왕성",
      "자극에 강한 저항성",
      "깨끗한 피부톤",
      "탄력 있고 젊은 피부"
    ],
    recommendations: [
      "철저한 모공 관리",
      "규칙적인 각질 제거",
      "유분 컨트롤",
      "가벼운 보습"
    ],
    skincare: [
      "딥 클렌징 폼",
      "수렴 토너",
      "가벼운 수분 에센스",
      "오일프리 로션"
    ]
  },
  "ORNW": {
    type: "ORNW",
    title: "지성 노화 피부",
    description: "유분은 많지만 나이가 들면서 탄력이 저하된 피부입니다.",
    characteristics: [
      "번들거림 지속",
      "주름과 탄력 저하",
      "모공 확대",
      "복합적 고민"
    ],
    recommendations: [
      "유수분 밸런스",
      "탄력 개선 집중",
      "모공 축소 케어",
      "안티에이징 관리"
    ],
    skincare: [
      "딥 클렌징",
      "수렴+영양 토너",
      "레티놀 세럼",
      "탄력 크림"
    ]
  },
  "ORPT": {
    type: "ORPT",
    title: "지성 색소 피부",
    description: "피지 분비가 많고 색소침착이 있지만 탄력은 좋은 피부입니다.",
    characteristics: [
      "과도한 피지",
      "기미, 잡티 등 색소 문제",
      "탄력은 양호",
      "모공 고민"
    ],
    recommendations: [
      "유분 조절",
      "미백 집중 관리",
      "각질 제거",
      "자외선 철저 차단"
    ],
    skincare: [
      "딥 클렌징",
      "미백 토너",
      "나이아신아마이드 세럼",
      "가벼운 선크림"
    ]
  },
  "ORPW": {
    type: "ORPW",
    title: "지성 복합 노화 피부",
    description: "유분이 많으면서 색소침착과 주름이 함께 있는 피부입니다.",
    characteristics: [
      "번들거림",
      "색소침착",
      "주름과 탄력 저하",
      "복합적 노화 징후"
    ],
    recommendations: [
      "유분 관리",
      "안티에이징 케어",
      "미백 관리",
      "전문 케어 권장"
    ],
    skincare: [
      "각질 제거 클렌저",
      "복합 기능 토너",
      "멀티 펩타이드 세럼",
      "영양 안티에이징 크림"
    ]
  },
  "DSNT": {
    type: "DSNT",
    title: "건성 민감 피부",
    description: "건조하고 민감하지만 색소침착과 주름이 적은 피부입니다.",
    characteristics: [
      "당김과 건조함",
      "자극에 민감",
      "깨끗한 피부톤",
      "비교적 탄력 있음"
    ],
    recommendations: [
      "충분한 보습",
      "저자극 제품",
      "보호막 강화",
      "온화한 클렌징"
    ],
    skincare: [
      "크림 타입 클렌저",
      "진정 보습 토너",
      "세라마이드 세럼",
      "리치 크림"
    ]
  },
  "DSNW": {
    type: "DSNW",
    title: "건성 민감 노화 피부",
    description: "건조하고 민감하며 주름이 생기기 시작한 피부입니다.",
    characteristics: [
      "극심한 건조",
      "높은 민감도",
      "잔주름 발생",
      "탄력 저하"
    ],
    recommendations: [
      "집중 보습",
      "저자극 안티에이징",
      "피부 장벽 강화",
      "영양 공급"
    ],
    skincare: [
      "밀크 클렌저",
      "고보습 토너",
      "히알루론산 세럼",
      "고영양 크림"
    ]
  },
  "DSPT": {
    type: "DSPT",
    title: "건성 민감 색소 피부",
    description: "건조하고 민감하며 색소침착이 있지만 탄력은 좋은 피부입니다.",
    characteristics: [
      "건조함",
      "민감성",
      "색소 문제",
      "탄력은 유지"
    ],
    recommendations: [
      "보습+미백 케어",
      "저자극 제품",
      "자외선 차단",
      "진정 관리"
    ],
    skincare: [
      "순한 클렌저",
      "보습 미백 토너",
      "저자극 미백 세럼",
      "보습 크림"
    ]
  },
  "DSPW": {
    type: "DSPW",
    title: "건성 민감 복합 노화 피부",
    description: "건조, 민감, 색소, 주름 모든 고민이 있는 집중 케어가 필요한 피부입니다.",
    characteristics: [
      "심한 건조",
      "높은 민감도",
      "색소침착",
      "주름과 탄력 저하"
    ],
    recommendations: [
      "복합 기능성 케어",
      "전문 관리 필수",
      "단계적 집중 케어",
      "피부과 상담 권장"
    ],
    skincare: [
      "저자극 크림 클렌저",
      "고기능성 에센스",
      "복합 기능 앰플",
      "고영양 리페어 크림"
    ]
  },
  "DRNT": {
    type: "DRNT",
    title: "건성 건강 피부",
    description: "건조하지만 자극에 강하고 색소침착, 주름이 적은 피부입니다.",
    characteristics: [
      "약간의 건조함",
      "강한 저항성",
      "깨끗한 피부",
      "탄력 있음"
    ],
    recommendations: [
      "보습 집중",
      "수분 공급",
      "영양 관리",
      "예방적 케어"
    ],
    skincare: [
      "보습 클렌저",
      "수분 토너",
      "히알루론산 세럼",
      "수분 크림"
    ]
  },
  "DRNW": {
    type: "DRNW",
    title: "건성 노화 피부",
    description: "건조하고 주름이 있지만 자극에는 강한 피부입니다.",
    characteristics: [
      "건조함",
      "주름과 탄력 저하",
      "자극에는 강함",
      "노화 징후"
    ],
    recommendations: [
      "보습+안티에이징",
      "영양 공급",
      "탄력 개선",
      "집중 케어"
    ],
    skincare: [
      "영양 클렌저",
      "고보습 토너",
      "펩타이드+레티놀 세럼",
      "안티에이징 크림"
    ]
  },
  "DRPT": {
    type: "DRPT",
    title: "건성 색소 피부",
    description: "건조하고 색소침착이 있지만 탄력은 좋은 피부입니다.",
    characteristics: [
      "건조함",
      "색소 문제",
      "탄력 유지",
      "자극에 강함"
    ],
    recommendations: [
      "보습+미백",
      "각질 관리",
      "자외선 차단",
      "영양 공급"
    ],
    skincare: [
      "보습 클렌저",
      "미백 토너",
      "비타민C 세럼",
      "보습 미백 크림"
    ]
  },
  "DRPW": {
    type: "DRPW",
    title: "건성 복합 노화 피부",
    description: "건조하고 색소침착과 주름이 함께 있는 피부입니다.",
    characteristics: [
      "심한 건조",
      "색소침착",
      "주름 깊음",
      "복합 노화"
    ],
    recommendations: [
      "집중 영양 공급",
      "복합 기능성 제품",
      "전문 케어",
      "꾸준한 관리"
    ],
    skincare: [
      "영양 클렌저",
      "고기능성 토너",
      "멀티 기능 앰플",
      "리치 안티에이징 크림"
    ]
  }
};
