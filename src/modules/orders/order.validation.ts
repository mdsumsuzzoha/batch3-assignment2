import { z } from "zod";


const orderValidationSchema = z.object({
    email: z.string().email("Invalid email address"),
    productId: z.string().min(1, "Product ID cannot be empty"),
    price: z.number().nonnegative({ message: "Price must be a non-negative number" }),
    quantity: z.number().int().nonnegative({ message: "Quantity must be a non-negative integer" })
  });

  export default orderValidationSchema;