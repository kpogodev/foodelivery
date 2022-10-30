import { z } from 'zod'
import { API_URL } from 'config'
import {  MetaSchema, SingleImageMediaSchema, SingleVideoMediaSchema } from 'lib/zodCommonSchemas'

const dataValidator = z.object({
  meta: MetaSchema,
  data: z.object({
    id: z.number(),
    attributes: z.object({
      page_title: z.string(),
      page_description: z.string(),
      about_us_text: z.string(),
      about_us_image: SingleImageMediaSchema,
      media_header: z.string(),
      media_text: z.string(),
      media_video: SingleVideoMediaSchema,
      createdAt: z.string(),
      updatedAt: z.string(),
      publishedAt: z.string(),
    }),
  }),
})

export type HomepageAPIResponse = z.infer<typeof dataValidator>

export const fetchHomepageData = async (): Promise<HomepageAPIResponse> => {
  const response = await fetch(`${API_URL}/homepage?populate[]=about_us_image&populate[]=media_video`)
  const data = await response.json()
  const responseData = dataValidator.parse(data)
  return responseData
}
