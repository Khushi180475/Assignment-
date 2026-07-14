// Figma node 6:256 — the conversation shown in the right side pane.
// Assistant `bullets` render with an underlined ticker lead-in, matching the design.
export const chatThread = [
  {
    id: 'q-1',
    role: 'user',
    text: 'hello, how can you help me?',
    time: '13:44',
  },
  {
    id: 'a-1',
    role: 'assistant',
    thoughtTime: '2s',
    time: '13:44',
    paragraphs: [
      'I can help you analyze stocks, markets, portfolios, companies, and financial news using data-driven insights.',
      'I can also summarize research, compare investments, build financial models, and support investment decisions.',
    ],
  },
  {
    id: 'q-2',
    role: 'user',
    text: 'okay, give me some infomation about the currently trending stocks',
    time: '13:44',
  },
  {
    id: 'a-2',
    role: 'assistant',
    thoughtTime: '11s',
    time: '13:45',
    intro: 'Some of the currently trending stocks that investors and analysts are closely watching are:',
    bullets: [
      { ticker: 'NVDA (NVIDIA)', text: ' – Continues to dominate the AI infrastructure and chip market.' },
      { ticker: 'MU (Micron)', text: ' – Benefiting from massive demand for AI memory chips.' },
      {
        ticker: 'HOOD (Robinhood)',
        text: ' – Gaining momentum due to new AI-focused initiatives and strong retail interest.',
      },
      {
        ticker: 'PLTR (Palantir)',
        text: ' – Remains one of the hottest AI software and defense technology plays.',
      },
      { ticker: 'AAPL (Apple)', text: ' – Back in focus due to renewed AI and ecosystem growth expectations.' },
    ],
    outro:
      "If you'd like, I can also give you the top trending AI stocks, Indian stocks, or high-risk/high-growth stocks separately.",
  },
  {
    id: 'q-3',
    role: 'user',
    text: 'okay, show me top trendig AI stocks',
    time: '13:45',
  },
  {
    id: 'a-3',
    role: 'assistant',
    thoughtTime: '11s',
    time: '13:45',
    intro: 'Some of the currently trending stocks that investors and analysts are closely watching are:',
    bullets: [
      {
        ticker: 'NVDA (NVIDIA)',
        text: ' — The undisputed leader in AI chips and infrastructure, continuing to dominate the AI compute market.',
      },
      {
        ticker: 'PLTR (Palantir)',
        text: ' — One of the strongest-performing AI software companies, benefiting from enterprise and government AI adoption.',
      },
      {
        ticker: 'MU (Micron Technology)',
        text: ' — A major beneficiary of the AI memory boom and growing HBM demand.',
      },
      {
        ticker: 'CRWV (CoreWeave)',
        text: ' — One of the hottest AI infrastructure plays, supplying GPU cloud capacity to major AI labs.',
      },
      {
        ticker: 'AMD (AMD)',
        text: ' — Emerging as the primary challenger to NVIDIA in AI accelerators and data center chips.',
      },
    ],
  },
]
