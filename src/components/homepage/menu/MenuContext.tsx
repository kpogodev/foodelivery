import { useState, createContext, useCallback } from 'react'

type UseMenuStateManagerResult = ReturnType<typeof useMenuStateManager>

interface InitialFilters {
  genderFilter: string
  sizeFilter: string
  preferenceFilter: string
  categoryFilter: string
}

export const MenuContext = createContext<UseMenuStateManagerResult>({
  genderFilter: '',
  handleGenderChange: () => {},
  sizeFilter: '',
  handleSizeChange: () => {},
  preferenceFilter: '',
  handlePreferenceChange: () => {},
  categoryFilter: '',
  handleCategoryChange: () => {},
})

function useMenuStateManager(initialState: InitialFilters) {
  const [genderFilter, setGenderFilter] = useState(initialState.genderFilter)
  const [sizeFilter, setSizeFilter] = useState(initialState.sizeFilter)
  const [preferenceFilter, setPreferenceFilter] = useState(initialState.preferenceFilter)
  const [categoryFilter, setCategoryFilter] = useState(initialState.categoryFilter)

  const handleGenderChange = useCallback((value: string) => setGenderFilter(value), [])
  const handleSizeChange = useCallback((value: string) => setSizeFilter(value), [])
  const handlePreferenceChange = useCallback((value: string) => setPreferenceFilter(value), [])
  const handleCategoryChange = useCallback((value: string) => setCategoryFilter(value), [])

  return {
    genderFilter,
    handleGenderChange,
    sizeFilter,
    handleSizeChange,
    preferenceFilter,
    handlePreferenceChange,
    categoryFilter,
    handleCategoryChange,
  }
}

export default function MenuContextProvider({ initialFilters, children }: { initialFilters: InitialFilters; children: React.ReactNode[] }) {
  return <MenuContext.Provider value={useMenuStateManager(initialFilters)}>{children}</MenuContext.Provider>
}
