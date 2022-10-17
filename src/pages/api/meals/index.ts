import type { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'
import { API_URL } from 'config'

const mealsValidator = z.object({
  meta: z.object({
    pagination: z.object({
      total: z.number(),
      page: z.number(),
      pageSize: z.number(),
      pageCount: z.number(),
    }),
  }),
  data: z.array(
    z.object({
      id: z.number(),
      attributes: z.object({
        name: z.string(),
        slug: z.string(),
        description: z.string(),
        price: z.number(),
        size: z.string(),
        calories: z.number(),
        fats: z.number(),
        proteins: z.number(),
        category: z.string(),
        vegan_friendly: z.boolean(),
        vegetarian_friendly: z.boolean(),
        gluten_free: z.boolean(),
        week_special: z.boolean(),
        createdAt: z.string(),
        updatedAt: z.string(),
        images: z
          .object({
            data: z.array(
              z.object({
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
                  provider_metadata: z.object({
                    public_id: z.string(),
                    resource_type: z.string(),
                  }).nullable(),
                  formats: z.object({
                    thumbnail: z.object({
                      name: z.string(),
                      hash: z.string(),
                      ext: z.string(),
                      mime: z.string(),
                      width: z.number(),
                      height: z.number(),
                      size: z.number(),
                      path: z.string().nullable(),
                      url: z.string(),
                      provider_metadata: z.object({
                        public_id: z.string(),
                        resource_type: z.string(),
                      }).nullable(),
                    }).optional(),
                    small: z.object({
                      name: z.string(),
                      hash: z.string(),
                      ext: z.string(),
                      mime: z.string(),
                      width: z.number(),
                      height: z.number(),
                      size: z.number(),
                      path: z.string().nullable(),
                      url: z.string(),
                      provider_metadata: z.object({
                        public_id: z.string(),
                        resource_type: z.string(),
                      }).nullable(),
                    }).optional(),
                    medium: z.object({
                      name: z.string(),
                      hash: z.string(),
                      ext: z.string(),
                      mime: z.string(),
                      width: z.number(),
                      height: z.number(),
                      size: z.number(),
                      path: z.string().nullable(),
                      url: z.string(),
                      provider_metadata: z.object({
                        public_id: z.string(),
                        resource_type: z.string(),
                      }).nullable(),
                    }).optional(),
                    large: z.object({
                      name: z.string(),
                      hash: z.string(),
                      ext: z.string(),
                      mime: z.string(),
                      width: z.number(),
                      height: z.number(),
                      size: z.number(),
                      path: z.string().nullable(),
                      url: z.string(),
                      provider_metadata: z.object({
                        public_id: z.string(),
                        resource_type: z.string(),
                      }).nullable(),
                    }).optional(),
                  }),
                  createdAt: z.string(),
                  updatedAt: z.string(),
                }),
              })
            ),
          })
          .nullable(),
      }),
    })
  ),
})

export type MealsAPIResponse = z.infer<typeof mealsValidator>

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const response = await fetch(`${API_URL}/meals?populate[]=images`)
  const data = await response.json()
  const responseData = mealsValidator.parse(data)
  res.status(200).json(responseData)
}
