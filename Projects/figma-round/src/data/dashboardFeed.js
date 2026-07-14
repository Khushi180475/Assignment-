import spotlightHero from '../assets/news/spotlightHero.png'
import adani from '../assets/news/adani.png'
import zomato from '../assets/news/zomato.png'
import parasDefence from '../assets/news/parasDefence.png'
import marketRally from '../assets/news/marketRally.png'
import alexKarp from '../assets/news/alexKarp.png'
import dowJones from '../assets/news/dowJones.png'
import amca from '../assets/news/amca.png'

const WEST_ASIA_HEADLINE =
  "West Asia LIVE: 'Deep mistrust' in U.S. remains despite deal, says Iran's foreign ministry"

// Figma node 6:84 "Event Card 13" — the large spotlight card.
export const spotlightFeature = {
  image: spotlightHero,
  title: WEST_ASIA_HEADLINE,
  date: '14 June',
  readTime: '8min read',
}

// Figma node 6:86 "Group 1459" — the "Latest Post" rail beside the feature.
export const latestPosts = [
  { id: 'lp-1', title: WEST_ASIA_HEADLINE, date: '10 Jun' },
  { id: 'lp-2', title: WEST_ASIA_HEADLINE, date: '10 Jun' },
  { id: 'lp-3', title: WEST_ASIA_HEADLINE, date: '10 Jun' },
  { id: 'lp-4', title: WEST_ASIA_HEADLINE, date: '10 Jun' },
]

// Figma node 6:119 "upcoming events" — grouped by date heading.
export const upcomingEventGroups = [
  {
    id: '1-jun-2026',
    date: '1 Jun, 2026',
    events: [
      {
        id: 'dow-jones-1',
        image: dowJones,
        title: 'Dow Jones| Nasdaq | US Stock Mark...',
        description:
          'Dow Jones Today | US Stock Market Live: U.S. sto ck futures advanced on Tuesday, with chipmakers extending their rally for a second str...',
      },
      {
        id: 'amca',
        image: amca,
        title: 'AMCA tender issued, HAL sits ou...',
        description:
          'Going by current timeline, five prototypes of India’s own 5th-gen fighter are set to be rolled out by 2...',
      },
      // Node 108:320 "Event Card 8" — hidden in the design, but its slot still
      // leaves a gap before the next card.
      { id: 'hidden-slot', placeholder: true },
      {
        id: 'dow-jones-2',
        image: dowJones,
        title: 'Dow Jones| Nasdaq | US Stock Mark...',
        description:
          'Dow Jones Today | US Stock Market Live: U.S. sto ck futures advanced on Tuesday, with chipmakers extending their rally for a second str...',
      },
    ],
  },
  {
    id: '2-jun-2026',
    date: '2 Jun, 2026',
    events: [
      {
        id: 'alex-karp',
        image: alexKarp,
        title: "Excessive AI Use Is Like 'Porn Addicti...",
        description:
          'Alex Karp argued that organisations have prioritis ed increasing token consumption over assessing...',
      },
      {
        id: 'adani',
        image: adani,
        title: 'Why Adani is onboarding L&T for nuc...',
        description:
          'Adani is in talks with the L&T group for the constru ction of a nuclear power plant as it finalises poss...',
      },
      {
        id: 'zomato',
        image: zomato,
        title: 'Zomato introduces low-plastic packa...',
        description:
          'Celebrating World Environment Day, Zomato has launched a feature designed to help eco-consc...',
      },
      {
        id: 'paras-defence',
        image: parasDefence,
        title: 'Paras Defence, BEL, HAL gain up to 5...',
        description:
          "Adding to the positive sentiment, JM Financial Institutional Securities reiterated its 'Buy' rating...",
        crop: '0%', // node 108:267 "image 143" is left-aligned
      },
      {
        id: 'market-rally',
        image: marketRally,
        title: 'Market rally extends to fourth week; r...',
        description:
          'Foreign Institutional Investors (FIIs) sold equities worth around ₹4,000 crore during the week, w ...',
        crop: '70%', // node 108:278 "image 144"
      },
    ],
  },
]
