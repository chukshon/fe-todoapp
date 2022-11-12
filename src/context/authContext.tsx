import React, { useEffect, useContext, useReducer } from "react"
import authReducer from "./authReducer"
import { AuthInitialStateT } from "../types/index"

export const AuthContext = React.createContext<any>({})

const user = localStorage.getItem("user")
const initialState: AuthInitialStateT = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
  user: user ? JSON.parse(user) : null,
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, initialState)
  const clearErrorAlert = () => {}
  const loginUser = async () => {
    try {
      localStorage.setItem("user", JSON.stringify(""))
    } catch (err) {}
    clearErrorAlert()
  }

  const logoutUser = () => {
    localStorage.removeItem("user")
  }

  return (
    <AuthContext.Provider value={{ ...state, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  )
}
