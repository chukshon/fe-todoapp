import React, { useEffect, useContext, useReducer } from "react"
import authReducer from "./authReducer"
import { AuthInitialStateT, LoginT } from "../types/index"
import axios from "axios"
import {
  LOGIN_USER_ERROR,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_LOADING,
  LOGOUT_USER,
  CLEAR_ERROR_ALERT,
} from "./actions"

export const AuthContext = React.createContext<any>({})

const user = localStorage.getItem("user")

const initialState: AuthInitialStateT = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
  user: user ? JSON.parse(user) : null,
  showErrorAlert: false,
}

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, initialState)
  const clearErrorAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ERROR_ALERT })
    }, 6000)
  }

  const loginUser = async (formData: LoginT) => {
    dispatch({ type: LOGIN_USER_LOADING })
    try {
      const { data } = await axios.post(
        "/Tests/scripts/user-login.php",
        formData
      )
      dispatch({ type: LOGIN_USER_SUCCESS, payload: data })
      localStorage.setItem("user", JSON.stringify(data))
      return true
    } catch (err: any) {
      console.log(err)
      let message = err.response.data.message || "Something went wrong"

      dispatch({ type: LOGIN_USER_ERROR, payload: message })
      clearErrorAlert()
      return false
    }
  }

  const logoutUser = () => {
    dispatch({ type: LOGIN_USER_LOADING })
    localStorage.removeItem("user")
  }

  return (
    <AuthContext.Provider value={{ ...state, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuthContext = () => {
  return useContext(AuthContext)
}

export { AuthProvider, initialState, useAuthContext }
