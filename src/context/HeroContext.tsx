import { createContext } from "react"
import { WeekSpecialAPIResponse } from "lib/fetchWeekSpecial"

type UseHeroStateManagerResult = ReturnType<typeof useHeroStateManager>
export const HeroContext = createContext<UseHeroStateManagerResult>({
  meals: [],
})

function useHeroStateManager(initialState: WeekSpecialAPIResponse) {
  const meals = initialState.data.attributes.meals.data.map((meal) => meal)
  return { meals }
}

export default function HeroContextProvider({
  children,
  data,
}: {
  children: React.ReactNode
  data: WeekSpecialAPIResponse
}) {
  return <HeroContext.Provider value={useHeroStateManager(data)}>{children}</HeroContext.Provider>
}
