import { useState } from "react"
import React from "react"

import signinillustration from "../assets/illustrationSignin.png"

import { NavLink, useNavigate } from "react-router-dom"

import GoogleIcon from "../assets/GoogleIcon.svg"

import "../styles/sign_up.css"
import { createUser } from "../context/DataContext"
import { useAuth } from "../context/AuthContext"
function Sign_up() {
	const [user, setUser] = useState({
		name: "",
		email: "",
		password: "",
		cpassword: "",
	})
	const [error, setError] = useState("")
	const [loading, setLoading] = useState(false)
	const { signUp } = useAuth()
	const navigate = useNavigate()
	function handleChange(e) {
		const { name, value } = e.target
		setUser({ ...user, [name]: value })
	}
	const validate = () => {
		const { name, password, cpassword } = user

		if (!name.trim()) {
			setError("Not a valid Name")
			return
		}
		if (!name.match(/^[A-Za-z\s]+$/)) {
			setError("Illegal Characters in Name")
			return
		}
		if (!password.length >= 6) {
			setError("Password Must be longer than 5 characters")
			return
		}
		if (password !== cpassword) {
			setError("Password dont match")
			return
		}
		return true
	}
	const handleSubmit = async e => {
		e.preventDefault()
		if (!validate()) {
			return
		}
		setError()
		try {
			setLoading(true)
			await signUp(user.email, user.password)
			await createUser({ emailId: user.email, name: user.name })
			navigate("/")
		} catch (e) {
			setError(`Failed to sign Up, ${e.message}`)
		}
		setLoading(false)
	}
	return (
		<div className="signIn">
			<h2 className="logo text-3xl pt-3 pl-10 absolute text-2xl">edVenture</h2>
			<img src={signinillustration} className="ill absolute bottom-0 left-0" />
			<div className="signIn-box"></div>
			<div className="signUp-container">
				<div className="register">
					<h2 className="text-center font-bold text-4xl pb-10">Sign Up!</h2>{" "}
					<h3 className="text-center text-red-500" style={{ display: error ? "block" : "none" }}>
						{error}
					</h3>
					<form autoComplete="off" className="register_form flex flex-col pt-6" onSubmit={handleSubmit}>
						<input type="text" required placeholder="Your Name" className="register_input  border-b-2 mb-5 pb-2 pl-2" name="name" onChange={handleChange} value={user.name} />
						<input type="email" required placeholder="Your Email" className="register_input  border-b-2 mb-5 pb-2 pl-2" name="email" onChange={handleChange} value={user.email} />
						<input type="password" required placeholder="Password" className="register_input  border-b-2 mb-5 pb-2 pl-2" name="password" onChange={handleChange} value={user.password} />
						<input
							type="password"
							required
							placeholder="Confirm Password"
							className="register_input  border-b-2 mb-10 pb-2 pl-2"
							name="cpassword"
							onChange={handleChange}
							value={user.cpassword}
						/>
						<button disabled={loading} className="register_button h-10 rounded-md mb-8 bg-[#645CBB] hover:bg-purple-800" type="submit">
							Sign Up
						</button>
						<div className="signinend flex flex-row justify-center">
							<p className="pr-20">Already have an account?</p>
							<NavLink to="/" className={`navi`}>
								Sign In
							</NavLink>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Sign_up
