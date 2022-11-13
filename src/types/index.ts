import { FormikState } from "formik"
import {
  LOGIN_USER_ERROR,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_LOADING,
  LOGOUT_USER,
  CLEAR_ERROR_ALERT,
} from "../context/actions"

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

export type AuthInitialStateT = {
  isLoading: boolean
  isSuccess: boolean
  isError: boolean
  message: string
  user: string | null
  showErrorAlert: boolean
}

export type ActionsT =
  | { type: typeof LOGIN_USER_ERROR; payload: string }
  | { type: typeof LOGIN_USER_SUCCESS; payload: string }
  | { type: typeof LOGIN_USER_LOADING }
  | { type: typeof LOGOUT_USER }
  | { type: typeof CLEAR_ERROR_ALERT }
