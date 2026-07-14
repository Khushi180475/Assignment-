import { useState } from 'react'

export default function HomePromptBox({ onSubmit }) {
  const [inputValue, setInputValue] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  const handleSend = () => {
    if (inputValue.trim()) {
      onSubmit?.(inputValue)
      setInputValue('')
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSend()
    }
  }

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '430px',
        height: '85px',
        backgroundColor: 'var(--prompt-inner-bg)',
        border: isFocused ? '1px solid var(--prompt-inner-focus-border)' : '1px solid var(--prompt-inner-border)',
        borderRadius: '8px',
        position: 'relative',
        boxSizing: 'border-box',
        boxShadow: 'var(--prompt-shadow)',
        transition: 'border-color 0.2s ease, background-color 0.25s ease, box-shadow 0.25s ease',
      }}
    >
      {/* Input area */}
      <input
        className="prompt-input"
        type="text"
        placeholder="Add prompt instructions"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={{
          position: 'absolute',
          top: '7px',
          left: '13px',
          width: 'calc(100% - 26px)',
          height: '24px',
          background: 'transparent',
          border: 'none',
          outline: 'none',
          color: 'var(--text-primary)',
          fontFamily: 'Inter, system-ui, sans-serif',
          fontWeight: '500',
          fontSize: '8px',
          letterSpacing: '-0.16px',
        }}
      />

      {/* Bottom actions row */}
      <div
        style={{
          position: 'absolute',
          bottom: '12px',
          left: '16px',
          right: '16px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '24px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {/* Attach Button — node 108:350, a light 14px "+" glyph. */}
          <button
            onClick={() => alert('Attachment upload')}
            style={{
              width: '20px',
              height: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-primary)',
              fontSize: '14px',
              fontWeight: '400',
              lineHeight: 1,
              cursor: 'pointer',
              border: 'none',
              background: 'transparent',
              padding: 0,
            }}
            title="Add attachment"
          >
            +
          </button>

          {/* Suggestion Chip */}
          <button
            onClick={() => setInputValue('Dual Momentum Strategy')}
            style={{
              padding: '4px 10px',
              backgroundColor: 'var(--prompt-chip-bg)',
              border: '0.8px solid var(--prompt-chip-border)',
              borderRadius: '2.5px',
              color: 'var(--text-primary)',
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '7.5px',
              fontWeight: '500',
              letterSpacing: '-0.15px',
              cursor: 'pointer',
            }}
          >
            Dual Momentum Strategy
          </button>
        </div>

        {/* Send Button — node 108:356: an outlined rounded square with a play
            glyph, the same control as the side-pane composer. */}
        <button
          onClick={handleSend}
          disabled={!inputValue.trim()}
          style={{
            width: '19.35px',
            height: '20.13px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--prompt-send-icon)',
            cursor: inputValue.trim() ? 'pointer' : 'not-allowed',
            opacity: inputValue.trim() ? 1 : 0.55,
            border: 'none',
            background: 'transparent',
            padding: 0,
          }}
          title="Send"
        >
          <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <rect x="0.4" y="0.4" width="19.2" height="19.2" rx="3.2" stroke="currentColor" strokeWidth="0.8" />
            <path d="M7.8 6.2 13.4 10l-5.6 3.8V6.2Z" stroke="currentColor" strokeWidth="0.9" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  )
}
