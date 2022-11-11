import * as yup from "yup"

export const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Not a valid email")
    .required("Please enter your email")
    .max(50, "Should not be more than 50 characters"),
  password: yup
    .string()
    .required("Please enter your password")
    .min(4, "Should be more than 4 characters")
    .max(16, "Should not be more than 16 characters"),
})
