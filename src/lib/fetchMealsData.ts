import { z } from 'zod'
import { API_URL } from 'config'
import { MetaSchema, MultipleImagesMediaSchema } from 'lib/zodCommonSchemas'

const mealsValidator = z.object({
  meta: MetaSchema,
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
        images: MultipleImagesMediaSchema,
      }),
    })
  ),
})

export type MealsAPIResponse = z.infer<typeof mealsValidator>

export const fetchMealsData = async (): Promise<MealsAPIResponse> => {
  const response = await fetch(`${API_URL}/meals?populate[]=images`)
  const data = await response.json()
  const responseData = mealsValidator.parse(data)

  return responseData
}
