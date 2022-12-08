import { z } from "zod"
import { API_URL } from "config"
import { MetaSchema, DailyRationPlanSchema } from "lib/zodCommonSchemas"

const dataValidator = z.object({
  meta: MetaSchema,
  data: z.object({
    id: z.number(),
    attributes: z.object({
      plan_name: z.string(),
      plan_description: z.string(),
      plan_length: z.string(),
      plan_calories_range: z.string(),
      monday: DailyRationPlanSchema,
      tuesday: DailyRationPlanSchema,
      wednesday: DailyRationPlanSchema,
      thursday: DailyRationPlanSchema,
      friday: DailyRationPlanSchema,
      saturday: DailyRationPlanSchema,
      sunday: DailyRationPlanSchema,
      createdAt: z.string(),
      updatedAt: z.string(),
      publishedAt: z.string(),
    }),
  })
})

export type RationPlanAPIResponse = z.infer<typeof dataValidator>

export const fetchRationPlanData = async (): Promise<RationPlanAPIResponse> => {
  const response = await fetch(`${API_URL}/ration-plan?populate=deep`)
  const data = await response.json()
  const parsedData = dataValidator.safeParse(data)

  if (!parsedData.success) {
    console.error(parsedData.error.issues)
    throw new Error("Error while fetching data")
  }

  return parsedData.data
}
