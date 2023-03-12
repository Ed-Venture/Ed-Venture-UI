import { useEffect, useRef, useState } from "react"
import { AiOutlinePlus } from "react-icons/ai"
import { FaFileUpload } from "react-icons/fa"
import { createAssignment, fetchUserByEmail } from "../../context/DataContext"
import { uploadFile } from "../../context/StorageContext"
import { auth } from "../../firebase"

export default function CreateAssignment({ setCreateAssign }) {
	const inputRef = useRef(null)
	const [file, setFile] = useState()
	const [error, setError] = useState("")

	const handleClick = () => {
		inputRef.current.click()
	}
	const handleSubmit = async () => {
		setError()
		try {
			const fileUrl = await uploadFile(file)
			const { id: classId } = JSON.parse(localStorage.getItem("class") || "{}")
			const { id: userId, name: userName } = await fetchUserByEmail(auth.currentUser?.email)
			const data = { classId, userId, fileUrl, userName }
			await createAssignment(data)
			handleCancel()
		} catch (e) {
			setError(e.message)
		}
	}
	const handleCancel = () => setCreateAssign(prev => !prev)
	const handleFileChange = event => {
		const fileObj = event.target.files && event.target.files[0]
		if (!fileObj) {
			return
		}
		setFile(fileObj)
		event.target.value = null
	}

	return (
		<div className="createclasspop absolute top-[6em] left-[5vw] flex flex-col h-[360px] w-72 z-[1000] bg-[#645CBC] box-content border rounded-[10px] min-[895px]:w-[36vw] min-[895px]:left-[30vw] p-5">
			<button className="flex text-4xl text-white items-center cursor-pointer absolute right-6 top-6 z-50" onClick={handleCancel}>
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
			<div className="flex-col content-center items-center self-center mt-10 text-center">
				<div>
					<div className="text-3xl mt-10 text-white ml-5">Create Assignment</div>
					<h3 className="text-center text-red-500" style={{ display: error ? "block" : "none" }}>
						{error}
					</h3>
				</div>
				<div className="flex justify-end mt-10">
					<input style={{ display: "none" }} ref={inputRef} type="file" accept=".pdf" onChange={handleFileChange} />
					<button
						type="button"
						className=" bg-gray-300 dark:bg-blue-500 font-medium rounded-lg px-16 md:px-24 pr-28 py-2 text-center hover:bg-gray-300/90 text-xl flex flex-nowrap"
						onClick={handleClick}
					>
						<FaFileUpload size={28} className="inline-block mr-4 mb-1 " />
						<div className="whitespace-nowrap">{file ? `${file.name}` : "Upload PDF"}</div>
					</button>
				</div>
			</div>
			<div className="flex justify-end mt-20 mr-7 text-2xl text-white hover:text-gray-200 hover:cursor-pointer" onClick={handleSubmit}>
				CREATE
			</div>
		</div>
	)
}
