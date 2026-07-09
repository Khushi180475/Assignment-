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
        type="text"
        placeholder="Add prompt instructions"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={{
          position: 'absolute',
          top: '12px',
          left: '16px',
          width: 'calc(100% - 32px)',
          height: '24px',
          background: 'transparent',
          border: 'none',
          outline: 'none',
          color: 'var(--text-primary)',
          fontFamily: 'Inter, system-ui, sans-serif',
          fontWeight: '400',
          fontSize: '11px',
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
          {/* Attach Button */}
          <button
            onClick={() => alert('Attachment upload')}
            style={{
              width: '16px',
              height: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-primary)',
              fontSize: '16px',
              fontWeight: '400',
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
              border: '1px solid var(--prompt-chip-border)',
              borderRadius: '4px',
              color: 'var(--text-secondary)',
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '9px',
              fontWeight: '500',
              cursor: 'pointer',
            }}
          >
            Dual Momentum Strategy
          </button>
        </div>

        {/* Send Button */}
        <button
          onClick={handleSend}
          disabled={!inputValue.trim()}
          style={{
            width: '20px',
            height: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-primary)',
            cursor: inputValue.trim() ? 'pointer' : 'not-allowed',
            opacity: inputValue.trim() ? 1 : 0.3,
            border: 'none',
            background: 'transparent',
            padding: 0,
          }}
          title="Send"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      </div>
    </div>
  )
}
