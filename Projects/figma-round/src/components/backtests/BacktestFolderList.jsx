import { useState, forwardRef } from 'react'
import FolderCard from './FolderCard'

const BacktestFolderList = forwardRef(({ selectedFolder, onSelectFolder }, ref) => {
  const [folders] = useState(() => {
    const defaultFolders = [
      { name: 'Backtest One', date: '9 Mar', itemCount: 3 },
      { name: 'Backtest Two', date: '7 Mar', itemCount: 1 },
      { name: 'Backtest Three', date: '6 Mar', itemCount: 1 },
      { name: 'Backtest Four', date: '5 Mar', itemCount: 2 },
      { name: 'Backtest Five', date: '4 Mar', itemCount: 1 },
      { name: 'Backtest Six', date: '3 Mar', itemCount: 1 },
      { name: 'Backtest Seven', date: '1 Mar', itemCount: 1 },
    ]

    // Read user-saved strategy simulations from localStorage
    const saved = localStorage.getItem('flash_backtests')
    let customList = []
    if (saved) {
      try {
        customList = JSON.parse(saved)
      } catch {
        customList = []
      }
    }

    // Combine custom runs with default hardcoded cards, avoiding duplicates
    const customNames = customList.map((item) => item.name)
    const filteredDefaults = defaultFolders
      .filter((folder) => !customNames.includes(folder.name))
      .map((folder) => ({
        id: folder.name,
        name: folder.name,
        isCustom: false,
        annualReturn: `${(10 + Math.random() * 15).toFixed(1)}%`,
        sharpe: (0.8 + Math.random() * 0.8).toFixed(2),
        maxDrawdown: `-${(8 + Math.random() * 18).toFixed(1)}%`,
        winRate: `${(48 + Math.random() * 22).toFixed(0)}%`,
        date: folder.date,
        itemCount: folder.itemCount,
      }))

    return [...customList.map((item) => ({ ...item, isCustom: true })), ...filteredDefaults]
  })

  return (
    <div
      ref={ref}
      className="no-scrollbar"
      style={{
        display: 'flex',
        flexDirection: 'row',
        overflowX: 'auto',
        gap: '16px',
        padding: '8px 4px',
        scrollBehavior: 'smooth',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      {folders.map((folder, index) => (
        <FolderCard
          key={`${folder.name}-${index}`}
          name={folder.name}
          itemCount={folder.itemCount}
          date={folder.date}
          isActive={selectedFolder && (selectedFolder.id === folder.id || selectedFolder.name === folder.name)}
          onClick={() => onSelectFolder?.(folder)}
        />
      ))}
    </div>
  )
})

BacktestFolderList.displayName = 'BacktestFolderList'

export default BacktestFolderList
