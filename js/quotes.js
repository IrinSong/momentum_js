const quotes = [
  {quote: "사람은 반드시 자기 자신을 아끼는 마음이 있어야만 비로소 자기를 이겨낼 수 있고, 자기 자신을 이겨 낼 수 있어야만 비로소 자신을 완성할 수 있다.",
    author: "왕양명 / 王陽明"
  },
  {quote: "발전하는 것은 변화하는 것이다, 완벽해지려면 끊임없이 자주 변화해야 한다.",
    author: "윈스턴 처칠 / Winston Churchill"
  },
  {quote: "재물을 직접 만들지 않은 사람이 소비할 권리가 없는것처럼 행복을 직접 만들지 않은 사람도 행복을 누릴 권리가 없다.",
    author: "조지 버나드 쇼 / George Bernard Shaw"
  },
  {quote: "여러분이 가지지 못한 것에 대한 욕망으로 가진 것을 망치지 마세요. 지금 여러분이 가지고 있는 것도 한때는 열망했던 것들 중 하나였다는 것을 기억하세요.",
    author: "에피쿠로스 / Epicurus"
  },
  {quote: "여러분 자신을 더 나은 방향으로 변화시키면 모든 것을 호전되게 할 수 있습니다.",
    author: "짐 론 / Jim Rohn"
  },
  {quote: "성공은 꿈을 실현하기 위해 항상 깨어있는 사람을 선택한다.",
    author: "로저 밥슨 / Roger Babson"
  },
  {quote: "지금으로 부터 1년 후 오늘 시작했더라면 좋았을 걸 하고 바랄 수 있다.",
    author: "카렌 램 / Karen Lamb"
  },
  {quote: "여러분은 승리할 운명을 타고 났습니다. 하지만 승자가 되기 위해서는 승리를 위한 계획, 승리를 위한 준비 그리고 승리에 대한 기대가 있어야 합니다.",
    author: "지그 지글러 / Zig Ziglar"
  },
  {quote: "인생에서 한계는 없습니다. 여러분 자신이 만드는 한계만 제외한다면",
    author: "레스 브라운 / Les Brown"
  },
  {quote: "여러분은 삶을 돌아보며, “그때 그걸 했더라면…” 이라고 말하고 싶습니까? 아니면 “그때 그걸 하길 잘했다”라고 말하고 싶습니까?”",
    author: "지그 지글러 / Zig Ziglar"
  },
  {quote: "성공으로 가는 엘리베이터는 없습니다. 계단을 거쳐 올라가야만 합니다.",
    author: "지그 지글러 / Zig Ziglar"
  },
  {quote: "대성당을 짓던지 닭장을 만들던지 간에 모든 일에는 계획이 있어야 합니다. 계획이 없다면 죽는 순간까지 뒤로 미루는 삶을 살게 될 것입니다.",
    author: "존 고다드 / John Goddard"
  },
  {quote: "무언가를 위해 목숨을 버릴 각오가 되어있지 않는 한 그것이 삶의 목표라는 어떤 확신도 가질 수 없다.",
    author: "체 게바라 / Che Guevara"
  },
  {quote: "인생에서 성공하는 이는 꾸준히 목표를 바라보며 한결같이 그를 좇는 사람이다. 그것이 헌신이다.",
    author: "세실 드밀 / Cecil DeMille"
  },
  {quote: "언제나 현재에 집중할 수 있다면 행복할 것이다.",
    author: "파울로 코엘료 / Paulo Coelho"
  },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;