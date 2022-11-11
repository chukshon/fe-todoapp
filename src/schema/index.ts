import * as yup from "yup"

export const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please type in a valid email address")
    .required("Please enter your email"),
  password: yup.string().required("Please enter your password"),
})
