import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CrossIcon from 'assets/cross.svg'
import styles from './Media.module.css'
import Portal from 'components/reusable/portal/Portal'

const elementsEntranceVariants = {
  offscreen: {
    opacity: 0,
    y: 100,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.3,
    },
  },
}

const videoEntranceVariants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      duration: 1.5,
    },
  },
}

function Media() {
  const [showControls, setShowControls] = useState(false)
  const [showVideoBox, setShowVideoBox] = useState(false)

  const videoRef = useRef<HTMLVideoElement | null>(null)

  const toggleVideoBox = (e: React.SyntheticEvent<HTMLButtonElement | HTMLElement>) => {
    if (e.target === videoRef.current) return
    setShowVideoBox(!showVideoBox)
    setShowControls(!showControls)
  }

  //Auto Play
  useEffect(() => {
    if (showVideoBox) {
      setTimeout(() => videoRef.current?.play(), 500)
    } else {
      videoRef.current?.pause()
    }
  }, [showVideoBox])

  // Handle Key Event
  useEffect(() => {
    if (showVideoBox) {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setShowVideoBox(false)
          setShowControls(false)
        }
      }
      window.addEventListener('keydown', handleKeyDown)
      return () => window.removeEventListener('keydown', handleKeyDown)
    }
  }, [showVideoBox])

  return (
    <motion.div
      className={styles.container}
      initial='offscreen'
      whileInView='onscreen'
      transition={{ staggerChildren: 0.05 }}
      viewport={{ amount: 0.3, once: true }}
    >
      <motion.div className={styles.inner}>
        <div className={styles.content}>
          <motion.h2 className={styles.header} variants={elementsEntranceVariants}>
            You can watch cooking process translation
          </motion.h2>
          <motion.p className={styles.text} variants={elementsEntranceVariants}>
            Our kitchen employs highly qualiied cooks. We adhere to all sanitary standards, and these are not just
            words, because you can easily see this yourself
          </motion.p>
          <motion.button className={styles.button} onClick={toggleVideoBox} variants={elementsEntranceVariants}>
            play video
          </motion.button>
        </div>

        <motion.div className={styles.video} layoutId='video-wrap' variants={videoEntranceVariants}>
          <motion.video
            layoutId='video-player'
            src='/placeholder.mp4'
            controls={showControls}
            playsInline
            poster='/placeholder.png'
          />
        </motion.div>

        {showVideoBox && (
          <Portal>
            <motion.div
              className={styles.video_background}
              initial={{ backgroundColor: 'rgba(255, 125, 51, 0)' }}
              animate={{ backgroundColor: 'rgba(255, 125, 51, 0.8)' }}
              exit={{ backgroundColor: 'rgba(255, 125, 51, 0)' }}
              onClick={toggleVideoBox}
            >
              <motion.div layoutId='video-wrap' className={styles.video_box}>
                <motion.video
                  layoutId='video-player'
                  ref={videoRef}
                  src='/placeholder.mp4'
                  controls={showControls}
                  playsInline
                  preload='true'
                  poster='/placeholder.png'
                />
                <motion.button
                  className={styles.close_button}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, transition: { duration: 0.5, delay: 0.2 } }}
                  exit={{ scale: 0 }}
                  onClick={toggleVideoBox}
                >
                  <CrossIcon />
                </motion.button>
              </motion.div>
            </motion.div>
          </Portal>
        )}
      </motion.div>
    </motion.div>
  )
}

export default Media
