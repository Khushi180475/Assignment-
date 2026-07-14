import { useEffect, useState } from 'react'
import ChatThread from '../chat/ChatThread'
import FullscreenButton from '../shared/FullscreenButton'

const dateFormatter = new Intl.DateTimeFormat(undefined, { weekday: 'short', day: 'numeric', month: 'short' })
const timeFormatter = new Intl.DateTimeFormat(undefined, { hour: '2-digit', minute: '2-digit', hour12: false })

// Figma node 6:256 — the open pane: clock, conversation, and composer.
// Figma node 9:580 — when collapsed only the mask group survives: the glow orbs
// and the button that brings the chat back.
export default function RightPanelClock({ collapsed = false, onToggleCollapsed }) {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    if (collapsed) return undefined
    const id = setInterval(() => setNow(new Date()), 1000 * 30)
    return () => clearInterval(id)
  }, [collapsed])

  return (
    <div className={`right-panel-clock${collapsed ? ' right-panel-clock--collapsed' : ''}`}>
      {/* Figma nodes 108:420 / 108:421 "Ellipse 632/633" — soft glows straddling
          the pane's top-right and bottom-right corners. */}
      <div className="right-panel-clock__glow right-panel-clock__glow--top" aria-hidden="true" />
      <div className="right-panel-clock__glow right-panel-clock__glow--bottom" aria-hidden="true" />

      <FullscreenButton collapsed={collapsed} onClick={onToggleCollapsed} />

      {!collapsed && (
        <>
          <div className="right-panel-clock__dial">
            <span className="right-panel-clock__date">{dateFormatter.format(now)}</span>
            <span className="right-panel-clock__time">{timeFormatter.format(now)}</span>
            <div className="right-panel-clock__divider" />
          </div>

          <div className="right-panel-clock__scroll">
            <ChatThread />
          </div>

          {/* Node 108:422 "Group 1450" — composer. The attach and send controls
              are light outlines (nodes 108:426 / 108:428), not filled glyphs. */}
          <div className="right-panel-clock__input">
            <span className="right-panel-clock__input-label">How can i help you?</span>

            <button className="right-panel-clock__attach" title="Add attachment" aria-label="Add attachment">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <circle cx="10" cy="10" r="9.4" stroke="currentColor" strokeWidth="0.8" />
                <path d="M10 5.6v8.8M5.6 10h8.8" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
              </svg>
            </button>

            <button className="right-panel-clock__send" title="Send" aria-label="Send">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <rect x="0.4" y="0.4" width="19.2" height="19.2" rx="3.2" stroke="currentColor" strokeWidth="0.8" />
                <path d="M7.8 6.2 13.4 10l-5.6 3.8V6.2Z" stroke="currentColor" strokeWidth="0.9" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </>
      )}
    </div>
  )
}
