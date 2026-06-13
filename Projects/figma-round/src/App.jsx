import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AppLayout from './components/layout/AppLayout'
import MyBacktestsPage from './pages/MyBacktestsPage'
import WorkbenchPage from './pages/WorkbenchPage'
import { SidebarProvider } from './context/SidebarContext'

function App() {
  return (
    <SidebarProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/workbench" replace />} />
          <Route element={<AppLayout />}>
            <Route path="/workbench" element={<WorkbenchPage />} />
            <Route path="/backtests" element={<MyBacktestsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </SidebarProvider>
  )
}

export default App
