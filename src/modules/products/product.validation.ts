import { z } from "zod";


// Define the Zod schema for a variant
const variantValidationSchema =z.object({
    type: z.string().min(1, "Type cannot be empty"),
    value: z.string().min(1, "Value cannot be empty"),
  });
  
  // Define the Zod schema for the product
  const productValidationSchema = z.object({
    name: z.string().min(1, "Name cannot be empty"),
    description: z.string().min(1, "Description cannot be empty"),
    price: z.number().nonnegative({ message: "Price must be a non-negative number" }),
    category: z.string().min(1, "Category cannot be empty"),
    tags: z.array(z.string().min(1, "Tag cannot be empty")),
    variants: z.tuple([variantValidationSchema]),
    inventory: z.object({
      quantity: z.number().nonnegative({ message: "Quantity must be a non-negative number" }),
      inStock: z.boolean(),
    }),
  });
  
  export default productValidationSchema;