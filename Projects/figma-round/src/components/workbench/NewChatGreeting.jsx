export default function NewChatGreeting() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start', // Left aligned relative to the prompt box container
        paddingLeft: '5px', // Indented 5px to match 496px left vs 491px prompt box left
        width: '344px',
        height: '64px',
        boxSizing: 'border-box',
      }}
    >
      {/* Hi, Chirag */}
      <h2
        style={{
          fontFamily: 'Inter, system-ui, sans-serif',
          fontWeight: '400',
          fontSize: '20px',
          lineHeight: '24px',
          color: '#747474',
          margin: 0,
          padding: 0,
          height: '24px',
        }}
      >
        Hi, Chirag
      </h2>

      {/* Vertical spacing: 375px top - 335px top - 24px height = 16px gap */}
      <div style={{ height: '16px' }} />

      {/* What’s on your mind today? */}
      <h1
        style={{
          fontFamily: '"Times New Roman", Times, Georgia, serif',
          fontWeight: '400',
          fontSize: '30px',
          lineHeight: '24px',
          color: '#FFFFFF',
          margin: 0,
          padding: 0,
          height: '24px',
          whiteSpace: 'nowrap',
        }}
      >
        What’s on your mind today?
      </h1>
    </div>
  )
}
