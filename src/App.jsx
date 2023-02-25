import React, { useState } from "react"
import Class from "./pages/Classes/Class"
import Stream from "./pages/Classroom/Stream/Stream"
import People from "./pages/Classroom/People/People"
import Assignment from "./pages/Classroom/Assignment/Assignment"
import Quizzes from "./pages/Quiz/Quizzes/Quizzes"
import Rank from "./pages/Quiz/Rank/Rank"
import Score from "./pages/Quiz/Score/Score"
import Navbar from "./components/Navbar"
import { useLocation } from "react-router-dom"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

//Pages
import Sign_in from "./pages/Sign_in"
import Sign_up from "./pages/Sign_up"
import Sidebar from "./components/Sidebar"
import Modal from "./components/Modal"

function App() {
	const [showNews, setShowNews] = useState(false)
	const [showModal, setShowModal] = useState(false)

  return (
    <div className="App">
    <Router>
      <Navbar setShowNews={setShowNews} showNews={showNews} setShowModal={setShowModal} showModal={showModal}/>
      <Sidebar setShowNews={setShowNews} showNews={showNews} />
      <Modal setShowModal={setShowModal} showModal={showModal}/>
      <Routes>
          <Route path="/" element={<Sign_in/>}/>
          <Route path="/Sign_up" element={<Sign_up/>}/>
          <Route path="/Class" element={<Class/>}/>
          <Route path="/quiz" element={<Quizzes/>}/>
          <Route path="/quiz/:id" element={<Rank/>}/>
          <Route path="/score" element={<Score/>}/>

					<Route path="/Class/:id/stream" element={<Stream />} />
					<Route path="/Class/:id/assignment" element={<Assignment />} />
					<Route path="/Class/:id/people" element={<People />} />
				</Routes>
			</Router>
		</div>
		// <Class/>
	)
}

export default App
