import { useEffect, useState } from "react"
import book from "../../../assets/images/book.png"
import { MdContentCopy } from "react-icons/md"
import { RxPaperPlane } from "react-icons/rx"
import { TfiAnnouncement } from "react-icons/tfi"
import { auth } from "../../../firebase"
import { createAnnouncement, fetchAnnouncements, fetchUserByEmail } from "../../../context/DataContext"

const Stream = () => {
	const [class_, setClass] = useState({})
	const [user, setUser] = useState({ name: "" })
	const [loading, setLoading] = useState(false)
	const [announcement, setAnnouncement] = useState("")
	const [announcements, setAnnouncements] = useState([])
	useEffect(() => {
		getData()
	}, [])

	const getData = async () => {
		setLoading(true)
		const class_ = JSON.parse(localStorage.getItem("class") || "{}")
		const user = await fetchUserByEmail(auth.currentUser?.email)
		const announcements = await fetchAnnouncements(class_.id)
		setClass(class_)
		setUser(user)
		setAnnouncements(announcements)
		setLoading(false)
	}

	const handleSubmit = async e => {
		e.preventDefault()
		if (!announcement.trim()) {
			return
		}
		try {
			const data = { userId: user.id, classId: class_.id, text: announcement, userName: user.name }
			await createAnnouncement(data)
			setAnnouncement("")
			window.location.reload()
		} catch (e) {
			console.log(e.message)
		}
	}

	return (
		<div className="container p-5">
			<div className={`h-52 ${class_.color} my-10 rounded-md pl-10 pt-20`}>
				<div className="text-3xl">{class_.name}</div>
				<div className="text-xl">{class_.section}</div>
				<div className="text-xl">
					<div className="flex gap-5">
						<p>
							ClassId: <span className="italic text-white">{class_.id}</span>
						</p>
						<MdContentCopy
							className="cursor-pointer hover:text-gray-300 hover:-translate-y-1 hover:scale-110 duration-300 transition ease-in-out delay-150"
							onClick={() => navigator.clipboard.writeText(class_.id)}
						/>
					</div>
				</div>
			</div>
			{loading ? (
				<></>
			) : (
				<div>
					<div className="h-36 bg-slate-300 my-10 p-5 pl-6 pt-8 rounded-md flex">
						<div className="rounded-full bg-green-400 sm:w-[80px] h-[80px] w-[100px] pl-8 pt-6 text-white text-2xl">{user.name[0]}</div>
						<form className="w-full pl-7 rounded-sm flex gap-5" onSubmit={handleSubmit}>
							<input className="w-full rounded-lg h-20 pl-5" type="text" placeholder="Announce something to class" onChange={e => setAnnouncement(e.target.value)} value={announcement} />
							<button
								disabled={!announcement || loading}
								type="submit"
								className="rounded-lg bg-slate-100 sm:w-[80px] h-[80px] w-[100px] text-black text-2xl flex justify-center cursor-pointer"
								style={{ alignItems: "center" }}
							>
								<RxPaperPlane />
							</button>
						</form>
					</div>
					{announcements.map(announcement => (
						<div key={announcement.id} className="bg-slate-300 my-10 rounded-md flex pt-7 pl-6 h-auto pb-7" style={{ alignItems: "center" }}>
							<div className="  bg-green-400  h-20 w-20 p-3 rounded-full sm:w-[80px] text-white text-2xl flex justify-center" style={{ alignItems: "center" }}>
								<TfiAnnouncement />
							</div>
							<div className="pt-3 pl-5">
								<p>
									<span className="text-xl font-bold">{announcement.userName}</span>
								</p>
								<div className="text-lg">{announcement.text}</div>
								<p>
									<span className="font-bold">Posted On: </span>
									{announcement.postedOn.toDate().toString()}
								</p>
							</div>
						</div>
					))}
					<div className="h-36 bg-slate-300 my-10 rounded-md flex pt-7 pl-6 group relative cursor-pointer">
						<div className="bg-green-400 h-20 w-20 p-3 rounded-full">
							<img src={book} />
						</div>
						<div className="pt-3 pl-5">
							<div className="text-xl">Study Material</div>
							<div>12th December 2022</div>
						</div>
						<div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
					</div>
				</div>
			)}
		</div>
	)
}

export default Stream
