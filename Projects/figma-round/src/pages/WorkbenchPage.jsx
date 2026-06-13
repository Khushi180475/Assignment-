import WorkbenchBreadcrumb from '../components/workbench/WorkbenchBreadcrumb'
import NewChatGreeting from '../components/workbench/NewChatGreeting'
import PromptBox from '../components/workbench/PromptBox'
import NotificationIcon from '../components/shared/NotificationIcon'
import BalanceCredits from '../components/shared/BalanceCredits'

export default function WorkbenchPage() {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        background: 'transparent',
      }}
    >
      {/* Row 1: Workbench header bar */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '12px 24px',
          borderBottom: '1px solid var(--border-color)',
          flexShrink: 0,
          backgroundColor: 'rgba(7, 7, 8, 0.5)',
          backdropFilter: 'blur(10px)',
          zIndex: 10,
        }}
      >
        <WorkbenchBreadcrumb />
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <NotificationIcon />
          <BalanceCredits />
        </div>
      </div>

      {/* Row 2: Center content area */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px 24px',
          overflowY: 'auto',
        }}
      >
        {/* Row 2: Default Greeting and PromptBox centered container */}
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
  )
}
