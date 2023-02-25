import { Navigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const AuthRoute = ({ component }) => {
	const { currentUser } = useAuth()
	return currentUser ? <Navigate to="/classes" /> : component
}

export default AuthRoute
