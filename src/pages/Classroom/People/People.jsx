import { useEffect, useState } from "react"
import "./people.css"
import { fetchUser } from "../../../context/DataContext"

export const People = () => {
	const colors = ["text-purple-700", "text-green-500", "text-blue-900", "text-green-600", "text-amber-400", "text-cyan-400"]
	const [faculties, setFaculties] = useState([])
	const [peers, setPeers] = useState([])
	const [loading, setLoading] = useState(false)
	useEffect(() => {
		getData()
	}, [])

	const getData = async () => {
		setLoading(true)
		const class_ = JSON.parse(localStorage.getItem("class") || "{}")
		const students = []
		Object.values(class_.students).forEach(async id => {
			const user = await fetchUser(id)
			students.push(user.name)
			setPeers(students)
		})
		const faculties = []
		;[...class_.faculties, class_.createdBy].forEach(async id => {
			const user = await fetchUser(id)
			faculties.push(user.name)
			setFaculties(faculties)
		})
		setLoading(false)
	}
	if (loading) {
		return <></>
	}
	return (
		<div className="container p-12">
			<div className="mb-3">
				<div className="text-[#645CBB] text-xl">Faculties</div>
				<hr
					style={{
						color: "#645CBB",
						backgroundColor: "#645CBB",
						height: 3,
						borderColor: "#645CBB",
					}}
				/>
				{faculties?.map((name, i) => (
					<div className="content" key={i}>
						<div className="flex py-4">
							<div className="relative w-12 h-12 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
								<svg
									className={`absolute w-15 h-15 text-green-600 ${colors[Math.floor(Math.random() * colors.length)]} top-1.5`}
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
								</svg>
							</div>
							<div className="pl-7 pt-3 text-xl">{name}</div>
						</div>
						<hr
							style={{
								color: "#645CBB",
								backgroundColor: "#645CBB",
								height: 0.5,
								borderColor: "#645CBB",
							}}
						/>
					</div>
				))}
			</div>
			<div>
				<div className="text-[#645CBB] text-xl">Peers</div>
				<hr
					style={{
						color: "#645CBB",
						backgroundColor: "#645CBB",
						height: 2.8,
						borderColor: "#645CBB",
					}}
				/>
				{peers.map((name, i) => (
					<div className="content" key={i}>
						<div className="flex py-5">
							<div className="relative w-12 h-12 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
								<svg
									className={`absolute w-15 h-15 text-green-600 ${colors[Math.floor(Math.random() * colors.length)]} top-1.5`}
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
								</svg>
							</div>
							<div className="pl-7 pt-3 text-xl">{name}</div>
						</div>
						<hr
							style={{
								color: "#645CBB",
								backgroundColor: "#645CBB",
								height: 0.5,
								borderColor: "#645CBB",
							}}
						/>
					</div>
				))}
			</div>
		</div>
	)
}

export default People
