import Head from 'next/head'

const defaultProps = {
  title: 'Foodelivery',
  description: 'We sell the best products for cheap',
  keywords: 'healthy, food, cheap',
}

type childrenProp = { children?: React.ReactNode }

const Meta = ({ title, keywords, description, children }: typeof defaultProps & childrenProp) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='utf-8' />
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
      <link rel='icon' href='/favicon.ico' />
      {children}
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = defaultProps

export default Meta
