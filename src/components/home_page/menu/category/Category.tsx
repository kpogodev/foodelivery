import { useContext, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, A11y } from "swiper"
import { MenuContext } from "context/MenuContext"
import useMediaQuery from "hooks/useMediaQuery"
import MealButton from "components/reusable/meal_button/MealButton"
import MealSwiperSlide from "components/reusable/meal_swiper_slide/MealSwiperSlide"
import BreakfastIcon from "assets/menu-breakfast.svg"
import LunchIcon from "assets/menu-lunch.svg"
import DinnerIcon from "assets/menu-dinner.svg"
import SnackIcon from "assets/menu-snack.svg"
import DrinksIcon from "assets/menu-drinks.svg"
import styles from "./Category.module.css"
import "swiper/css"
import "swiper/css/navigation"

type Category = "Breakfast" | "Lunch" | "Dinner" | "Snack" | "Drinks"

function Category({ categories }: { categories: Category[] }) {
  const { matches: isMobile } = useMediaQuery("(max-width: 768px)")
  const ctx = useContext(MenuContext)
  const [selectedCategory, setSelectedCategory] = useState(ctx.categoryFilter)

  const handleClick = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.value
    ctx.handleCategoryChange(value)
    setSelectedCategory(value)
  }

  const swiperConfig = {
    modules: [Navigation, A11y],
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: true,
    watchSlidesProgress: true,
    onSlideChange: (swiper: any) => {
      const value = swiper.slides[swiper.activeIndex].dataset.meal
      ctx.handleCategoryChange(value)
      setSelectedCategory(value)
    },
    onInit: (swiper: any) => {
      const idx = [...swiper.slides].findIndex((slide: any) => slide.dataset.meal === ctx.categoryFilter)
      swiper.slideTo(idx)
    },
  }

  const categoryIcon = (category: string) => {
    switch (category) {
      case "Breakfast":
        return <BreakfastIcon />
      case "Lunch":
        return <LunchIcon />
      case "Dinner":
        return <DinnerIcon />
      case "Snack":
        return <SnackIcon />
      case "Drinks":
        return <DrinksIcon />
      default:
        return <></>
    }
  }

  const mobileComponent = (
    <Swiper className={styles.swiper} {...swiperConfig}>
      {categories.map((category) => (
        <SwiperSlide key={category} className='slide-with-visibility' data-meal={category}>
          <MealSwiperSlide meal={category} selected={selectedCategory === category}>
            {categoryIcon(category)}
          </MealSwiperSlide>
        </SwiperSlide>
      ))}
    </Swiper>
  )

  const desktopComponent = (
    <>
      {categories.map((category) => (
        <MealButton key={category} meal={category} selected={selectedCategory === category} handleClick={handleClick}>
          {categoryIcon(category)}
        </MealButton>
      ))}
    </>
  )

  return <div className={styles.container}>{isMobile ? mobileComponent : desktopComponent}</div>
}

export default Category
