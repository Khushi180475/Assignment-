import { chatThread } from '../../data/chatThread'

// Figma node 6:276 "ic:outline-lightbulb" — 8x8, sits before the "Thought for Xs" label.
function LightbulbIcon() {
  return (
    <svg className="chat-thread__bulb" width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
      <path
        d="M3 7C3 7.18333 3.15 7.33333 3.33333 7.33333H4.66667C4.85 7.33333 5 7.18333 5 7V6.66667H3V7ZM4 0.666667C2.71333 0.666667 1.66667 1.71333 1.66667 3C1.66667 3.79333 2.06333 4.49 2.66667 4.91333V5.66667C2.66667 5.85 2.81667 6 3 6H5C5.18333 6 5.33333 5.85 5.33333 5.66667V4.91333C5.93667 4.49 6.33333 3.79333 6.33333 3C6.33333 1.71333 5.28667 0.666667 4 0.666667ZM4.95 4.36667L4.66667 4.56667V5.33333H3.33333V4.56667L3.05 4.36667C2.82922 4.21351 2.64875 4.00924 2.52396 3.77127C2.39918 3.53331 2.33378 3.2687 2.33333 3C2.33333 2.08 3.08 1.33333 4 1.33333C4.92 1.33333 5.66667 2.08 5.66667 3C5.66667 3.54333 5.4 4.05333 4.95 4.36667Z"
        fill="currentColor"
      />
    </svg>
  )
}

// Figma nodes 6:297 / 6:302 / 6:307 — right-aligned user bubble with the time below it.
function UserMessage({ text, time }) {
  return (
    <div className="chat-thread__turn chat-thread__turn--user">
      <p className="chat-thread__bubble">{text}</p>
      <span className="chat-thread__time">{time}</span>
    </div>
  )
}

// Figma nodes 6:269 / 6:278 / 6:288 — thought label, body copy, then the time.
function AssistantMessage({ thoughtTime, paragraphs, intro, bullets, outro, time }) {
  return (
    <div className="chat-thread__turn chat-thread__turn--assistant">
      <div className="chat-thread__thought">
        <LightbulbIcon />
        <span>Thought for {thoughtTime}</span>
      </div>

      <div className="chat-thread__body">
        {paragraphs?.map((paragraph) => (
          <p key={paragraph} className="chat-thread__paragraph">
            {paragraph}
          </p>
        ))}

        {intro && <p className="chat-thread__paragraph">{intro}</p>}

        {bullets && (
          <p className="chat-thread__bullets">
            {bullets.map((bullet) => (
              <span key={bullet.ticker} className="chat-thread__bullet">
                <span className="chat-thread__ticker">{bullet.ticker}</span>
                {bullet.text}
              </span>
            ))}
          </p>
        )}

        {outro && <p className="chat-thread__paragraph">{outro}</p>}
      </div>

      <span className="chat-thread__time">{time}</span>
    </div>
  )
}

export default function ChatThread() {
  return (
    <div className="chat-thread">
      {chatThread.map((message) =>
        message.role === 'user' ? (
          <UserMessage key={message.id} text={message.text} time={message.time} />
        ) : (
          <AssistantMessage
            key={message.id}
            thoughtTime={message.thoughtTime}
            paragraphs={message.paragraphs}
            intro={message.intro}
            bullets={message.bullets}
            outro={message.outro}
            time={message.time}
          />
        ),
      )}
    </div>
  )
}
