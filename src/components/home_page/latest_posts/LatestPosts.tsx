import PostsList from 'components/reusable/posts_list/PostsList'
import styles from './LatestPosts.module.css'
import { posts } from './data'
import { motion } from 'framer-motion'

function LatestPosts() {
  return (
    <motion.div
      className={styles.container}
      initial='offscreen'
      whileInView='onscreen'
      transition={{ staggerChildren: 0.3 }}
      viewport={{ amount: 0.6, once: true }}
    >
      <div className={styles.inner}>
        <h2 className={styles.header}>Latest Posts</h2>
        <PostsList posts={posts} />
      </div>
      <ul className={styles.list}></ul>
    </motion.div>
  )
}
export default LatestPosts
