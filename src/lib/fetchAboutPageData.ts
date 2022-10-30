import { z } from 'zod'
import { API_URL } from 'config'
import { MetaSchema, SingleImageMediaSchema, SingleVideoMediaSchema } from './zodCommonSchemas'

const dataValidator = z.object({
  meta: MetaSchema,
  data: z.object({
    id: z.number(),
    attributes: z.object({
      page_title: z.string(),
      page_description: z.string(),
      page_heading_title: z.string(),
      page_heading_text_color: z.string(),
      page_heading_background_color: z.string(),
      page_heading_image: SingleImageMediaSchema,
      main_section_header: z.string(),
      main_section_text: z.string(),
      main_section_image: SingleImageMediaSchema,
      main_section_bullet_points: z.string(),
      counter_happy_clients: z.number(),
      counter_orders_everyday: z.number(),
      counter_professionals: z.number(),
      counter_work_since: z.date(),
      media_header: z.string(),
      media_text: z.string(),
      media_video: SingleVideoMediaSchema,
      createdAt: z.string(),
      updatedAt: z.string(),
      publishedAt: z.string(),
    }),
  }),
})

export type AboutPageAPIResponse = z.infer<typeof dataValidator>

export const fetchAboutPageData = async () => {
  const response = await fetch(`${API_URL}/about?populate[]=page_heading_image&populate[]=media_video`)
  const data = await response.json()
  const responseData = dataValidator.parse(data)
  return responseData
}
