import { useRef, useEffect } from 'react'
import { useSidebar } from '../../context/SidebarContext'

export default function SearchBar() {
  const { sidebarState, toggleSidebar } = useSidebar()
  const isCollapsed = sidebarState === 'collapsed'
  const inputRef = useRef(null)

  // Alt+F (Option+F) shortcut handler to focus the input field
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.altKey && e.key.toLowerCase() === 'f') {
        e.preventDefault()
        if (isCollapsed) {
          toggleSidebar()
          // Focus after transition completes
          setTimeout(() => {
            inputRef.current?.focus()
          }, 300)
        } else {
          inputRef.current?.focus()
        }
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isCollapsed, toggleSidebar])

  if (isCollapsed) {
    return (
      <button
        onClick={toggleSidebar}
        style={{
          position: 'absolute',
          width: '40px',
          height: '40px',
          left: '0',
          borderRadius: '12px',
          border: '1px solid #303030',
          background: 'transparent',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.2s ease',
        }}
        title="Search (⌥F)"
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)'
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = '#303030'
          e.currentTarget.style.background = 'transparent'
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#8F8F8F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </button>
    )
  }

  return (
    <div
      style={{
        position: 'absolute',
        width: '100%',
        height: '40px',
        left: '0',
        border: '1px solid #303030',
        borderRadius: '12px',
        background: 'transparent',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        padding: '0 11px',
        transition: 'all 0.2s ease',
      }}
      onClick={() => inputRef.current?.focus()}
    >
      {/* ri:search-line (width: 20, height: 20) */}
      <span
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '20px',
          height: '20px',
          marginRight: '11px',
          flexShrink: 0,
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#8F8F8F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </span>

      {/* Input Field */}
      <input
        ref={inputRef}
        type="text"
        placeholder="search"
        className="sidebar-search-input"
        style={{
          background: 'transparent',
          border: 'none',
          outline: 'none',
          color: '#ffffff',
          fontFamily: 'Inter',
          fontWeight: 500,
          fontSize: '16px',
          lineHeight: '24px',
          width: '135px',
          padding: 0,
          margin: 0,
        }}
      />

      {/* Group 4 (Shortcut badge: width: 27, height: 24, right: 11px) */}
      <div
        style={{
          position: 'absolute',
          width: '27px',
          height: '24px',
          right: '11px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {/* hugeicons:option SVG (width: 15, height: 15) */}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: 'absolute',
            left: 0,
            top: '4.5px',
          }}
        >
          <path
            d="M2.5 11.875H5L10 3.125H12.5"
            stroke="#484848"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.75 3.125H12.5"
            stroke="#484848"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* text F */}
        <span
          style={{
            position: 'absolute',
            left: '18px',
            top: 0,
            width: '9px',
            height: '24px',
            fontFamily: 'Inter',
            fontWeight: 500,
            fontSize: '14px',
            lineHeight: '24px',
            color: '#4D4D4D',
          }}
        >
          F
        </span>
      </div>
    </div>
  )
}
