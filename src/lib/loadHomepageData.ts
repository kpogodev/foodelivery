import { z } from 'zod'
import { API_URL } from 'config'

const dataValidator = z.object({
  meta: z.object({
    pagination: z.object({
      total: z.number(),
      page: z.number(),
      pageSize: z.number(),
      pageCount: z.number(),
    }).optional().nullable(),
  }).nullable().optional(),
  data: z.object({
    id: z.number(),
    attributes: z.object({
      page_title: z.string(),
      page_description: z.string(),
      about_us_text: z.string(),
      about_us_image: z.object({
        data: z.object({
          id: z.number(),
          attributes: z.object({
            name: z.string(),
            alternativeText: z.string(),
            caption: z.string(),
            width: z.number(),
            height: z.number(),
            hash: z.string(),
            ext: z.string(),
            mime: z.string(),
            size: z.number(),
            url: z.string(),
            previewUrl: z.string().nullable(),
            provider: z.string(),
            provider_metadata: z
              .object({
                public_id: z.string(),
                resource_type: z.string(),
              })
              .nullable(),
            formats: z.object({
              thumbnail: z
                .object({
                  name: z.string(),
                  hash: z.string(),
                  ext: z.string(),
                  mime: z.string(),
                  width: z.number(),
                  height: z.number(),
                  size: z.number(),
                  path: z.string().nullable(),
                  url: z.string(),
                  provider_metadata: z
                    .object({
                      public_id: z.string(),
                      resource_type: z.string(),
                    })
                    .nullable(),
                })
                .optional(),
              small: z
                .object({
                  name: z.string(),
                  hash: z.string(),
                  ext: z.string(),
                  mime: z.string(),
                  width: z.number(),
                  height: z.number(),
                  size: z.number(),
                  path: z.string().nullable(),
                  url: z.string(),
                  provider_metadata: z
                    .object({
                      public_id: z.string(),
                      resource_type: z.string(),
                    })
                    .nullable(),
                })
                .optional(),
              medium: z
                .object({
                  name: z.string(),
                  hash: z.string(),
                  ext: z.string(),
                  mime: z.string(),
                  width: z.number(),
                  height: z.number(),
                  size: z.number(),
                  path: z.string().nullable(),
                  url: z.string(),
                  provider_metadata: z
                    .object({
                      public_id: z.string(),
                      resource_type: z.string(),
                    })
                    .nullable(),
                })
                .optional(),
              large: z
                .object({
                  name: z.string(),
                  hash: z.string(),
                  ext: z.string(),
                  mime: z.string(),
                  width: z.number(),
                  height: z.number(),
                  size: z.number(),
                  path: z.string().nullable(),
                  url: z.string(),
                  provider_metadata: z
                    .object({
                      public_id: z.string(),
                      resource_type: z.string(),
                    })
                    .nullable(),
                })
                .optional(),
            }),
            createdAt: z.string(),
            updatedAt: z.string(),
          }),
        }),
      }),
      media_header: z.string(),
      media_text: z.string(),
      media_video: z.object({
        data: z.object({
          id: z.number(),
          attributes: z.object({
            name: z.string(),
            alternativeText: z.string(),
            caption: z.string(),
            width: z.number().nullable(),
            height: z.number().nullable(),
            hash: z.string(),
            ext: z.string(),
            mime: z.string(),
            size: z.number().nullable(),
            url: z.string(),
            previewUrl: z.string().nullable(),
            provider: z.string(),
            provider_metadata: z.object({
              public_id: z.string(),
              resource_type: z.string(),
            }),
            createdAt: z.string(),
            updatedAt: z.string(),
          }),
        }),
      }),
      createdAt: z.string(),
      updatedAt: z.string(),
      publishedAt: z.string(),
    }),
  }),
})

export type HomepageAPIResponse = z.infer<typeof dataValidator>

export const loadHomepageData = async (): Promise<HomepageAPIResponse> => {
  const response = await fetch(`${API_URL}/homepage?populate[]=about_us_image&populate[]=media_video`)
  const data = await response.json()
  const responseData = dataValidator.parse(data)
  return responseData
}