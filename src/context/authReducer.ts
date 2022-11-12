import { AuthInitialStateT } from "../types/index"
import {
  LOGIN_USER_ERROR,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_LOADING,
  LOGOUT_USER,
  CLEAR_ERROR_ALERT,
} from "./actions"

type ActionType =
  | { type: typeof LOGIN_USER_ERROR; payload: string }
  | { type: typeof LOGIN_USER_SUCCESS; payload: string }
  | { type: typeof LOGIN_USER_LOADING }
  | { type: typeof LOGOUT_USER }
  | { type: typeof CLEAR_ERROR_ALERT }

const authReducer = (state: AuthInitialStateT, action: ActionType) => {
  if (action.type === LOGIN_USER_LOADING) {
    return {
      ...state,
      isLoading: true,
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
      user: null,
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
