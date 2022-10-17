import { useContext, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, A11y } from 'swiper'
import { MenuContext } from 'context/MenuContext'
import useMediaQuery from 'hooks/useMediaQuery'
import MealButton from 'components/reusable/meal_button/MealButton'
import MealSwiperSlide from 'components/reusable/meal_swiper_slide/MealSwiperSlide'
import BreakfastIcon from 'assets/menu-breakfast.svg'
import LunchIcon from 'assets/menu-lunch.svg'
import DinnerIcon from 'assets/menu-dinner.svg'
import SnackIcon from 'assets/menu-snack.svg'
import DrinksIcon from 'assets/menu-drinks.svg'
import styles from './Category.module.css'
import 'swiper/css'
import 'swiper/css/navigation'

function Category() {
  const { matches: isMobile } = useMediaQuery('(max-width: 768px)')
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
  }

  const mobileComponent = (
    <Swiper className={styles.swiper} {...swiperConfig}>
      <SwiperSlide className='slide-with-visibility' data-meal='Breakfast'>
        <MealSwiperSlide meal='Breakfast' selected={selectedCategory === 'Breakfast'}>
          <BreakfastIcon />
        </MealSwiperSlide>
      </SwiperSlide>
      <SwiperSlide className='slide-with-visibility' data-meal='Lunch'>
        <MealSwiperSlide meal='Lunch' selected={selectedCategory === 'Lunch'}>
          <LunchIcon />
        </MealSwiperSlide>
      </SwiperSlide>
      <SwiperSlide className='slide-with-visibility' data-meal='Dinner'>
        <MealSwiperSlide meal='Dinner' selected={selectedCategory === 'Dinner'}>
          <DinnerIcon />
        </MealSwiperSlide>
      </SwiperSlide>
      <SwiperSlide className='slide-with-visibility' data-meal='Snack'>
        <MealSwiperSlide meal='Snack' selected={selectedCategory === 'Snack'}>
          <SnackIcon />
        </MealSwiperSlide>
      </SwiperSlide>
      <SwiperSlide className='slide-with-visibility' data-meal='Drinks'>
        <MealSwiperSlide meal='Drinks' selected={selectedCategory === 'Drinks'}>
          <DrinksIcon />
        </MealSwiperSlide>
      </SwiperSlide>
    </Swiper>
  )

  const desktopComponent = (
    <>
      <MealButton meal='Breakfast' selected={selectedCategory === 'Breakfast'} handleClick={handleClick}>
        <BreakfastIcon />
      </MealButton>
      <MealButton meal='Lunch' selected={selectedCategory === 'Lunch'} handleClick={handleClick}>
        <LunchIcon />
      </MealButton>
      <MealButton meal='Dinner' selected={selectedCategory === 'Dinner'} handleClick={handleClick}>
        <DinnerIcon />
      </MealButton>
      <MealButton meal='Snack' selected={selectedCategory === 'Snack'} handleClick={handleClick}>
        <SnackIcon />
      </MealButton>
      <MealButton meal='Drinks' selected={selectedCategory === 'Drinks'} handleClick={handleClick}>
        <DrinksIcon />
      </MealButton>
    </>
  )

  return <div className={styles.container}>{isMobile ? mobileComponent : desktopComponent}</div>
}

export default Category
