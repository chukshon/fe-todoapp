import { useFormik } from "formik"
import { LoginSchema } from "../../../schema"
import { LoginT, FormikActionsT } from "../../../types"
import { useAuthContext } from "../../../context/authContext"

function useLogin() {
  const { loginUser, message, showErrorAlert, isLoading } = useAuthContext()
  const LoginInitialState = {
    email: "",
    password: "",
  }

  const handleSubmit = async (vals: LoginT, actions: FormikActionsT) => {
    const response = await loginUser(vals)
    if (response) {
      actions.resetForm()
    }
  }
  const LoginFormik = useFormik({
    initialValues: LoginInitialState,
    validationSchema: LoginSchema,
    onSubmit: handleSubmit,
    validateOnBlur: true,
  })
  return {
    LoginFormik,
    message,
    isLoading,
  }
}

export default useLogin
