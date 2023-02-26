import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { fetchClassesByUser, fetchClassesEnrolled, fetchUserByEmail } from "../../context/DataContext"
import { auth } from "../../firebase"
const Class = () => {
	const [classes, setClasses] = useState([])
	const [fetching, setFetching] = useState(false)
	const colors = ["bg-purple-700", "bg-red-700", "bg-green-500", "bg-blue-900", "bg-green-600", "bg-amber-400"]
	useEffect(() => () => getClasses(), [])
	const navigate = useNavigate()
	const getClasses = async () => {
		setFetching(true)
		const { id: userId, name } = await fetchUserByEmail(auth.currentUser?.email)
		const classesByUser = await fetchClassesByUser(userId)
		const classesEnrolled = await fetchClassesEnrolled(userId)
		const classes = []
		classesByUser.forEach(async class_ => {
			const randomColor = colors[Math.floor(Math.random() * colors.length)]
			classes.push({
				...class_,
				userName: name,
				color: randomColor,
			})
		})
		classesEnrolled.forEach(async class_ => {
			const randomColor = colors[Math.floor(Math.random() * colors.length)]
			classes.push({
				...class_,
				userName: name,
				color: randomColor,
			})
		})
		setClasses(classes)
		setFetching(false)
	}
	const handleClick = class_ => {
		localStorage.setItem("class", JSON.stringify(class_))
		navigate(`/classes/${class_.id}/stream`)
	}
	return (
		<div className="container flex flex-wrap max-w-full">
			{classes.length ? (
				classes.map(class_ => (
					<div className="w-96 h-32 bg-gray-300 m-3 my-24 rounded-md relative hover:shadow-2xl cursor-pointer" onClick={() => handleClick(class_)} key={class_.id}>
						<div style={{ display: "flex", justifyContent:"space-between" }}>
							<div className="p-3">
								<div className="text-xl">{class_.name}</div>
								<div>{class_.section}</div>
							</div>
							<div className="p-3 text-2xl pr-10">
								⚙️
							</div>
						</div>
						<div className="rounded-full bg-green-400 w-16 h-16 absolute left-72 top-12 pl-7 pt-5 text-white">{class_?.userName[0]}</div>
						<div className={`h-48 mt-2 ${class_.color} rounded-md hover:shadow-2xl`} />
					</div>
				))
			) : fetching ? (
				<div className=" pl-7 pt-5 w-100 text-black">Fetching Your Classes...</div>
			) : (
				<div className=" pl-7 pt-5 w-100 text-black">No classes available</div>
			)}
		</div>
	)
}

export default Class
