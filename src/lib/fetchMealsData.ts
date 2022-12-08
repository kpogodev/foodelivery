import { z } from "zod"
import { API_URL } from "config"
import { MetaSchema, MealSchema } from "lib/zodCommonSchemas"

const mealsValidator = z.object({
  meta: MetaSchema,
  data: z.array(MealSchema),
})

export type MealsAPIResponse = z.infer<typeof mealsValidator>

export const fetchMealsData = async (): Promise<MealsAPIResponse> => {
  const response = await fetch(`${API_URL}/meals?populate=deep`)
  const data = await response.json()
  const parsedData = mealsValidator.safeParse(data)

  if (!parsedData.success) {
    console.error(parsedData.error.issues)
    throw new Error("Error while fetching data")
  }

  return parsedData.data
}
