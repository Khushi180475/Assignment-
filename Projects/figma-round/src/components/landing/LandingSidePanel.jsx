import useTheme from '../../context/useTheme'
import ChatPanel from '../workbench/ChatPanel'

export default function LandingSidePanel({ collapsed = false, isChatMaximized = false, onMaximizeChat }) {
  const { theme } = useTheme()

  if (!collapsed) return null

  return (
    <aside className="landing-sidepanel">
      <img className="landing-sidepanel__image" src={theme.backgroundImage} alt="" />
      <div className="landing-sidepanel__glass" />
      {!isChatMaximized && (
        <div style={{ position: 'absolute', inset: 0 }}>
          <ChatPanel variant="side" onToggle={onMaximizeChat} />
        </div>
      )}
    </aside>
  )
}
