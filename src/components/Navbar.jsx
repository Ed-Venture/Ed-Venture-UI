import Joinclass from "./Joinclass"
import React from "react"
import { RxHamburgerMenu, RxDoubleArrowLeft, RxPlus } from "react-icons/rx"
import { NavLink, useNavigate } from "react-router-dom"
import { useState } from "react"
import CreateClass from "./createclass"
import { auth } from "../firebase"

export default function Navbar({ setShowNews, showNews }) {
	const [pop, setPop] = useState(false)
	const [popp, setPopp] = useState(false)

	const navigate = useNavigate()
	const handlePop = () => setPop(prev => !prev)
	const handlePopp = () => setPopp(prev => !prev)
	
	const className = localStorage.getItem("className")
	const heading = location.pathname === "/classes" ? "EdVenture" : className
	return (
		auth.currentUser && (
			<div className="w-full bg-[#645CBB] h-12 flex text-white pt-2 relative">
				<div className="px-5 pt-2" onClick={() => setShowNews(!showNews)}>
					<RxHamburgerMenu className="cursor-pointer" />
				</div>
				<div className="text-xl basis-8/12">{heading}</div>
				<div className={`flex pt-1 ${location.pathname == "/Class" ? "hidden" : "block"}`}>
					<NavLink to="/Class/:id/stream" style={{ textDecoration: "none" }}>
						<div className="px-3 hover:text-gray-300 transition duration-500">Stream</div>
					</NavLink>
					<NavLink to="/Class/:id/assignment" style={{ textDecoration: "none" }}>
						<div className="px-3 hover:text-gray-300 transition duration-500">Assignment</div>
					</NavLink>
					<NavLink to="/Class/:id/people" style={{ textDecoration: "none" }}>
						<div className="px-3 hover:text-gray-300 transition duration-500">People</div>
					</NavLink>
				</div>
				<div className="px-5 pt-2">
					<NavLink to="/Class" style={{ textDecoration: "none" }} onClick={() => navigate(-1)}>
						<RxDoubleArrowLeft className="hover:scale-125 transition duration-500" />
					</NavLink>
				</div>

				<div className={`px-5 pt-2 ${location.pathname != "/Class" ? "hidden" : "block"}`}>
					<div onClick={handlePopp} className="cursor-pointer text-xs">
						Join Class
					</div>
				</div>

				{popp && <Joinclass popp={setPopp} />}
				<div className={`px-5 pt-2 ${location.pathname != "/Class" ? "hidden" : "block"}`}>
					<RxPlus onClick={handlePop} className="cursor-pointer " />
				</div>
				{pop && <CreateClass pop={setPop} />}
			</div>
		)
	)
}
