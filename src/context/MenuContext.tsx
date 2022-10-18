import { createContext, useReducer } from 'react'
import { MealsAPIResponse } from 'lib/loadMeals'

interface InitialState {
  meals: MealsAPIResponse
  genderFilter?: string
  sizeFilter?: string
  preferenceFilter?: string
}

interface MenuContextProviderProps {
  initialState: InitialState
  children: React.ReactNode[] | React.ReactNode
}

type PayloadType = {
  value: string
  meals: MealsAPIResponse
}

type ActionTypes =
  | { type: 'SET_GENDER_FILTER'; payload: PayloadType }
  | { type: 'SET_SIZE_FILTER'; payload: PayloadType }
  | { type: 'SET_PREFERENCE_FILTER'; payload: PayloadType }
  | { type: 'SET_CATEGORY_FILTER'; payload: PayloadType }

type UseMenuStateManagerResult = ReturnType<typeof useMenuStateManager>

type CreateInitailStateResult = ReturnType<typeof createInitialState>

// Helper function to set initial category
const setInitialCategory = () => {
  const today = new Date()
  const hour = today.getHours()
  if (hour >= 11 && hour < 13) return 'Lunch'
  if (hour >= 13 && hour < 22) return 'Dinner'
  return 'Breakfast'
}

// Helper function to set initial meals
const setInitialMeals = (data: MealsAPIResponse) => {
  const category = setInitialCategory()
  const { data: meals } = data
  return meals.filter((meal) => meal.attributes.category === category.toLowerCase())
}

// Helper function to create initial state
const createInitialState = (data: InitialState) => {
  return {
    meals: setInitialMeals(data.meals),
    genderFilter: data.genderFilter ?? 'All',
    sizeFilter: data.sizeFilter ?? 'All',
    preferenceFilter: data.preferenceFilter ?? 'All',
    categoryFilter: setInitialCategory(),
  }
}

// Apply filters to meals
const runFilters = (
  meals: MealsAPIResponse,
  genderFilter: string,
  sizeFilter: string,
  preferenceFilter: string,
  category: string
) => {
  let filteredMeals = meals.data.filter((meal) => meal.attributes.category === category.toLowerCase())

  if (genderFilter === 'All' && sizeFilter === 'All' && preferenceFilter === 'All') return filteredMeals

  if (sizeFilter !== 'All') {
    switch (sizeFilter) {
      case 'Small':
        filteredMeals = filteredMeals.filter((meal) => meal.attributes.size === 'small')
        break
      case 'Medium':
        filteredMeals = filteredMeals.filter((meal) => meal.attributes.size === 'medium')
        break
      case 'Large':
        filteredMeals = filteredMeals.filter((meal) => meal.attributes.size === 'large')
        break
    }
  }

  if (genderFilter !== 'All') {
    const range = {
      min: Math.min(...filteredMeals.map((meal) => meal.attributes.calories)),
      max: Math.max(...filteredMeals.map((meal) => meal.attributes.calories)),
    }

    switch (genderFilter) {
      case 'Female':
        filteredMeals = filteredMeals.filter((meal) => meal.attributes.calories < Math.floor(range.max * 0.8))
        break
      case 'Male':
        filteredMeals = filteredMeals.filter((meal) => meal.attributes.calories > Math.floor(range.min * 1.3))
        break
    }
  }

  if (preferenceFilter !== 'All') {
    switch (preferenceFilter) {
      case 'Vegetarian':
        filteredMeals = filteredMeals.filter((meal) => meal.attributes.vegetarian_friendly)
        break
      case 'Vegan':
        filteredMeals = filteredMeals.filter((meal) => meal.attributes.vegan_friendly)
        break
      case 'Gluten Free':
        filteredMeals = filteredMeals.filter((meal) => meal.attributes.gluten_free)
        break
    }
  }

  return filteredMeals
}

function menuReducer(state: CreateInitailStateResult, action: ActionTypes) {
  switch (action.type) {
    case 'SET_GENDER_FILTER':
      return {
        ...state,
        genderFilter: action.payload.value,
        meals: runFilters(
          action.payload.meals,
          action.payload.value,
          state.sizeFilter,
          state.preferenceFilter,
          state.categoryFilter
        ),
      }
    case 'SET_SIZE_FILTER':
      return {
        ...state,
        sizeFilter: action.payload.value,
        meals: runFilters(
          action.payload.meals,
          state.genderFilter,
          action.payload.value,
          state.preferenceFilter,
          state.categoryFilter
        ),
      }
    case 'SET_PREFERENCE_FILTER':
      return {
        ...state,
        preferenceFilter: action.payload.value,
        meals: runFilters(
          action.payload.meals,
          state.genderFilter,
          state.sizeFilter,
          action.payload.value,
          state.categoryFilter
        ),
      }
    case 'SET_CATEGORY_FILTER':
      return {
        ...state,
        categoryFilter: action.payload.value,
        meals: runFilters(
          action.payload.meals,
          state.genderFilter,
          state.sizeFilter,
          state.preferenceFilter,
          action.payload.value
        ),
      }
    default:
      throw new Error('Invalid action type')
  }
}

function useMenuStateManager(initialState: InitialState) {
  const [state, dispatch] = useReducer(menuReducer, createInitialState(initialState))

  const handleGenderChange = (value: string) => {
    dispatch({ type: 'SET_GENDER_FILTER', payload: { value, meals: initialState.meals } })
  }
  const handleSizeChange = (value: string) => {
    dispatch({ type: 'SET_SIZE_FILTER', payload: { value, meals: initialState.meals } })
  }
  const handlePreferenceChange = (value: string) => {
    dispatch({ type: 'SET_PREFERENCE_FILTER', payload: { value, meals: initialState.meals } })
  }
  const handleCategoryChange = (value: string) => {
    dispatch({ type: 'SET_CATEGORY_FILTER', payload: { value: value, meals: initialState.meals } })
  }

  return {
    meals: state.meals,
    genderFilter: state.genderFilter,
    sizeFilter: state.sizeFilter,
    preferenceFilter: state.preferenceFilter,
    categoryFilter: state.categoryFilter,
    handleGenderChange,
    handleSizeChange,
    handlePreferenceChange,
    handleCategoryChange,
  }
}

export const MenuContext = createContext<UseMenuStateManagerResult>({
  meals: [],
  genderFilter: '',
  handleGenderChange: () => {},
  sizeFilter: '',
  handleSizeChange: () => {},
  preferenceFilter: '',
  handlePreferenceChange: () => {},
  categoryFilter: '',
  handleCategoryChange: () => {},
})

export default function MenuContextProvider({ initialState, children }: MenuContextProviderProps) {
  return <MenuContext.Provider value={useMenuStateManager(initialState)}>{children}</MenuContext.Provider>
}
