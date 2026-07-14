/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext } from 'react'

const SidebarContext = createContext(null)

export function SidebarProvider({ children }) {
  // The design (node 108:115 "menu-shrinked") opens on the 55px rail, so the
  // rest of the page lands on its intended positions.
  const [sidebarState, setSidebarState] = useState('collapsed')

  const toggleSidebar = () => {
    setSidebarState((state) => (state === 'main' ? 'collapsed' : 'main'))
  }

  return (
    <SidebarContext.Provider value={{ sidebarState, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  )
}

export function useSidebar() {
  const context = useContext(SidebarContext)
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider')
  }
  return context
}
