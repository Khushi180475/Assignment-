import { useState, useRef } from 'react'
import MonthSelector from '../components/backtests/MonthSelector'
import BacktestFolderList from '../components/backtests/BacktestFolderList'
import ScrollButton from '../components/backtests/ScrollButton'

export default function MyBacktestsPage() {

  const [selectedFolder, setSelectedFolder] = useState(null)
  const listRef = useRef(null)

  const handleSelectFolder = (folder) => {
    setSelectedFolder(folder)
  }

  const handleScrollRight = () => {
    if (listRef.current) {
      listRef.current.scrollBy({ left: 240, behavior: 'smooth' })
    }
  }

  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'transparent',
        position: 'relative',
      }}
    >
      {/* Press ESC to exit banner */}
      <div
        style={{
          position: 'absolute',
          top: '12px',
          left: '50%',
          transform: 'translateX(-50%)',
          color: '#888888',
          fontSize: '13px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          pointerEvents: 'none',
          zIndex: 5,
        }}
      >
        <span>Press</span>
        <span
          style={{
            backgroundColor: '#2b2b2f',
            border: '1px solid #444444',
            borderRadius: '4px',
            padding: '2px 6px',
            color: '#ffffff',
            fontSize: '11px',
            fontFamily: 'monospace',
          }}
        >
          ESC
        </span>
        <span>to exit</span>
      </div>

      {/* Main Content Layout (Flex Row with right-sidebar) */}
      <div style={{ flex: 1, display: 'flex', overflow: 'hidden', paddingTop: '40px' }}>
        {/* Left main workspace column */}
        <div
          style={{
            flex: 1,
            overflow: 'hidden',
            padding: '24px 32px 0 32px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          
          {/* Header Row: Title and MonthSelector */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '20px',
              flexShrink: 0,
            }}
          >
            <h1
              style={{
                fontFamily: '"Times New Roman", Times, Georgia, serif',
                fontSize: '26px',
                fontWeight: '400',
                color: '#CADE6A',
                margin: 0,
              }}
            >
              My Backtests
            </h1>
            <MonthSelector />
          </div>

          {/* Folder row with scroll arrow button */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '20px',
              width: '100%',
              flexShrink: 0,
            }}
          >
            <BacktestFolderList
              ref={listRef}
              selectedFolder={selectedFolder}
              onSelectFolder={handleSelectFolder}
            />
            <ScrollButton onClick={handleScrollRight} />
          </div>

          {/* Compare Bench Section */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '1087px',
              maxWidth: '100%',
              margin: '0 auto',
              flex: 1,
              overflow: 'hidden',
            }}
          >
            <h2
              style={{
                fontFamily: '"Times New Roman", Times, Georgia, serif',
                fontSize: '24px',
                fontWeight: '400',
                color: '#CADE6A',
                margin: '0 0 16px 0',
                flexShrink: 0,
              }}
            >
              Compare Bench
            </h2>

            <div
              style={{
                width: '100%',
                flex: 1,
                maxHeight: '520px',
                backgroundColor: '#25252580',
                backdropFilter: 'blur(80px)',
                WebkitBackdropFilter: 'blur(80px)',
                borderRadius: '16px',
                position: 'relative',
                overflow: 'hidden',
                border: 'none',
                marginBottom: '24px',
              }}
            />
          </div>
        </div>


      </div>
    </div>
  )
}

