import { z } from "zod"

export const MetaSchema = z
  .object({
    pagination: z
      .object({
        total: z.number(),
        page: z.number(),
        pageSize: z.number(),
        pageCount: z.number(),
      })
      .optional()
      .nullable(),
  })
  .nullable()
  .optional()

export const ImageFormatSchema = z
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
  .optional()

export const SingleVideoMediaSchema = z.object({
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
})

export const SingleImageMediaSchema = z.object({
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
        thumbnail: ImageFormatSchema,
        small: ImageFormatSchema,
        medium: ImageFormatSchema,
        large: ImageFormatSchema,
      }),
      createdAt: z.string(),
      updatedAt: z.string(),
    }),
  }),
})

export const MultipleImagesMediaSchema = z
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
          provider_metadata: z
            .object({
              public_id: z.string(),
              resource_type: z.string(),
            })
            .nullable(),
          formats: z.object({
            thumbnail: ImageFormatSchema,
            small: ImageFormatSchema,
            medium: ImageFormatSchema,
            large: ImageFormatSchema,
          }),
          createdAt: z.string(),
          updatedAt: z.string(),
        }),
      })
    ),
  })
  .nullable()

export const MealSchema = z.object({
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

export const DailyRationPlanSchema = z.object({
  id: z.number(),
  breakfast: z.object({
    data: MealSchema
  }),
  lunch: z.object({
    data: MealSchema
  }),
  dinner: z.object({
    data: MealSchema
  }),
  snack: z.object({
    data: MealSchema
  }),
})

export const PageBannerSchema = z.object({
  page_title: z.string(),
  background_color: z.string(),
  text_color: z.string(),
  image: SingleImageMediaSchema,
})

export const SEOSchema = z.object({
  title: z.string(),
  description: z.string(),
})
