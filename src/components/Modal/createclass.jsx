import { useState } from "react"
import { createClass, fetchUserByEmail } from "../../context/DataContext"
import { auth } from "../../firebase"

const CreateClass = prop => {
	const [class_, setClass] = useState({
		name: "",
		section: "",
		subject: "",
	})
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState("")
	const handleCancel = () => {
		prop.pop(prev => !prev)
	}
	const handleChange = e => {
		const { name, value } = e.target
		setClass({ ...class_, [name]: value })
	}
	const handleSubmit = async e => {
		e.preventDefault()
		const { name, section, subject } = class_
		try {
			setLoading(true)
			const data = {
				createdBy: (await fetchUserByEmail(auth.currentUser?.email)).id,
				name,
				section,
				subject,
			}
			await createClass(data)
			handleCancel()
			navigate("/")
		} catch (e) {
			setError(e.messaage)
		}
		setLoading(false)
	}
	return (
		<div className="createclasspop absolute top-[6em] left-[5vw] flex flex-col h-[420px] w-[90vw] z-[1000] bg-[#645CBC] box-content border rounded-[10px] min-[895px]:w-[50vw] min-[895px]:left-[25vw]
		pt-5">
			<div className="createclasspop-header h-[15%] w-[100%] box-border flex justify-center items-center text-[1.5rem] font-bold">Create Class</div>
			<h3 className="text-center text-red-500" style={{ display: error ? "block" : "none" }}>
				{error}
			</h3>
			<form className="flex flex-col items-center  justify-evenly h-[70%] w-[100%]" onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Class Name"
					required
					name="name"
					className="w-[80%] h-[10%] p-4 placeholder:text-[rgba(0, 0, 0, 0.5)] text-[1.2rem] font-[500]  border border-[black] border-solid box-border text-black"
					value={class_.name}
					onChange={handleChange}
				/>
				<input
					type="text"
					placeholder="Section"
					required
					name="section"
					className="w-[80%] h-[10%] p-4 placeholder:text-[rgba(0, 0, 0, 0.5)] text-[1.2rem] font-[500] border border-[black] border-solid box-border text-black"
					value={class_.section}
					onChange={handleChange}
				/>
				<input
					type="text"
					placeholder="Subject"
					required
					name="subject"
					className="w-[80%] h-[10%] p-4 placeholder:text-[rgba(0, 0, 0, 0.5)] text-[1.2rem] font-[500] border border-[black] border-solid box-border text-black"
					value={class_.subject}
					onChange={handleChange}
				/>
				<div className="h-[8%] flex justify-end items-end">
					<button disabled={loading} type="submit" className="mr-[2em] text-[1.5rem] text-[#C9C9C9] font-[700]" onClick={handleCancel}>
						Cancel
					</button>
					<button disabled={loading} className="text-[1.5rem] text-[#C9C9C9] font-[700]">
						Create
					</button>
				</div>
			</form>
		</div>
	)
}
export default CreateClass
