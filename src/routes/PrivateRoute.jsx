import { Navigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const PrivateRoute = ({ component }) => {
	const { currentUser } = useAuth()
	return currentUser ? component : <Navigate to="/logIn" />
}

export default PrivateRoute
