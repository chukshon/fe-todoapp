import React from "react"
import { Navigate } from "react-router-dom"
import { useAuthContext } from "../../context/authContext"

const PrivateRoute = ({ children }: any) => {
  const { user } = useAuthContext()
  if (!user) {
    return <Navigate to="/login" />
  }
  return children
}

export default PrivateRoute
