import PostsList from 'components/reusable/posts_list/PostsList'
import styles from './LatestPosts.module.css'
import { posts } from './data'

function LatestPosts() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <h2 className={styles.header}>Latest Posts</h2>
        <PostsList posts={posts} />
      </div>
      <ul className={styles.list}></ul>
    </div>
  )
}
export default LatestPosts
