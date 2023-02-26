import React, { useState,useEffect} from "react"
import Class from "./pages/Classes/Class"
import Stream from "./pages/Classroom/Stream/Stream"
import People from "./pages/Classroom/People/People"
import Assignment from "./pages/Classroom/Assignment/Assignment"
import Quizzes from "./pages/Quiz/Quizzes/Quizzes"
import Rank from "./pages/Quiz/Rank/Rank"
import Score from "./pages/Quiz/Score/Score"
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import RiseLoader from "react-spinners/RiseLoader"


//Pages
import Sign_in from "./pages/Sign_in"
import Sign_up from "./pages/Sign_up"
import Sidebar from "./components/Sidebar"
// import Modal from "./components/Modal"
import AuthProvider from "./context/AuthContext"
import AuthRoute from "./routes/AuthRoute"
import PrivateRoute from "./routes/PrivateRoute"

import "./App.css"

function App() {
	const [loading, setLoading] = useState(false);
	const [showNews, setShowNews] = useState(false)
	const [showModal, setShowModal] = useState(false)

	useEffect(()=> {
		setLoading(true)
		setTimeout(() =>{
			setLoading(false)
		},2000)
	},[])

	return (
		<AuthProvider>
			<div className="App">
				{
					loading ?

					<div className="loader"> 
						<RiseLoader
							color={'#645CBC'}
							loading={loading}
							size={30}
							aria-label="Loading Spinner"
							data-testid="loader"
						/>
				</div>
					

					:
				
				<Router>
					<Navbar setShowNews={setShowNews} showNews={showNews} setShowModal={setShowModal} showModal={showModal} />
					<Sidebar setShowNews={setShowNews} showNews={showNews} />
					{/* <Modal setShowModal={setShowModal} showModal={showModal} /> */}
					<Routes>
						<Route path="/" element={<Navigate to="/logIn" />} />
						<Route path="/logIn" element={<AuthRoute component={<Sign_in />} />} />
						<Route path="/signUp" element={<AuthRoute component={<Sign_up />} />} />
						<Route path="/classes" element={<PrivateRoute component={<Class />} />} />
						<Route path="/quizes" element={<PrivateRoute component={<Quizzes />} />} />

						<Route path="/quiz/:id" element={<Rank />} />
						<Route path="/ranks" element={<Score />} />

						<Route path="/classes/:id/stream" element={<Stream />} />
						<Route path="/classes/:id/assignment" element={<Assignment />} />
						<Route path="/classes/:id/people" element={<People />} />
					</Routes>
				</Router>
				}
			</div>
		</AuthProvider>
	)
}

export default App
