import { useMemo } from 'react'
import Image from 'next/future/image'
import Link from 'next/link'
import useMediaQuery from 'hooks/useMediaQuery'
import { Post } from 'types'
import styles from './PostsList.module.css'
import ClockIcon from 'assets/clock.svg'
import UserIcon from 'assets/user.svg'
import CommentIcon from 'assets/comment.svg'
import ChevronsIcon from 'assets/double-chevron.svg'

function PostsList({ posts }: { posts: Post[] }) {
  const {matches: showLess} = useMediaQuery('(max-width: 1200px)')
  const postsToShow = useMemo(() => (showLess ? posts.slice(0, 2) : posts), [showLess, posts])

  return (
    <ul className={styles.list}>
      {postsToShow.map((post) => (
        <li className={styles.item} key={post.id}>
          <div className={styles.item_bar}>
            <span>
              <ClockIcon />
              {post.date}
            </span>
            <span>
              <UserIcon />
              {post.author}
            </span>
            <span>
              <CommentIcon />
              {post.comments.length}
            </span>
          </div>
          <Image className={styles.img} src={post.images[0]} alt='' width={356} height={206} />
          <h3 className={styles.title}>{post.title}</h3>
          <Link href='/'>
            <a className={styles.link}>
              <ChevronsIcon />
              Read more
            </a>
          </Link>
        </li>
      ))}
    </ul>
  )
}
export default PostsList
