import React, { createContext, useState, useEffect } from 'react'
import useMediaQuery from 'hooks/useMediaQuery'

type UseBurgerStateManager = ReturnType<typeof useBurgerStateManager>

export const BurgerContext = createContext({} as UseBurgerStateManager)

function useBurgerStateManager() {
  const [isOpen, setIsOpen] = useState(false)
  const { matches: isTablet } = useMediaQuery('(min-width: 769px)')

  const handleToggle = (e: React.SyntheticEvent<HTMLElement | HTMLButtonElement>) => {
    document.body.style.overflow = isOpen ? 'auto' : 'hidden'
    setIsOpen((prev) => !prev)
  }

  const close = (e: React.SyntheticEvent<HTMLElement | HTMLButtonElement>) => {
    e.stopPropagation()
    if (e.target !== e.currentTarget) return
    document.body.style.overflow = 'auto'
    setIsOpen(false)
  }

  // Handle Key Event
  useEffect(() => {
    if (isOpen) {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setIsOpen(false)
        }
      }
      window.addEventListener('keydown', handleKeyDown)
      return () => window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  // Handle Viewport Change
  useEffect(() => {
    if (isTablet) {
      setIsOpen(false)
    }
  }, [isTablet])

  return {
    isOpen,
    handleToggle,
    close,
  }
}

export function BurgerContextProvider({ children }: { children: React.ReactNode }) {
  return <BurgerContext.Provider value={useBurgerStateManager()}>{children}</BurgerContext.Provider>
}
