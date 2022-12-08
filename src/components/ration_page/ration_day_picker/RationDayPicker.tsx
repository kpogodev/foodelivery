import { useContext, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Navigation, A11y } from "swiper"
import { RationPlanContext } from "context/RationPlanContext"
import useMediaQuery from "hooks/useMediaQuery"
import MealButton from "components/reusable/meal_button/MealButton"
import MealSwiperSlide from "components/reusable/meal_swiper_slide/MealSwiperSlide"
import MondayIcon from "assets/ration-monday.svg"
import TuesdayIcon from "assets/ration-tuesday.svg"
import WednesdayIcon from "assets/ration-wednesday.svg"
import ThursdayIcon from "assets/ration-thursday.svg"
import FridayIcon from "assets/ration-friday.svg"
import SaturdayIcon from "assets/ration-saturday.svg"
import SundayIcon from "assets/ration-sunday.svg"
import styles from "./RationDayPicker.module.css"
import "swiper/css"
import "swiper/css/navigation"

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

function RationDayPicker() {
  const ctx = useContext(RationPlanContext)
  const { matches: isMobile } = useMediaQuery("(max-width: 840px)")

  const handleClick = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.value.toLowerCase() as typeof ctx.dayOfTheWeek
    ctx.handleDayChange(value)
  }

  const swiperConfig = {
    modules: [Navigation, A11y],
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: true,
    watchSlidesProgress: true,
    onSlideChange: (swiper: SwiperCore) => {
      const value = swiper.slides[swiper.activeIndex].getAttribute("data-meal") as typeof ctx.dayOfTheWeek
      ctx.handleDayChange(value)
    },
    onInit: (swiper: SwiperCore) => {
      const idx = Array.from(swiper.slides).findIndex(
        (slide: SwiperCore["slides"][0]) => slide.getAttribute("data-meal") === ctx.dayOfTheWeek
      )
      swiper.slideTo(idx)
    },
  }

  const dayIcon = (category: string) => {
    switch (category) {
      case "Monday":
        return <MondayIcon />
      case "Tuesday":
        return <TuesdayIcon />
      case "Wednesday":
        return <WednesdayIcon />
      case "Thursday":
        return <ThursdayIcon />
      case "Friday":
        return <FridayIcon />
      case "Saturday":
        return <SaturdayIcon />
      case "Sunday":
        return <SundayIcon />
      default:
        return <></>
    }
  }

  const mobileComponent = (
    <Swiper className={styles.swiper} {...swiperConfig}>
      {days.map((day) => (
        <SwiperSlide key={day} className='slide-with-visibility' data-meal={day.toLowerCase()}>
          <MealSwiperSlide meal={day} selected={ctx.dayOfTheWeek === day.toLowerCase()}>
            {dayIcon(day)}
          </MealSwiperSlide>
        </SwiperSlide>
      ))}
    </Swiper>
  )

  const desktopComponent = (
    <>
      {days.map((day) => (
        <MealButton
          key={day}
          meal={day.toLowerCase()}
          selected={ctx.dayOfTheWeek === day.toLowerCase()}
          handleClick={handleClick}
        >
          {dayIcon(day)}
        </MealButton>
      ))}
    </>
  )

  return <div className={styles.container}>{isMobile ? mobileComponent : desktopComponent}</div>
}

export default RationDayPicker
