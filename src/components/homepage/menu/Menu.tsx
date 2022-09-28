import Category from './category/Category'
import Filter from './filter/Filter'
import MealsList from './meals_list/MealsList'
import styles from './Menu.module.css'
import MenuContextProvider from './MenuContext'

function Menu() {
  const setInitialCategoryFilter = () => {
    const today = new Date()
    const hour = today.getHours()
    if (hour >= 11 && hour < 14) {
      return 'Lunch'
    }
    if (hour >= 14 && hour < 22) {
      return 'Dinner'
    }

    return 'Breakfast'
  }

  return (
    <div className={styles.container}>
      <MenuContextProvider
        initialFilters={{
          genderFilter: 'All',
          sizeFilter: 'All',
          preferenceFilter: 'All',
          categoryFilter: setInitialCategoryFilter(),
        }}
      >
        <Filter />
        <Category />
        <MealsList />
      </MenuContextProvider>
    </div>
  )
}

export default Menu
