import { useFormik } from "formik"
import { LoginSchema } from "../../../schema"
import { LoginT, FormikActionsT } from "../../../types"
import { useAuthContext } from "../../../context/authContext"
import { useNavigate } from "react-router-dom"
import React from "react"

function useLogin() {
  const navigate = useNavigate()
  const { loginUser, message, isLoading, user } = useAuthContext()
  const LoginInitialState = {
    email: "",
    password: "",
  }

  const handleSubmit = async (vals: LoginT, actions: FormikActionsT) => {
    const formData = new FormData()
    formData.append("email", vals.email)
    formData.append("password", vals.password)
    const response = await loginUser(formData)
    if (response) {
      navigate("/")
      actions.resetForm()
    }
  }
  const LoginFormik = useFormik({
    initialValues: LoginInitialState,
    validationSchema: LoginSchema,
    onSubmit: handleSubmit,
    validateOnBlur: true,
  })

  React.useEffect(() => {
    if (user) {
      navigate("/")
    }
  }, [user, navigate])

  return {
    LoginFormik,
    message,
    isLoading,
  }
}

export default useLogin
