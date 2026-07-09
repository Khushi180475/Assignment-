import { dummyChatTurns } from '../../data/dummyChatMessages'
import HomePromptBox from './HomePromptBox'

function MaximizeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 3 21 3 21 9" />
      <polyline points="9 21 3 21 3 15" />
      <line x1="21" y1="3" x2="14" y2="10" />
      <line x1="3" y1="21" x2="10" y2="14" />
    </svg>
  )
}

function MinimizeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 14 10 14 10 20" />
      <polyline points="20 10 14 10 14 4" />
      <line x1="14" y1="10" x2="21" y2="3" />
      <line x1="10" y1="14" x2="3" y2="21" />
    </svg>
  )
}

function ChevronIcon() {
  return (
    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

function CopyIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  )
}

function RefreshIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 4 23 10 17 10" />
      <polyline points="1 20 1 14 7 14" />
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
    </svg>
  )
}

// Figma "chat playground" (node 38-2031) values: image placeholder cards use
// #F7F5F5 @ 4px radius, and the fade above the input box is a 3-stop
// #FAFAF8 gradient (15% / 70% / 100%) matching the app background.
const PLACEHOLDER_BG = '#F7F5F5'
const FADE_COLOR = '250, 250, 248'

export default function ChatPanel({ variant = 'side', onToggle }) {
  const isFull = variant === 'full'
  const imageScale = isFull ? 1 : 0.5

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        boxSizing: 'border-box',
        position: 'relative',
        // The side panel header sits under the global theme toggle (top:12/right:16,
        // 32px tall), so push it down to keep the maximize button clickable.
        paddingTop: isFull ? 0 : '40px',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: isFull ? '16px 24px' : '12px 16px',
          borderBottom: '1px solid var(--border-color)',
          flexShrink: 0,
        }}
      >
        <span
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: isFull ? '14px' : '12px',
            fontWeight: '600',
            color: 'var(--text-primary)',
          }}
        >
          Chat
        </span>
        <button
          onClick={onToggle}
          title={isFull ? 'Minimize to side panel' : 'Maximize to full screen'}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '28px',
            height: '28px',
            borderRadius: '8px',
            border: '1px solid var(--border-color)',
            backgroundColor: 'transparent',
            color: 'var(--text-secondary)',
            cursor: 'pointer',
            padding: 0,
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'var(--text-primary)'
            e.currentTarget.style.borderColor = 'var(--border-hover)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--text-secondary)'
            e.currentTarget.style.borderColor = 'var(--border-color)'
          }}
        >
          {isFull ? <MinimizeIcon /> : <MaximizeIcon />}
        </button>
      </div>

      {/* Message list */}
      <div
        style={{
          flex: 1,
          minHeight: 0,
          overflowY: 'auto',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          padding: isFull ? '24px 24px 40px' : '16px',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: isFull ? '430px' : '100%',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: isFull ? '28px' : '18px',
          }}
        >
          {dummyChatTurns.map((turn) => (
          <div key={turn.id} style={{ display: 'flex', flexDirection: 'column', gap: isFull ? '8px' : '6px' }}>
            {/* Collapsed/muted echo of the user's question */}
            <div
              title={turn.question}
              style={{
                alignSelf: 'flex-start',
                maxWidth: '80%',
                padding: isFull ? '5px 10px' : '4px 8px',
                borderRadius: '8px',
                backgroundColor: 'var(--prompt-chip-bg)',
                color: 'var(--text-placeholder)',
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: isFull ? '11px' : '10px',
                fontWeight: '500',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {turn.question}
            </div>

            {/* Thought label */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                color: 'var(--text-meta)',
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: isFull ? '11px' : '10px',
                fontStyle: 'italic',
              }}
            >
              <span>Thought for {turn.thoughtTime}</span>
              <ChevronIcon />
            </div>

            {/* Response body */}
            <p
              style={{
                margin: 0,
                color: 'var(--text-secondary)',
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: isFull ? '13px' : '11px',
                lineHeight: 1.6,
              }}
            >
              {turn.response}
            </p>

            {/* Copy / regenerate actions */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-placeholder)' }}>
              <button
                title="Copy"
                style={{ display: 'flex', border: 'none', background: 'transparent', color: 'inherit', cursor: 'pointer', padding: 0 }}
              >
                <CopyIcon />
              </button>
              <button
                title="Regenerate"
                style={{ display: 'flex', border: 'none', background: 'transparent', color: 'inherit', cursor: 'pointer', padding: 0 }}
              >
                <RefreshIcon />
              </button>
            </div>

            {/* Image placeholder cards */}
            {turn.images && (
              <div style={{ display: 'flex', gap: '8px', marginTop: '4px' }}>
                {turn.images.map((img, i) => (
                  <div
                    key={i}
                    style={{
                      width: `${img.width * imageScale}px`,
                      height: `${img.height * imageScale}px`,
                      flexShrink: 0,
                      borderRadius: '4px',
                      backgroundColor: PLACEHOLDER_BG,
                    }}
                  />
                ))}
              </div>
            )}
          </div>
          ))}
        </div>
      </div>

      {/* Fade-to-background mask above the input box */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: isFull ? '100px' : '0',
          height: isFull ? '72px' : '36px',
          background: `linear-gradient(180deg, rgba(${FADE_COLOR}, 0.15) 0%, rgba(${FADE_COLOR}, 0.7) 50%, rgba(${FADE_COLOR}, 1) 100%)`,
          pointerEvents: 'none',
        }}
      />

      {isFull && (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '0 24px 24px', flexShrink: 0 }}>
          <HomePromptBox onSubmit={() => {}} />
        </div>
      )}
    </div>
  )
}
