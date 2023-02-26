import React from 'react'
import note from "../../../assets/images/note.png";
import {FiPaperclip} from 'react-icons/fi'
import {AssignData} from "./assignment_data";
import { AiOutlinePlus} from 'react-icons/ai';
import { useState } from "react"
import SubmitAssign from '../../../components/Modal/SubmitAssign';


export default function Assignment() {
  const [showAssign, setShowAssign] = useState(false)
  const handleSubmit = () => setShowAssign(true)
  return (
    <div className='container p-5'>
        <button type="button" class="text-white bg-[#645CBB] hover:bg-[#645CBB]/90 focus:ring-4 focus:outline-none focus:ring-bg-[#645CBB]/50 font-medium rounded-full text-sm px-7 py-2.5 text-center inline-flex items-center dark:focus:ring-[#645CBB]/55 mr-2 mb-2 ml-1 pl-5">
  <AiOutlinePlus className='mr-2'/>
  Create
</button>
        {AssignData.map((info) => (
        <div className="h-36 bg-pink-100 my-7 rounded-md flex pt-7 pl-6">
        <div className="bg-green-400 h-20 w-20 p-3 rounded-full">
          <img src={note} />
        </div>
        <div className="pt-3 pl-5 flex basis-11/12 mt-3">
            <div className='basis-4/6 text-2xl '>
                {info.desc}
            </div>
            <div className='basis-1/6' onClick={handleSubmit}>
                <FiPaperclip size={35} className="transition cursor-pointer duration-500 hover:scale-125"/>
            </div>
            {showAssign && <SubmitAssign showAssign={setShowAssign} />}
            <div className='text-slate-400 text-xl pt-2'>
                {info.date}
            </div>
        </div>
      </div>
       ))}
    </div>
  )
}
