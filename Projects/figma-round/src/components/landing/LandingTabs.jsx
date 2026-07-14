import ThemeToggle from '../shared/ThemeToggle'

// Figma node 108:178 / 38:507 "Group 1358" — 30px bar of 12px semibold labels;
// the active one is #000 and the rest #CACACA.
// The theme toggle is an app affordance (not in the design); it sits at the end
// of this bar so it stays clear of the right pane's collapse button.
export default function LandingTabs({ items = ['Chat', 'History'], active = 'Chat' }) {
  return (
    <div className="landing-tabs">
      {items.map((item) => (
        <span
          key={item}
          className={`landing-tabs__item${item === active ? ' landing-tabs__item--active' : ''}`}
        >
          {item}
        </span>
      ))}

      <div className="landing-tabs__actions">
        <ThemeToggle />
      </div>
    </div>
  )
}
