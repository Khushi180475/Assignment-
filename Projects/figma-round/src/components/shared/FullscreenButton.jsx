// Figma node 6:260 "fullscreen button" / node 9:585 "right side chat window
// collapse button" — the same 15x11 panel glyph in both states; it hides the
// chat into a 30px rail and brings it back.
export default function FullscreenButton({ onClick, collapsed = false }) {
  const label = collapsed ? 'Show chat' : 'Hide chat (fullscreen)'

  return (
    <button
      type="button"
      className="fullscreen-button"
      onClick={onClick}
      title={label}
      aria-label={label}
      aria-pressed={collapsed}
    >
      <svg width="15" height="11" viewBox="0 0 15 11" fill="none" aria-hidden="true">
        <path
          d="M13.653 0.0079999C14.0224 0.045873 14.3646 0.219396 14.6134 0.494999C14.8622 0.770602 15 1.12869 15 1.5V9.5L14.992 9.653C14.957 9.99629 14.8047 10.317 14.5608 10.5611C14.3169 10.8052 13.9963 10.9577 13.653 10.993L13.5 11H1.5L1.347 10.992C1.00371 10.957 0.68298 10.8047 0.438885 10.5608C0.194791 10.3169 0.0422581 9.99627 0.007 9.653L0 9.5V1.5C4.37148e-05 1.12869 0.1378 0.770602 0.386619 0.494999C0.635437 0.219396 0.977632 0.045873 1.347 0.0079999L1.5 0H13.5L13.653 0.0079999ZM1.5 0.984C1.36315 0.984 1.2319 1.03836 1.13513 1.13513C1.03836 1.2319 0.984 1.36315 0.984 1.5V9.5C0.984 9.785 1.215 10.016 1.5 10.016H13.5C13.6369 10.016 13.7681 9.96164 13.8649 9.86487C13.9616 9.7681 14.016 9.63685 14.016 9.5V1.5C14.016 1.36315 13.9616 1.2319 13.8649 1.13513C13.7681 1.03836 13.6369 0.984 13.5 0.984H1.5ZM11.5 2C11.6326 2 11.7598 2.05268 11.8536 2.14645C11.9473 2.24021 12 2.36739 12 2.5V8.5C12 8.63261 11.9473 8.75979 11.8536 8.85355C11.7598 8.94732 11.6326 9 11.5 9C11.3674 9 11.2402 8.94732 11.1464 8.85355C11.0527 8.75979 11 8.63261 11 8.5V2.5C11 2.36739 11.0527 2.24021 11.1464 2.14645C11.2402 2.05268 11.3674 2 11.5 2Z"
          fill="currentColor"
        />
      </svg>
    </button>
  )
}
