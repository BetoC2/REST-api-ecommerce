import z from 'zod'

const productSchema = z.object({

  name: z.string({
    required_error: 'Name is required',
    invalid_type_error: 'Name must be a string'
  }),

  price: z.number({
    required_error: 'Price is required',
    invalid_type_error: 'Price must be a valid number'
  }).gt(0),

  stock: z.number({
    required_error: 'Stock is required',
    invalid_type_error: 'Stock must be a valid number'
  }).int().min(0),

  description: z.string({
    required_error: 'Description is required',
    invalid_type_error: 'Description must be a string'
  }),

  image: z.string({
    required_error: 'Image is required',
    invalid_type_error: 'Image must be a string'
  }).url({
    message: 'Image must be a valid URL'
  })

})

export function validateProduct (object) {
  return productSchema.safeParse(object)
}

export function validatePartialProduct (object) {
  return productSchema.partial().safeParse(object)
}
