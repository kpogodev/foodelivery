import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import CrossIcon from 'assets/cross.svg'
import styles from './Media.module.css'

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
      videoRef.current?.play()
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
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <h2 className={styles.header}>You can watch cooking process translation</h2>
          <p className={styles.text}>
            Our kitchen employs highly qualiied cooks. We adhere to all sanitary standards, and these are not just
            words, because you can easily see this yourself
          </p>
          <button className={styles.button} onClick={toggleVideoBox}>
            play video
          </button>
        </div>
        <AnimateSharedLayout>
          <motion.div className={styles.video} layoutId='video'>
            <motion.video src='/placeholder.mp4' controls={showControls} playsInline poster='/placeholder.png' />
          </motion.div>

          <AnimatePresence>
            {showVideoBox && (
              <motion.div
                className={styles.video_background}
                initial={{ backgroundColor: 'rgba(255, 125, 51, 0)' }}
                animate={{ backgroundColor: 'rgba(255, 125, 51, 0.8)' }}
                exit={{ backgroundColor: 'rgba(255, 125, 51, 0)' }}
                onClick={toggleVideoBox}
              >
                <motion.div layoutId='video' className={styles.video_box}>
                  <motion.video
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
                    animate={{ scale: 1, transition: { duration: 0.5 } }}
                    exit={{ scale: 0 }}
                    onClick={toggleVideoBox}
                  >
                    <CrossIcon />
                  </motion.button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </AnimateSharedLayout>
      </div>
    </div>
  )
}

export default Media
