import { createContext, useContext, useState, useEffect } from "react"
import {
	onAuthStateChanged,
	signOut, // To sign out user
	signInWithEmailAndPassword, // To sign in user using Email and Password
	createUserWithEmailAndPassword, // To create user using Email and Password
	signInWithPopup,
	GoogleAuthProvider, // Sign In with Google
} from "firebase/auth"
import { auth } from "../firebase"

const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState()
	const [loading, setLoading] = useState(true)
	const provider = new GoogleAuthProvider()

	const signUp = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password)
	}
	const signIn = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password)
	}
	const logOut = () => {
		signOut(auth)
	}
	const signInWithGoogle = () => {
		return signInWithPopup(auth, provider)
	}

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, user => {
			setCurrentUser(user)
			setLoading(false)
		})
		return unsubscribe
	}, [])

	const value = {
		currentUser,
		signUp,
		signIn,
		signInWithGoogle,
		logOut
	}
	return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>
}

export default AuthProvider
