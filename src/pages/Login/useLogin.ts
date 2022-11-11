import { useFormik } from "formik"
import { LoginSchema } from "../../schema"

function useLogin() {
  const LoginInitialState = {
    email: "",
    password: "",
  }

  const handleSubmit = () => {}
  const LoginFormik = useFormik({
    initialValues: LoginInitialState,
    validationSchema: LoginSchema,
    onSubmit: handleSubmit,
    validateOnBlur: true,
  })
  return {
    LoginFormik,
  }
}

export default useLogin
