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
                  previewUrl: z.string().optional(),
                  provider: z.string(),
                  provider_metadata: z.object({
                    public_id: z.string(),
                    resource_type: z.string(),
                  }),
                  formats: z.object({
                    thumbnail: z.object({
                      name: z.string(),
                      hash: z.string(),
                      ext: z.string(),
                      mime: z.string(),
                      width: z.number(),
                      height: z.number(),
                      size: z.number(),
                      path: z.string().optional(),
                      url: z.string(),
                      provider_metadata: z.object({
                        public_id: z.string(),
                        resource_type: z.string(),
                      }),
                    }),
                    small: z.object({
                      name: z.string(),
                      hash: z.string(),
                      ext: z.string(),
                      mime: z.string(),
                      width: z.number(),
                      height: z.number(),
                      size: z.number(),
                      path: z.string().optional(),
                      url: z.string(),
                      provider_metadata: z.object({
                        public_id: z.string(),
                        resource_type: z.string(),
                      }),
                    }),
                    medium: z.object({
                      name: z.string(),
                      hash: z.string(),
                      ext: z.string(),
                      mime: z.string(),
                      width: z.number(),
                      height: z.number(),
                      size: z.number(),
                      path: z.string().optional(),
                      url: z.string(),
                      provider_metadata: z.object({
                        public_id: z.string(),
                        resource_type: z.string(),
                      }),
                    }),
                    large: z.object({
                      name: z.string(),
                      hash: z.string(),
                      ext: z.string(),
                      mime: z.string(),
                      width: z.number(),
                      height: z.number(),
                      size: z.number(),
                      path: z.string().optional(),
                      url: z.string(),
                      provider_metadata: z.object({
                        public_id: z.string(),
                        resource_type: z.string(),
                      }),
                    }),
                  }),
                  created_at: z.string(),
                  updated_at: z.string(),
                }),
              })
            ),
          })
          .optional(),
      }),
    })
  ),
})

export type MealsType = z.infer<typeof mealsValidator>

export default async function handler(req: NextApiRequest, res: NextApiResponse<MealsType>) {
  const response = await fetch(`${API_URL}/meals?populate[]=images&populate[]=nutritions`)
  const data = await response.json()

  console.log(data)
  res.status(200).json(data)
}
