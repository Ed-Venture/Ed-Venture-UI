import React from "react";
import { faculty_data, peers_data } from "./people_data";
import "./people.css";
export default function People() {
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
				{faculty_data.map((info, i) => (
					<div className="content" key={i}>
						<div className="flex py-4">
							<div className="relative w-12 h-12 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
								<svg className="absolute w-15 h-15 text-gray-400 top-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
								</svg>
							</div>
							<div className="pl-7 pt-3 text-xl">{info.name}</div>
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
				{peers_data.map((info, i) => (
					<div className="content" key={i}>
						<div className="flex py-5">
							<div className="relative w-12 h-12 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
								<svg className="absolute w-15 h-15 text-gray-400 top-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
								</svg>
							</div>
							<div className="pl-7 pt-3 text-xl">{info.name}</div>
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
