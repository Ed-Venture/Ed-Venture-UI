import Joinclass from "./Modal/Joinclass"
import React from "react"
import { RxHamburgerMenu, RxDoubleArrowLeft, RxPlus } from "react-icons/rx"
import { NavLink, useNavigate } from "react-router-dom"
import { useState } from "react"
import CreateClass from "./Modal/createclass"
import { auth } from "../firebase"

export default function Navbar({ setShowNews, showNews }) {
	const [pop, setPop] = useState(false)
	const [popp, setPopp] = useState(false)

	const navigate = useNavigate()
	const handlePop = () => setPop(prev => !prev)
	const handlePopp = () => setPopp(prev => !prev)

	const { name: className, id } = JSON.parse(localStorage.getItem("class") || "{}")

	const heading =
		location.pathname === "/classes" ? (
			<NavLink to="/" style={{ textDecoration: "none" }} className="text-xl basis-10/12">
				<div>EdVenture</div>{" "}
			</NavLink>
		) : (
			<div className="text-xl basis-10/12 hidden sm:block">{className}</div>
		)
	return (
		auth.currentUser && (
			<div className="w-full bg-[#645CBB] h-12 flex text-white pt-2 relative">
				<div className="px-5 pt-2" onClick={() => setShowNews(!showNews)}>
					<RxHamburgerMenu className="cursor-pointer" />
				</div>
				{heading}
				<div className={`flex pt-1 ${location.pathname == "/classes" ? "hidden" : "block"}`}>
					<NavLink to={`/classes/${id}/stream`} style={{ textDecoration: "none" }}>
						<div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
							<div className="px-3 hover:text-gray-300 transition duration-500">Stream</div>
							<div
								style={{
									backgroundColor: "white",
									borderRadius: 15,
									width: 90,
									height: 15,
									marginTop: 5,
									display: location.pathname.endsWith("/stream") ? "block" : "none",
								}}
							/>
						</div>
					</NavLink>
					<NavLink to={`/classes/${id}/assignment`} style={{ textDecoration: "none" }}>
						<div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
							<div className="px-3 hover:text-gray-300 transition duration-500">Assignment</div>
							<div
								style={{
									backgroundColor: "white",
									borderRadius: 15,
									width: 125,
									height: 15,
									marginTop: 5,
									display: location.pathname.endsWith("/assignment") ? "block" : "none",
								}}
							/>
						</div>
					</NavLink>
					<NavLink to={`/classes/${id}/people`} style={{ textDecoration: "none" }}>
						<div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
							<div className="px-3 hover:text-gray-300 transition duration-500">People</div>
							<div
								style={{
									backgroundColor: "white",
									borderRadius: 15,
									width: 90,
									height: 15,
									marginTop: 5,
									display: location.pathname.endsWith("/people") ? "block" : "none",
								}}
							/>
						</div>
					</NavLink>
				</div>

				<div className="px-4 pt-2">
					<NavLink style={{ textDecoration: "none" }} onClick={() => navigate(-1)}>
						<RxDoubleArrowLeft className="hover:scale-125 transition duration-500" />
					</NavLink>
				</div>

				<div className={`px-3 pt-2 ${location.pathname != "/classes" ? "hidden" : "block"}`}>
					<div onClick={handlePopp} className="cursor-pointer text-xs whitespace-nowrap">
						Join Class
					</div>
				</div>

				{popp && <Joinclass popp={setPopp} />}
				<div className={`px-4 pt-2 ${location.pathname != "/classes" ? "hidden" : "block"}`}>
					<RxPlus onClick={handlePop} className="cursor-pointer" />
				</div>
				{pop && <CreateClass pop={setPop} />}
			</div>
		)
	)
}
