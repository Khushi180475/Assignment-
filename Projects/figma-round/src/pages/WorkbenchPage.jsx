import { useState, useEffect } from 'react'
import WorkbenchBreadcrumb from '../components/workbench/WorkbenchBreadcrumb'
import NewChatGreeting from '../components/workbench/NewChatGreeting'
import PromptBox from '../components/workbench/PromptBox'
import NotificationIcon from '../components/shared/NotificationIcon'
import BalanceCredits from '../components/shared/BalanceCredits'

export default function WorkbenchPage() {
  const [activeStrategy, setActiveStrategy] = useState(null)
  const [simulationStep, setSimulationStep] = useState(0)
  const [simStatusText, setSimStatusText] = useState('')
  const [isSimulating, setIsSimulating] = useState(false)

  // Simulation steps messages
  const simSteps = [
    'Initializing backtest engine...',
    'Fetching historical bar feeds (10-year lookback)...',
    'Applying momentum/volume filters...',
    'Calculating slippage & transaction costs (0.05% per side)...',
    'Synthesizing equity curve and stats...',
  ]

  // ESC key press handler to exit strategy dashboard (Figma Group 26 hint)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveStrategy(null)
        setIsSimulating(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const handlePromptSubmit = (prompt) => {
    setIsSimulating(true)
    setSimulationStep(0)
    setSimStatusText(simSteps[0])

    // Cycle through simulation messages to create a high-fidelity feel
    let step = 0
    const interval = setInterval(() => {
      step++
      if (step < simSteps.length) {
        setSimulationStep(step)
        setSimStatusText(simSteps[step])
      } else {
        clearInterval(interval)
        setIsSimulating(false)

        // Generate strategy metrics based on prompt input
        const isDualMomentum = prompt.toLowerCase().includes('momentum')
        const isShort = prompt.toLowerCase().includes('short')

        let annualReturn
        let sharpe
        let maxDrawdown
        let winRate
        let name = prompt

        if (isDualMomentum) {
          annualReturn = '24.2%'
          sharpe = '1.85'
          maxDrawdown = '-11.2%'
          winRate = '69%'
          name = 'Dual Momentum Strategy'
        } else if (isShort) {
          annualReturn = '11.5%'
          sharpe = '0.74'
          maxDrawdown = '-28.4%'
          winRate = '48%'
          name = 'Short Volume Strategy'
        } else {
          // Semi-random generation for custom prompts
          const ret = (12 + Math.random() * 15).toFixed(1)
          const shp = (0.9 + Math.random() * 0.9).toFixed(2)
          const dd = -(10 + Math.random() * 20).toFixed(1)
          const wr = (50 + Math.random() * 20).toFixed(0)
          annualReturn = `${ret}%`
          sharpe = shp
          maxDrawdown = `${dd}%`
          winRate = `${wr}%`
        }

        setActiveStrategy({
          name,
          prompt,
          annualReturn,
          sharpe,
          maxDrawdown,
          winRate,
          timestamp: new Date().toLocaleDateString(),
        })
      }
    }, 600)
  }

  const handleSaveStrategy = () => {
    if (!activeStrategy) return

    // Get current backtests from localStorage
    const saved = localStorage.getItem('flash_backtests')
    let backtestsList = []
    if (saved) {
      try {
        backtestsList = JSON.parse(saved)
      } catch {
        backtestsList = []
      }
    }

    // Append new backtest
    const newBacktest = {
      id: Date.now(),
      name: activeStrategy.name,
      prompt: activeStrategy.prompt,
      annualReturn: activeStrategy.annualReturn,
      sharpe: activeStrategy.sharpe,
      maxDrawdown: activeStrategy.maxDrawdown,
      winRate: activeStrategy.winRate,
      date: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
      itemCount: Math.floor(Math.random() * 4) + 2, // simulated file items inside folder
    }

    backtestsList.unshift(newBacktest)
    localStorage.setItem('flash_backtests', JSON.stringify(backtestsList))
    alert(`"${activeStrategy.name}" successfully saved to My Backtests!`)
  }

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
          justifyContent: activeStrategy ? 'flex-start' : 'center',
          gap: activeStrategy ? '24px' : '40px',
          padding: '40px 24px',
          overflowY: 'auto',
        }}
      >
        {isSimulating ? (
          /* High-Fidelity Simulation Loader */
          <div
            className="bkg-glass"
            style={{
              width: '100%',
              maxWidth: '540px',
              padding: '40px 30px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '24px',
              marginTop: '40px',
              boxShadow: '0 0 40px rgba(202, 222, 106, 0.15)',
              borderColor: 'rgba(202, 222, 106, 0.2)',
            }}
          >
            {/* Spinning glowing loader */}
            <div
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                border: '3px solid rgba(255,255,255,0.05)',
                borderTopColor: '#CADE6A',
                animation: 'spin 1s linear infinite',
                filter: 'drop-shadow(0 0 10px #CADE6A)',
              }}
            />
            <div>
              <h3 style={{ color: '#ffffff', fontSize: '18px', fontWeight: '500' }}>
                Simulating Strategy
              </h3>
              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '13px',
                  marginTop: '8px',
                  height: '20px',
                }}
              >
                {simStatusText}
              </p>
            </div>
            {/* Progress indicators */}
            <div style={{ display: 'flex', gap: '6px' }}>
              {simSteps.map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: i <= simulationStep ? '#CADE6A' : 'rgba(255,255,255,0.1)',
                    transition: 'all 0.3s ease',
                  }}
                />
              ))}
            </div>
          </div>
        ) : activeStrategy ? (
          /* Dashboard Frame Variant Screen */
          <div
            style={{
              width: '100%',
              maxWidth: '960px',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              animation: 'fadeIn 0.3s ease',
            }}
          >
            {/* Strategy Title Area */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '16px',
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: '11px',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    fontWeight: '600',
                    letterSpacing: '0.05em',
                  }}
                >
                  Active Strategy Backtest
                </span>
                <h2 style={{ color: '#ffffff', fontSize: '22px', margin: '4px 0 0 0' }}>
                  {activeStrategy.name}
                </h2>
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <button
                  onClick={handleSaveStrategy}
                  style={{
                    padding: '8px 16px',
                    backgroundColor: '#ffffff',
                    color: '#000000',
                    fontSize: '13px',
                    fontWeight: '500',
                    borderRadius: 'var(--radius-sm)',
                    transition: 'opacity 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = 0.85)}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = 1)}
                >
                  Save Backtest
                </button>
                <button
                  onClick={() => setActiveStrategy(null)}
                  style={{
                    padding: '8px 16px',
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid var(--border-color)',
                    color: '#ffffff',
                    fontSize: '13px',
                    borderRadius: 'var(--radius-sm)',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--bg-hover)')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)')}
                >
                  Close
                </button>
              </div>
            </div>

            {/* Strategy Prompt Quote Block */}
            <div
              className="bkg-glass"
              style={{
                padding: '12px 18px',
                borderLeft: '3px solid #CADE6A',
                fontSize: '14px',
                color: 'var(--text-secondary)',
                backgroundColor: 'rgba(255, 255, 255, 0.01)',
              }}
            >
              <span style={{ color: 'var(--text-muted)', marginRight: '6px' }}>Prompt:</span>
              "{activeStrategy.prompt}"
            </div>

            {/* Grid Layout: Left Chart, Right Metrics */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '2fr 1fr',
                gap: '24px',
              }}
            >
              {/* Chart Card */}
              <div
                className="bkg-glass"
                style={{
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  minHeight: '340px',
                  backgroundColor: 'rgba(26, 26, 26, 0.4)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '14px', fontWeight: '500', color: '#ffffff' }}>
                    Cumulative Performance
                  </span>
                  <div style={{ display: 'flex', gap: '12px', fontSize: '11px' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#CADE6A' }}>
                      <span
                        style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#CADE6A' }}
                      />
                      Strategy
                    </span>
                    <span
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      <span
                        style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          background: 'var(--text-secondary)',
                        }}
                      />
                      S&P 500 (SPY)
                    </span>
                  </div>
                </div>

                {/* SVG Line Chart */}
                <div style={{ flex: 1, position: 'relative', minHeight: '220px' }}>
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 500 200"
                    preserveAspectRatio="none"
                    style={{ overflow: 'visible' }}
                  >
                    {/* Gridlines */}
                    <line x1="0" y1="50" x2="500" y2="50" stroke="rgba(255,255,255,0.03)" />
                    <line x1="0" y1="100" x2="500" y2="100" stroke="rgba(255,255,255,0.03)" />
                    <line x1="0" y1="150" x2="500" y2="150" stroke="rgba(255,255,255,0.03)" />
                    <line x1="0" y1="200" x2="500" y2="200" stroke="rgba(255,255,255,0.05)" />

                    {/* Benchmark line (SPY) */}
                    <path
                      d="M0 160 Q 125 150, 250 130 T 500 120"
                      fill="none"
                      stroke="rgba(255,255,255,0.25)"
                      strokeWidth="2"
                      strokeDasharray="4"
                    />

                    {/* Strategy line (Glowing green) */}
                    <path
                      d="M0 160 Q 125 120, 250 90 T 500 40"
                      fill="none"
                      stroke="#CADE6A"
                      strokeWidth="3.5"
                      style={{ filter: 'drop-shadow(0 0 6px rgba(202, 222, 106, 0.4))' }}
                    />

                    {/* Interactive dot at end */}
                    <circle cx="500" cy="40" r="5" fill="#CADE6A" />
                    <circle
                      cx="500"
                      cy="40"
                      r="10"
                      fill="none"
                      stroke="#CADE6A"
                      strokeWidth="1.5"
                      style={{ opacity: 0.5 }}
                    />
                  </svg>
                </div>
              </div>

              {/* Metrics Column */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {/* Metric 1 */}
                <div
                  className="bkg-glass"
                  style={{
                    padding: '16px 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                    backgroundColor: 'rgba(26,26,26,0.3)',
                  }}
                >
                  <span style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>
                    Annualized Return
                  </span>
                  <span
                    style={{
                      fontSize: '24px',
                      fontWeight: '600',
                      color: '#CADE6A',
                      textShadow: '0 0 10px rgba(202, 222, 106, 0.2)',
                    }}
                  >
                    {activeStrategy.annualReturn}
                  </span>
                </div>

                {/* Metric 2 */}
                <div
                  className="bkg-glass"
                  style={{
                    padding: '16px 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                    backgroundColor: 'rgba(26,26,26,0.3)',
                  }}
                >
                  <span style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>Sharpe Ratio</span>
                  <span style={{ fontSize: '24px', fontWeight: '600', color: '#ffffff' }}>
                    {activeStrategy.sharpe}
                  </span>
                </div>

                {/* Metric 3 */}
                <div
                  className="bkg-glass"
                  style={{
                    padding: '16px 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                    backgroundColor: 'rgba(26,26,26,0.3)',
                  }}
                >
                  <span style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>Max Drawdown</span>
                  <span style={{ fontSize: '24px', fontWeight: '600', color: '#ff4d4f' }}>
                    {activeStrategy.maxDrawdown}
                  </span>
                </div>

                {/* Metric 4 */}
                <div
                  className="bkg-glass"
                  style={{
                    padding: '16px 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                    backgroundColor: 'rgba(26,26,26,0.3)',
                  }}
                >
                  <span style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>Win Rate</span>
                  <span style={{ fontSize: '24px', fontWeight: '600', color: '#ffffff' }}>
                    {activeStrategy.winRate}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Refinement Prompt at bottom of completed state */}
            <div style={{ marginTop: '12px' }}>
              <div
                style={{
                  fontSize: '12px',
                  color: 'var(--text-muted)',
                  marginBottom: '8px',
                  textAlign: 'center',
                }}
              >
                Refining strategy: type changes below to run another backtest. Press ESC to clear.
              </div>
              <PromptBox onSubmit={handlePromptSubmit} />
            </div>
          </div>
        ) : (
          /* Row 2: Default Greeting and PromptBox centered container */
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
            <PromptBox onSubmit={handlePromptSubmit} />
          </div>
        )}
      </div>
    </div>
  )
}
