import * as z from "zod";

export const SigninSchema = z.object({
  username: z.string().min(2),
  mobile: z.string().min(10).max(10),
  password: z
    .string()
    .min(6)
    .max(20)
    .regex(/[A-Z]/)
    .regex(/[a-z]/)
    .regex(/[0-9]/)
    .regex(/[\W_]/),
});

export const SignupSchema = z.object({
  username: z.string().min(2),
  mobile: z.string().min(10).max(10),
  password: z
    .string()
    .min(6)
    .max(20)
    .regex(/[A-Z]/)
    .regex(/[a-z]/)
    .regex(/[0-9]/)
    .regex(/[\W_]/),
});
