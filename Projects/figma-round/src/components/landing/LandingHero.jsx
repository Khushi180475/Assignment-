import HomePromptBox from '../workbench/HomePromptBox'

export default function LandingHero({ onSubmit }) {
  return (
    <div className="landing-hero">
      <div className="landing-hero__copy">
        <h1 className="landing-hero__title">
          Research deeper. Understand faster.
          <br />
          Start with a question.
        </h1>
      </div>

      <div className="landing-hero__prompt">
        <HomePromptBox onSubmit={onSubmit} />
      </div>

      <p className="landing-hero__caption">AI that gets it right. Every single time.</p>
    </div>
  )
}
