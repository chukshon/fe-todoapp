import { FormikState } from "formik"
export type LoginT = {
  email: string
  password: string
}

export type FormikActionsT = {
  resetForm: (nextState?: Partial<FormikState<LoginT>> | undefined) => void
}

export type TodoT = {
  id: string
  name: string
  isEditing: boolean
}
