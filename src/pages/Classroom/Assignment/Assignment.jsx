import React, { useEffect } from "react"
import note from "../../../assets/images/note.png"
import { FiPaperclip } from "react-icons/fi"
import { AssignData } from "./assignment_data"
import { AiOutlinePlus } from "react-icons/ai"
import { useState } from "react"
import SubmitAssign from "../../../components/Modal/SubmitAssign"
import CreateAssignment from "../../../components/Modal/CreateAssignment"
import { fetchUserByEmail } from "../../../context/DataContext"
import { auth } from "../../../firebase"

export default function Assignment() {
	const [allowCreateAssignment, setAllowCreateAssignment] = useState(false)
	const [showAssign, setShowAssign] = useState(false)
	const [createAssign, setCreateAssign] = useState(false)
	const handleSubmit = () => setShowAssign(true)
	const addAssign = () => setCreateAssign(true)
	useEffect(() => {
		getData()
	}, [])
	const getData = async () => {
		const class_ = JSON.parse(localStorage.getItem("class") || "{}")
		const userId = (await fetchUserByEmail(auth.currentUser?.email)).id
		const allow = [...class_.faculties, class_.createdBy].includes(userId)
		setAllowCreateAssignment(allow)
	}

	return (
		<div className="container p-5">
			{allowCreateAssignment && (
				<button
					type="button"
					className="text-white bg-[#645CBB] hover:bg-[#645CBB]/90 focus:ring-4 focus:outline-none focus:ring-bg-[#645CBB]/50 font-medium rounded-full text-sm px-7 py-2.5 text-center inline-flex items-center dark:focus:ring-[#645CBB]/55 mr-2 mb-2 ml-1 pl-5"
					onClick={addAssign}
				>
					<AiOutlinePlus className="mr-2" />
					Create
				</button>
			)}
			{createAssign && <CreateAssignment setCreateAssign={setCreateAssign} />}
			{AssignData.map((info, i) => (
				<div className="h-36 bg-pink-100 my-7 rounded-md flex pt-2 md:pt-7 pl-6" key={i}>
					<div className="bg-green-400 h-12 w-12 md:h-20 md:w-20 p-3 mt-5 md:mt-0 rounded-full">
						<img src={note} />
					</div>
					<div className=" pt-0 md:pt-3 pl-5 flex flex-wrap basis-11/12 mt-3">
						<div className="basis-4/6 md:text-2xl text-lg ">{info.desc}</div>
						<div className="basis-1/6 mt-2 md:mt-0" onClick={handleSubmit}>
							<FiPaperclip size={35} className="transition cursor-pointer duration-500 hover:scale-125" />
						</div>
						{showAssign && <SubmitAssign showAssign={setShowAssign} />}
						<div className="text-slate-400 text-md md:text-xl pt-2">{info.date}</div>
					</div>
				</div>
			))}
		</div>
	)
}
