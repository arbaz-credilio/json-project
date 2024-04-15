import { z } from "zod";
const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);
export const Validation = z.object({
  id: z.string(),
  name: z
    .string({
      invalid_type_error: "Please enter a valid name",
    })
    .min(1, "Name should have a character"),
  email: z.string().email("Email is invalid"),
  phone: z.string().regex(phoneRegex, "Invalid Number!"),
  address: z.object({
    city: z.string().min(1, "Please enter your city"),
  }),
});
