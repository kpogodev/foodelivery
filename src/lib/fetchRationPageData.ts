import { z } from 'zod'
import { API_URL } from 'config'
import { MetaSchema, SEOSchema, PageBannerSchema } from './zodCommonSchemas'

const dataValidator = z.object({
  meta: MetaSchema,
  data: z.object({
    id: z.number(),
    attributes: z.object({
      seo: SEOSchema,
      page_banner: PageBannerSchema,
      createdAt: z.string(),
      updatedAt: z.string(),
      publishedAt: z.string(),
    }),
  }),
})

export type RationPageAPIResponse = z.infer<typeof dataValidator>

export const fetchRationPageData = async () => {
  const response = await fetch(`${API_URL}/ration?populate=deep`)
  const data = await response.json()
  const parsedData = dataValidator.safeParse(data)

  if (!parsedData.success) {
    console.error(parsedData.error.issues)
    throw new Error('Error while fetching data')
  }

  return parsedData.data
}
