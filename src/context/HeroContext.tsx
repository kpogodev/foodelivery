import { createContext } from "react"
import { MealsAPIResponse } from "lib/fetchMealsData"

type UseHeroStateManagerResult = ReturnType<typeof useHeroStateManager>
export const HeroContext = createContext<UseHeroStateManagerResult>({
  meals: [],
})

function useHeroStateManager(initialState: MealsAPIResponse) {
  const { data } = initialState // exclude pagination
  const meals = data.filter((meal) => meal.attributes.week_special === true)
  return { meals }
}

export default function HeroContextProvider({ children, data }: { children: React.ReactNode; data: MealsAPIResponse }) {
  return <HeroContext.Provider value={useHeroStateManager(data)}>{children}</HeroContext.Provider>
}
