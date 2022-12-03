import { createContext, useState } from "react"
import { MealsAPIResponse } from "lib/fetchMealsData"

type UseRationStateManager = ReturnType<typeof useRationStateManager>
export const RationContextProvider = createContext<UseRationStateManager>({
  meals: [],
})

function useRationStateManager(initialState: MealsAPIResponse) {
  const { data } = initialState // exclude pagination data
  const [meals, setMeals] = useState(data)

  return meals
}

export default function RationContextProvider({ children, data }: { children: React.ReactNode; data: MealsAPIResponse }) {
  return <RationContextProvider.Provider value={useRationStateManager(data)}>{children}</RationContextProvider.Provider>
}


