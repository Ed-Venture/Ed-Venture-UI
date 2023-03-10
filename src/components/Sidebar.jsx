import { BiMedal } from "react-icons/bi"
import { SiGoogleclassroom } from "react-icons/si"
import { MdQuiz } from "react-icons/md"
import { NavLink } from "react-router-dom"
import Profile from "./Modal/Profile"
import { useEffect, useState } from "react"
import { auth } from "../firebase"
import { fetchUserByEmail } from "../context/DataContext"
const Sidebar = ({ showNews, setShowNews }) => {
	const [displayName, setDisplayName] = useState("")
	useEffect(() => {
		getDetails()
	}, [showNews])
	const getDetails = async () => {
		let user = auth.currentUser
		let displayName = user.displayName
		if (!displayName) {
			user = await fetchUserByEmail(user.email)
			displayName = user.name
		}
		setDisplayName(displayName)
	}
	const [showProfile, setShowProfile] = useState(false)
	const handleProfile = () => setShowProfile(true)
	return (
		<div
			className={`top-0 w-full sm:w-[325px]  bg-[#645CBB] border-white border-r-2 border-t-2 p-10 pl-12 fixed h-full z-40  transition-transform ${
				showNews ? "translate-x-0" : "-translate-x-full"
			} items-center`}
		>
			<button className="flex text-4xl text-white items-center cursor-pointer absolute right-10 top-6 z-50" onClick={() => setShowNews(!showNews)}>
				<svg
					className="h-9 w-9 text-white hover:scale-125 transition duration-500"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<line x1="18" y1="6" x2="6" y2="18" />
					<line x1="6" y1="6" x2="18" y2="18" />
				</svg>
			</button>
			<div className="flex mt-7 cursor-pointer" onClick={handleProfile}>
				<img
					className="w-10 h-10 rounded-full mr-5 ease-in-out duration-500 hover:cursor-pointer hover:rotate-6 hover:scale-125"
					src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
					alt="Rounded avatar"
				/>
				<div className="text-xl pt-2 text-gray-100">{displayName}</div>
			</div>
			{showProfile && <Profile showProfile={setShowProfile} setShowNews={setShowNews} />}
			<div className="mt-7 pl-2">
				<div className="py-6 flex" style={{ color: "white" }}>
					<SiGoogleclassroom size={32} />
					<NavLink to="/classes" style={{ textDecoration: "none" }}>
						<p className="relative group">
							<span className="pt-1 pl-7 text-lg" onClick={() => setShowNews(!showNews)}>
								Classes
							</span>
							<span className="absolute -bottom-1 left-7 w-0 h-1 bg-white transition-all group-hover:w-full"></span>
						</p>
					</NavLink>
				</div>
				<div className="py-6 flex" style={{ color: "white" }}>
					<MdQuiz size={32} />
					<NavLink to="/quizes" style={{ textDecoration: "none" }}>
						<p className="relative group">
							<span className="pt-1 pl-7 text-lg" onClick={() => setShowNews(!showNews)}>
								Quizes
							</span>
							<span className="absolute -bottom-1 left-7 w-0 h-1 bg-white transition-all group-hover:w-full"></span>
						</p>
					</NavLink>
				</div>
				<div className="py-6 flex relative" style={{ color: "white" }}>
					<BiMedal size={32} />
					<NavLink to="/ranks" style={{ textDecoration: "none" }}>
						<p className="relative group">
							<span className="pt-1 pl-7 text-lg" onClick={() => setShowNews(!showNews)}>
								Rankings
							</span>
							<span className="absolute -bottom-1 left-7 w-0 h-1 bg-white transition-all group-hover:w-full"></span>
						</p>
					</NavLink>
				</div>
			</div>
		</div>
	)
}

export default Sidebar
