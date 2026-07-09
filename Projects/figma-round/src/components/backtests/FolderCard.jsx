import { useState } from 'react'

export default function FolderCard({ name, itemCount = 1, date = 'Mar 2026', isActive = false, onClick }) {
  const [isHovered, setIsHovered] = useState(false)
  const isSelectedOrHovered = isActive || isHovered

  // Active / Hovered colors matching the exact Figma specifications
  const cardBgColor = isSelectedOrHovered ? 'var(--folder-card-bg-active, #CADE6A1A)' : 'transparent'
  const cardBorderColor = isSelectedOrHovered ? 'var(--folder-card-border-active, #282828)' : 'transparent'
  const folderBgColor = isSelectedOrHovered ? 'var(--folder-bg-active, #CADE6A26)' : 'var(--folder-bg-inactive, rgba(255, 255, 255, 0.02))'
  const folderBorderColor = isSelectedOrHovered ? 'var(--folder-border-active, #CADE6A2E)' : 'var(--folder-border-inactive, rgba(255, 255, 255, 0.06))'
  const flapBorderColor = isSelectedOrHovered ? 'var(--folder-flap-border-active, #CADE6A)' : 'var(--folder-flap-border-inactive, rgba(255, 255, 255, 0.08))'
  
  // Text colors
  const itemCountColor = isSelectedOrHovered ? 'var(--folder-item-active, #CADE6A)' : 'var(--text-secondary, #888888)'
  const nameColor = isSelectedOrHovered ? 'var(--folder-name-active, #CADE6A)' : 'var(--text-primary, #ffffff)'
  const dateColor = isSelectedOrHovered ? 'var(--folder-date-active, #667039)' : 'var(--text-meta, rgba(255, 255, 255, 0.4))'

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      style={{
        position: 'relative',
        width: '155px',
        height: '175px',
        backgroundColor: cardBgColor,
        border: `1px solid ${cardBorderColor}`,
        borderRadius: '12px',
        cursor: 'pointer',
        transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
        userSelect: 'none',
        boxSizing: 'border-box',
        flexShrink: 0,
      }}
    >
      {/* Folder Container Box (Rectangle 201) */}
      <div
        style={{
          position: 'absolute',
          top: '16px',
          left: '17px',
          width: '121px',
          height: '110px',
          backgroundColor: folderBgColor,
          border: `2px solid ${folderBorderColor}`,
          borderRadius: '12px',
          overflow: 'hidden',
          boxSizing: 'border-box',
          transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        {/* Paper 3: Right / Back paper (rotates clockwise 14.23deg) */}
        {itemCount >= 2 && (
          <div
            style={{
              position: 'absolute',
              width: '50px',
              height: '65px',
              top: isHovered ? '8px' : '14.65px',
              left: '53.9px',
              transform: 'rotate(14.23deg)',
              transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            {/* Paper Body (White, curved corners, clipped top-right corner) */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: '#ffffff',
                boxShadow: '-4px 4px 6px 0px rgba(0, 0, 0, 0.15)',
                borderRadius: '4px',
                clipPath: 'polygon(0 0, 34px 0, 50px 16px, 50px 65px, 0 65px)',
              }}
            />
            {/* Dog-ear fold */}
            <div
              style={{
                position: 'absolute',
                top: '0px',
                right: '0px',
                width: '16px',
                height: '16px',
                backgroundColor: '#D0D0D0',
                borderBottomLeftRadius: '4px',
                boxShadow: '-2px 2px 3px rgba(0, 0, 0, 0.2)',
                clipPath: 'polygon(0 0, 100% 100%, 0 100%)',
              }}
            />
          </div>
        )}

        {/* Paper 2: Middle paper (rotates 0deg) */}
        <div
          style={{
            position: 'absolute',
            width: '50px',
            height: '65px',
            top: isHovered ? '2px' : '8.92px',
            left: '36.31px',
            transform: 'rotate(0deg)',
            transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          {/* Paper Body */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: '#ffffff',
              boxShadow: '-4px 4px 6px 0px rgba(0, 0, 0, 0.15)',
              borderRadius: '4px',
              clipPath: 'polygon(0 0, 34px 0, 50px 16px, 50px 65px, 0 65px)',
            }}
          />
          {/* Dog-ear fold */}
          <div
            style={{
              position: 'absolute',
              top: '0px',
              right: '0px',
              width: '16px',
              height: '16px',
              backgroundColor: '#D0D0D0',
              borderBottomLeftRadius: '4px',
              boxShadow: '-2px 2px 3px rgba(0, 0, 0, 0.2)',
              clipPath: 'polygon(0 0, 100% 100%, 0 100%)',
            }}
          />
        </div>

        {/* Paper 1: Left / Front paper (rotates counter-clockwise -16deg) */}
        {itemCount >= 3 && (
          <div
            style={{
              position: 'absolute',
              width: '50px',
              height: '65px',
              top: isHovered ? '-3px' : '3.29px',
              left: '7.32px',
              transform: 'rotate(-16deg)',
              transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            {/* Paper Body */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: '#ffffff',
                boxShadow: '-4px 4px 6px 0px rgba(0, 0, 0, 0.15)',
                borderRadius: '4px',
                clipPath: 'polygon(0 0, 34px 0, 50px 16px, 50px 65px, 0 65px)',
              }}
            />
            {/* Dog-ear fold */}
            <div
              style={{
                position: 'absolute',
                top: '0px',
                right: '0px',
                width: '16px',
                height: '16px',
                backgroundColor: '#D0D0D0',
                borderBottomLeftRadius: '4px',
                boxShadow: '-2px 2px 3px rgba(0, 0, 0, 0.2)',
                clipPath: 'polygon(0 0, 100% 100%, 0 100%)',
              }}
            />
          </div>
        )}

        {/* Vector 45 (Front Cover Flap Container Div) */}
        <div
          style={{
            position: 'absolute',
            top: '23px',
            left: '0px',
            width: '121px',
            height: '85.34px',
            zIndex: 3,
          }}
        >
          {/* Second blur layer */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backdropFilter: 'blur(150px)',
              WebkitBackdropFilter: 'blur(150px)',
              maskImage: 'linear-gradient(to bottom, transparent 10%, black 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 10%, black 100%)',
            }}
          />

          <svg
            width="121"
            height="86"
            viewBox="0 0 121 86"
            style={{
              position: 'absolute',
              top: '0px',
              left: '0px',
              width: '100%',
              height: '100%',
              transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            <defs>
              <linearGradient id="activeFlapGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="var(--folder-active-gradient-start, #CADE6A)" stopOpacity="0.5" />
                <stop offset="100%" stopColor="var(--folder-active-gradient-end, #CADE6A)" stopOpacity="0.08" />
              </linearGradient>
              <linearGradient id="inactiveFlapGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="var(--folder-inactive-stop-1-color, #FFFFFF)" stopOpacity="var(--folder-inactive-stop-1-opacity, 0.08)" />
                <stop offset="100%" stopColor="var(--folder-inactive-stop-2-color, #FFFFFF)" stopOpacity="var(--folder-inactive-stop-2-opacity, 0.01)" />
              </linearGradient>
            </defs>
            <path
              d="M 0,20 L 0,75.34 A 10,10 0 0,0 10,85.34 L 111,85.34 A 10,10 0 0,0 121,75.34 L 121,20 A 4,4 0 0,0 117,16 L 52,16 Q 46,16 44,12 L 42,8 Q 40,4 36,4 L 4,4 A 4,4 0 0,0 0,8 Z"
              style={{
                fill: isSelectedOrHovered ? 'url(#activeFlapGrad)' : 'url(#inactiveFlapGrad)',
                stroke: flapBorderColor,
                strokeWidth: '2px',
                transition: 'fill 0.25s cubic-bezier(0.4, 0, 0.2, 1), stroke 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            />
          </svg>
        </div>

        {/* Capsule: 3 Items */}
        <span
          style={{
            position: 'absolute',
            top: '79px',
            left: '11px',
            width: 'auto',
            height: '24px',
            fontFamily: 'Inter',
            fontWeight: '500',
            fontSize: '9px',
            lineHeight: '24px',
            color: itemCountColor,
            textDecoration: 'underline',
            textDecorationStyle: 'solid',
            zIndex: 4,
            transition: 'all 0.2s ease',
          }}
        >
          {itemCount} Items
        </span>
      </div>

      {/* Text - Backtest One */}
      <div
        style={{
          position: 'absolute',
          top: '132px',
          left: '0px',
          width: '100%',
          height: '24px',
          textAlign: 'center',
          fontFamily: '"Old Standard TT", Georgia, serif',
          fontWeight: '400',
          fontSize: '12px',
          lineHeight: '24px',
          letterSpacing: '-2%',
          color: nameColor,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          padding: '0 8px',
          boxSizing: 'border-box',
          transition: 'all 0.2s ease',
        }}
      >
        {name}
      </div>

      {/* Text - 9 Mar */}
      <div
        style={{
          position: 'absolute',
          top: '147px',
          left: '0px',
          width: '100%',
          height: '24px',
          textAlign: 'center',
          fontFamily: 'Inter',
          fontWeight: '500',
          fontSize: '9px',
          lineHeight: '24px',
          color: dateColor,
          transition: 'all 0.2s ease',
        }}
      >
        {date}
      </div>
    </div>
  )
}
