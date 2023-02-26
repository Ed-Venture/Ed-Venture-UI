import React, { useState } from "react"
import "../styles/sign_in.css"
import signinillustration from "../assets/illustrationSignin.png"

import { NavLink } from "react-router-dom"

import GoogleIcon from "../assets/GoogleIcon.svg"
import { useAuth } from "../context/AuthContext"
import { auth } from "../firebase"
import { createUser } from "../context/DataContext"

function Sign_in() {
	const [user, setUser] = useState({ email: "", password: "" })
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState("")
	const { signIn, signInWithGoogle } = useAuth()
	function handleChange(e) {
		const { name, value } = e.target
		setUser({ ...user, [name]: value })
	}
	const handleSubmit = async e => {
		e.preventDefault()
		setError()
		try {
			setLoading(true)
			await signIn(user.email, user.password)
		} catch (e) {
			setError(`Failed to sign in, ${e.message}`)
		}
		setLoading(false)
	}

	const handleGoogleSignIn = async e => {
		e.preventDefault()
		try {
			await signInWithGoogle()
			// create user Item in Firestore if doesn't exist with same emailId
			const { email: emailId, displayName: name } = auth.currentUser
			await createUser({ emailId, name })
		} catch (e) {
			console.log(e)
		}
	}
	return (
		<div className="signIn">
			<h2 className="logo text-3xl pt-3 pl-6 absolute">edVenture</h2>
			<img src={signinillustration} className="ill absolute bottom-0 left-0" />
			<div className="signIn-box">
				<div className="signIn-container">
					<div className="sign_in_innerContainer">
						<h2 className="text-center font-bold text-4xl pb-10">Sign In</h2>
						<h3 className="text-center text-red-500" style={{ display: error ? "block" : "none" }}>
							{error}
						</h3>
						<form className="login_page flex flex-col" autoComplete="off" onSubmit={handleSubmit}>
							<input //
								type="email"
								placeholder="Email Address"
								required
								className="login_input border-b-2 mb-10 pb-2 pl-2"
								name="email"
								value={user.email}
								onChange={handleChange}
							/>

							<input
								required
								type="password"
								className="login_input border-b-2 mb-10 pb-2 pl-2"
								placeholder="Password"
								autoComplete="new-password"
								name="password"
								value={user.password}
								onChange={handleChange}
							/>

							<button type="submit" disabled={loading} className="login_button h-10 rounded-md mb-8 bg-purple-600 hover:bg-purple-800">
								Log In
							</button>
						</form>
						<p className="text-center pb-5 font-semibold">-OR-</p>

						<button className="google flex h-10 mb-5 p-1 rounded-md" onClick={handleGoogleSignIn}>
							<img src={GoogleIcon} className="googleicon h-7 w-7 pr-1" />
							<div>Sign in using Google</div>
						</button>

						<div className="loginend flex flex-row justify-center">
							<p className="pr-20">Don't have account?</p>
							<NavLink to="/signUp" className={`navi`}>
								Sign Up
							</NavLink>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Sign_in
