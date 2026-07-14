import RightPanelClock from './RightPanelClock'

// Figma node 108:364 (open) / node 9:579 "right side chat" (collapsed).
// The pane surface is a frosted layer over a heavily blurred backdrop, which
// reads as a smooth vertical gradient — reproduced with --pane-gradient rather
// than the raw wallpaper, whose texture showed through. Collapsing hides the
// conversation and leaves a 30px rail carrying only the mask group.
export default function LandingSidePanel({ collapsed = false, onToggleCollapsed }) {
  return (
    <aside className={`landing-sidepanel${collapsed ? ' landing-sidepanel--collapsed' : ''}`}>
      <RightPanelClock collapsed={collapsed} onToggleCollapsed={onToggleCollapsed} />
    </aside>
  )
}
