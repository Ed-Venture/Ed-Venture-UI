import React from "react"
import { ClassData } from "./ClassData"
import { NavLink } from "react-router-dom"

export default function Class() {
	return (
		<div className="container flex flex-wrap">
			{ClassData.map(class_ => (
				<NavLink key={class_.id} to="/Class/:id/stream" style={{ textDecoration: "none" }}>
					<div className="w-96 h-32 bg-gray-300 m-3 my-24 rounded-md relative hover:shadow-2xl">
						<div className="p-3">
							<div className="text-xl">{class_.classdesc}</div>
							<div>{class_.sec}</div>
						</div>
						<div className="rounded-full bg-green-400 w-16 h-16 absolute left-72 top-12 pl-7 pt-5 text-white">P</div>
						<div className={`h-48 mt-2 ${class_.color} rounded-md`} />
					</div>
				</NavLink>
			))}
		</div>
	)
}
