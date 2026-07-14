import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AppLayout from './components/layout/AppLayout'
import MyBacktestsPage from './pages/MyBacktestsPage'
import WorkbenchPage from './pages/WorkbenchPage'
import HomePage from './pages/HomePage'
import WatchlistPage from './pages/WatchlistPage'
import { SidebarProvider } from './context/SidebarContext'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/workbench" replace />} />
            <Route element={<AppLayout />}>
              <Route path="/workbench" element={<WorkbenchPage />} />
              <Route path="/backtests" element={<MyBacktestsPage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/chats" element={<HomePage />} />
              <Route path="/projects" element={<HomePage />} />
              <Route path="/watchlist" element={<WatchlistPage />} />
              <Route path="/workflows" element={<HomePage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </SidebarProvider>
    </ThemeProvider>
  )
}

export default App
