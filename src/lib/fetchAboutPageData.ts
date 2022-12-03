import { z } from "zod"
import { API_URL } from "config"
import {
  MetaSchema,
  SingleImageMediaSchema,
  SingleVideoMediaSchema,
  SEOSchema,
  PageBannerSchema,
} from "./zodCommonSchemas"

const dataValidator = z.object({
  meta: MetaSchema,
  data: z.object({
    id: z.number(),
    attributes: z.object({
      seo: SEOSchema,
      page_banner: PageBannerSchema,
      main_section_header: z.string(),
      main_section_text: z.string(),
      main_section_image: SingleImageMediaSchema,
      main_section_bullet_points: z.string(),
      counter_happy_clients: z.number(),
      counter_orders_everyday: z.number(),
      counter_professionals: z.number(),
      counter_work_since: z.string(),
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
  const response = await fetch(`${API_URL}/about?populate=deep`)
  const data = await response.json()
  const parsedData = dataValidator.safeParse(data)

  if (!parsedData.success) {
    console.error(parsedData.error.issues)
    throw new Error("Error while fetching data")
  }

  return parsedData.data
}
