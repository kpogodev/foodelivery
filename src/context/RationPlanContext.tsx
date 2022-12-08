import { createContext, useState } from "react"
import { RationPlanAPIResponse } from "lib/fetchRationPlanData"

type DayType = "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday"

type UseRationStateManager = ReturnType<typeof useRationStateManager>

export const RationPlanContext = createContext<UseRationStateManager>({} as UseRationStateManager)

const setInitialDayOfTheWeek = () => {
  const date = new Date()
  return date.toLocaleString("en-us", { weekday: "long" }).toLowerCase() as DayType
}

function useRationStateManager(initialState: RationPlanAPIResponse) {
  const [dayOfTheWeek, setDayOfTheWeek] = useState(setInitialDayOfTheWeek)
  const [mealsData, setMealsData] = useState(initialState.data.attributes[dayOfTheWeek])

  // Destructure and split data from initialState
  const rationPlanData = {
    plan_name: initialState.data.attributes.plan_name,
    plan_description: initialState.data.attributes.plan_description,
    plan_calories_range: initialState.data.attributes.plan_calories_range,
    plan_length: initialState.data.attributes.plan_length,
  }

  const handleDayChange = (day: DayType) => {
    setMealsData(initialState.data.attributes[day])
    setDayOfTheWeek(day)
  }

  return { rationPlanData, mealsData, dayOfTheWeek, handleDayChange }
}

export default function RationPlanContextProvider({
  children,
  data,
}: {
  children: React.ReactNode
  data: RationPlanAPIResponse
}) {
  return <RationPlanContext.Provider value={useRationStateManager(data)}>{children}</RationPlanContext.Provider>
}
