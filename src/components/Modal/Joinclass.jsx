import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { fetchUserByEmail, joinClass } from "../../context/DataContext"
import { auth } from "../../firebase"

const Joinclass = prop => {
	const [data, setData] = useState({ classCode: "", rollNo: "" })
	const [error, setError] = useState("")
	const handleCancel = () => prop.popp(prev => !prev)
	const navigate = useNavigate()
	const handleChange = e => {
		const { name, value } = e.target
		setData({ ...data, [name]: value })
	}
	const handleSubmit = async e => {
		e.preventDefault()
		setError()
		const { id: userId } = await fetchUserByEmail(auth.currentUser?.email)
		try {
			const { classCode, rollNo } = data
			const result = await joinClass(userId, classCode, rollNo)
			if (!result) {
				throw { message: "Error 404: Class Code not found" }
			}
			if (result === -1) {
				throw { message: "Error 409: Error User Already Exists with same roll no" }
			}
			handleCancel()
			navigate("/")
		} catch (e) {
			setError(`${e.message}`)
		}
	}

	return (
		<div className="createclasspop absolute top-[6em] left-[5vw] flex flex-col h-[350px] w-[90vw] z-[1000] bg-[#645CBC] box-content border rounded-[10px] min-[895px]:w-[50vw] min-[895px]:left-[25vw]">
			<div className="createclasspop-header h-[15%] w-[100%] box-border flex justify-center items-center text-[1.5rem] font-bold mt-10">Join Class</div>
			<h3 className="text-center text-red-500" style={{ display: error ? "block" : "none" }}>
				{error}
			</h3>
			<form className="flex flex-col items-center  justify-evenly h-[70%] w-[100%]" onSubmit={handleSubmit}>
				<input
					required
					type="text"
					className="w-[80%] h-[10%] p-4 placeholder:text-[rgba(0, 0, 0, 0.5)] text-[1.2rem] font-[500]  border border-[black] border-solid box-border text-slate-900"
					placeholder="Enter Class Code"
					name="classCode"
					value={data.value}
					onChange={handleChange}
				/>
				<input
					required
					type="number"
					className="w-[80%] h-[10%] p-4 placeholder:text-[rgba(0, 0, 0, 0.5)] text-[1.2rem] font-[500]  border border-[black] border-solid box-border text-slate-900"
					placeholder="Enter Roll Number"
					name="rollNo"
					value={data.rollNo}
					onChange={handleChange}
				/>
				<div className="h-[8%] w-full flex justify-end items-end pr-[5em]">
					<button className="mr-[2em] text-[1.5rem] text-[#C9C9C9] hover:text-[#C9C9C9]/90 font-[700]" onClick={handleCancel}>
						Cancel
					</button>
					<button className="text-[1.5rem] text-[#C9C9C9] hover:text-[#C9C9C9]/90 font-[700]" type="submit">
						Join
					</button>
				</div>
			</form>
		</div>
	)
}
export default Joinclass
