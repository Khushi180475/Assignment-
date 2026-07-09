import NewChatGreeting from '../components/workbench/NewChatGreeting'
import PromptBox from '../components/workbench/PromptBox'
import useTheme from '../context/useTheme'

export default function WorkbenchPage() {
  const { theme } = useTheme()

  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
        background: 'transparent',
      }}
    >
      {/* Left Content Area */}
      <div
        style={{
          flex: 1,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Tab Bar at the top of content */}
        <div
          style={{
            display: 'flex',
            gap: '16px',
            padding: '12px 20px',
            borderBottom: '1px solid var(--border-color)',
            flexShrink: 0,
            background: 'var(--header-bg)',
            backdropFilter: 'blur(18px)',
            WebkitBackdropFilter: 'blur(18px)',
          }}
        >
          <span
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '12px',
              fontWeight: '600',
              color: 'var(--tab-active-color)',
              cursor: 'pointer',
            }}
          >
            Home
          </span>
          <span
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '12px',
              fontWeight: '600',
              color: 'var(--tab-inactive-color)',
              cursor: 'pointer',
            }}
          >
            Chat
          </span>
          <span
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '12px',
              fontWeight: '600',
              color: 'var(--tab-inactive-color)',
              cursor: 'pointer',
            }}
          >
            History
          </span>
        </div>

        {/* Content viewport area */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            padding: '0 24px 40px 24px',
            paddingTop: '38%',
            overflowY: 'auto',
          }}
        >
          {/* Greeting and PromptBox container */}
          <div
            style={{
              width: '730px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '49px', // Figma gap: 448px - 399px = 49px
            }}
          >
            <NewChatGreeting />
            <PromptBox onSubmit={() => {}} />
          </div>
        </div>
      </div>

      {/* Right Side Panel */}
      <div
        style={{
          width: '324px',
          backgroundColor: 'var(--right-panel-bg)',
          borderLeft: '1px solid var(--right-panel-border)',
          height: '100%',
          flexShrink: 0,
          position: 'relative',
          overflow: 'hidden',
          transition: 'background-color 0.35s ease, border-color 0.35s ease',
        }}
      >
        <img
          src={theme.backgroundImage}
          alt=""
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            opacity: 1,
            transition: 'opacity 0.35s ease',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'var(--right-panel-glass)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
          }}
        />
      </div>
    </div>
  )
}
