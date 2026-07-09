export const dummyChatTurns = [
  {
    id: 1,
    question: 'Give me the DCF approximation value of NVIDIA',
    thoughtTime: '2.7s',
    response:
      'Based on a 10-year discounted cash flow model with a 9.5% WACC, NVIDIA’s implied fair value is roughly $128/share.',
    images: null,
  },
  {
    id: 2,
    question: 'What assumptions are driving that number?',
    thoughtTime: '2.4s',
    response:
      'Mainly revenue growth tapering from 35% to 8% by year 10, and a terminal growth rate of 3%.',
    images: [
      { width: 140, height: 190 },
      { width: 140, height: 190 },
    ],
  },
  {
    id: 3,
    question: 'Can you show the sensitivity if WACC moves to 11%?',
    thoughtTime: '2.1s',
    response:
      'At 11% WACC the fair value drops to about $104/share, roughly an 18% decrease.',
    images: null,
  },
]
