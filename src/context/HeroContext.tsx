import { createContext } from 'react'
import { MealsType } from 'pages/api/meals'

type UseHeroStateManagerResult = ReturnType<typeof useHeroStateManager>
export const HeroContext = createContext<UseHeroStateManagerResult>({
  meals: [],
})

function useHeroStateManager(initialState: MealsType) {
  const { data } = initialState // exclude pagination
  const meals = data.slice(0, 6)
  return { meals }
}

export default function HeroContextProvider({ children, data }: { children: React.ReactNode; data: MealsType }) {
  return <HeroContext.Provider value={useHeroStateManager(data)}>{children}</HeroContext.Provider>
}
