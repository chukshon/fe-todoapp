import { AuthInitialStateT, ActionsT } from "../types/index"
import {
  LOGIN_USER_ERROR,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_LOADING,
  LOGOUT_USER,
  CLEAR_ERROR_ALERT,
} from "./actions"

const authReducer = (state: AuthInitialStateT, action: ActionsT) => {
  if (action.type === LOGIN_USER_LOADING) {
    return {
      ...state,
      isLoading: true,
      message: "",
    }
  }
  if (action.type === LOGIN_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      isSuccess: true,
      message: "",
      user: action.payload,
    }
  }
  if (action.type === LOGIN_USER_ERROR) {
    return {
      ...state,
      isError: true,
      isSuccess: false,
      isLoading: false,
      showErrorAlert: true,
      message: action.payload,
    }
  }
  if (action.type === LOGOUT_USER) {
    return {
      ...state,
      isLoading: false,
      isSuccess: false,
      isError: false,
      message: "",
      user: null,
      showErrorAlert: false,
    }
  }
  if (action.type === CLEAR_ERROR_ALERT) {
    return {
      ...state,
      showErrorAlert: false,
      message: "",
    }
  }
  throw new Error(`No Matching "" - action type`)
}

export default authReducer
