import { useState } from 'react'

export default function PromptBox({ onSubmit }) {
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

  const handleSuggestionClick = (text) => {
    setInputValue(text)
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      {/* Prompt-Box-extention / Rectangle 9 */}
      <div
        style={{
          width: '730px',
          height: '180px',
          backgroundColor: '#1C1C1C',
          border: '1px solid #252525',
          borderRadius: '25px',
          position: 'relative',
          boxSizing: 'border-box',
          overflow: 'hidden',
          boxShadow: '0px 10px 40px 0px rgba(0, 0, 0, 0.45)', // #00000073 shadow
        }}
      >
        {/* Prompt Box container (Rectangle 4 / Rectangle 3 depending on focus) */}
        <div
          style={{
            position: 'absolute',
            top: '4px',
            left: '5px',
            width: '720px',
            height: '120px',
            backgroundColor: isFocused ? '#171C25' : '#0F0F0F', // Rectangle 3 vs 4
            border: isFocused ? '1px solid #232734' : '1px solid #1B1B1B', // Rectangle 3 vs 4
            borderRadius: '20px',
            boxSizing: 'border-box',
            transition: 'all 0.2s ease',
          }}
        >
          {/* Text input area */}
          <input
            className="prompt-input"
            type="text"
            placeholder="Give me the DCF approximation value of NVIDIA"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            style={{
              position: 'absolute',
              top: '15px',
              left: '16px',
              width: '688px', // 720 - 32
              height: '32px',
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: '#ffffff',
              fontFamily: 'Inter, system-ui, sans-serif',
              fontWeight: '400',
              fontSize: '18px',
              lineHeight: '24px',
            }}
          />

          {/* Attachment Btn */}
          <button
            onClick={() => alert('Simulated attachment upload')}
            style={{
              position: 'absolute',
              top: '71px',
              left: '28px',
              width: '16px',
              height: '24px',
              
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#FFFFFF',
              fontSize: '20px',
              fontWeight: 'bold',
              padding: 0,
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = 0.85)}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = 1)}
            title="Add Attachment (+)"
          >
            +
          </button>

          {/* send-Btn */}
          <button
            onClick={handleSend}
            disabled={!inputValue.trim()}
            style={{
              position: 'absolute',
              top: '64px',
              left: '664px', // 720 - 16 - 40
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: '#FFFFFF',
              border: '1px solid #212121',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: inputValue.trim() ? 'pointer' : 'not-allowed',
              transition: 'opacity 0.2s',
              opacity: inputValue.trim() ? 1 : 0.4,
              padding: 0,
            }}
            onMouseEnter={(e) => {
              if (inputValue.trim()) e.currentTarget.style.opacity = 0.85
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = inputValue.trim() ? 1 : 0.4
            }}
            title="Send"
          >
            <span
              style={{
                color: '#000000',
                fontSize: '16px',
                fontWeight: 'bold',
                lineHeight: '1',
                display: 'inline-flex',
              }}
            >
              ↑
            </span>
          </button>
        </div>

        {/* Bottom Panel suggestions & shortcuts */}

        {/* prompt-one chip */}
        <button
          onClick={() => handleSuggestionClick('short the stock')}
          style={{
            position: 'absolute',
            top: '137px', // 585 - 448 = 137px
            left: '12px', // 503 - 491 = 12px
            width: '96px',
            height: '30px',
            borderRadius: '100px',
            border: '1px solid #252525',
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            color: 'var(--text-secondary)',
            fontSize: '11px',
            fontWeight: '500',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s ease',
            padding: 0,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--border-hover)'
            e.currentTarget.style.color = '#ffffff'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = '#252525'
            e.currentTarget.style.color = 'var(--text-secondary)'
          }}
        >
          short the stock
        </button>

        {/* prompt-two chip */}
        <button
          onClick={() => handleSuggestionClick('Dual momentum strategy')}
          style={{
            position: 'absolute',
            top: '137px',
            left: '117px', // 608 - 491 = 117px
            width: '147px',
            height: '30px',
            borderRadius: '100px',
            border: '1px solid #252525',
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            color: 'var(--text-secondary)',
            fontSize: '11px',
            fontWeight: '500',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s ease',
            padding: 0,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--border-hover)'
            e.currentTarget.style.color = '#ffffff'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = '#252525'
            e.currentTarget.style.color = 'var(--text-secondary)'
          }}
        >
          Dual momentum strategy
        </button>

        {/* ticker-search-shortcut-label (⌘T) */}
        <div
          style={{
            position: 'absolute',
            top: '140px', // 588 - 448 = 140px
            left: '627px', // 1118 - 491 = 627px
            width: '40px',
            height: '24px',
            borderRadius: '12px',
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
            color: '#505050',
            fontSize: '11px',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            userSelect: 'none',
          }}
          title="Shortcut: Command+T"
        >
          ⌘T
        </div>

        {/* ticker-search-icon (🔍) */}
        <button
          onClick={() => handleSuggestionClick('Search tickers: ')}
          style={{
            position: 'absolute',
            top: '143px', // 591 - 448 = 143px
            left: '676px', // 1167 - 491 = 676px
            width: '22px',
            height: '18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#505050',
            cursor: 'pointer',
            transition: 'color 0.2s',
            padding: 0,
            backgroundColor: 'transparent',
            border: 'none',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#505050')}
          title="Search tickers"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>
      </div>
    </div>
  )
}
