import { z } from "zod"
import { API_URL } from "config"
import { MetaSchema, MealSchema } from "lib/zodCommonSchemas"

const dataValidator = z.object({
  meta: MetaSchema,
  data: z.object({
    id: z.number(),
    attributes: z.object({
      createdAt: z.string(),
      updatedAt: z.string(),
      publishedAt: z.string(),
      meals: z.object({
        data: z.array(MealSchema),
      }),
    }),
  })
})

export type WeekSpecialAPIResponse = z.infer<typeof dataValidator>

export const fetchWeekSpecialData = async (): Promise<WeekSpecialAPIResponse> => {
  const response = await fetch(`${API_URL}/week-special?populate=deep`)
  const data = await response.json()
  const parsedData = dataValidator.safeParse(data)

  if (!parsedData.success) {
    console.error(parsedData.error.issues)
    throw new Error("Error while fetching data")
  }

  return parsedData.data
}
