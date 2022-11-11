import { FormikState, useFormik } from "formik"
import { LoginSchema } from "../../schema"
import { LoginT } from "../../types"

function useLogin() {
  const LoginInitialState = {
    email: "",
    password: "",
  }

  const handleSubmit = (vals: LoginT, actions: any) => {
    alert("Yippie")
    actions.resetForm()
  }
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
