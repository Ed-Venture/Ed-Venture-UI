import React from 'react'
import note from "../../../assets/images/note.png";
import paperclip from "../../../assets/images/paperclip.png"
import {AssignData} from "./assignment_data";


export default function Assignment() {
  return (
    <div className='container p-5'>
        {AssignData.map((info) => (
        <div className="h-36 bg-pink-100 my-7 rounded-md flex pt-7 pl-6">
        <div className="bg-green-400 h-20 w-20 p-3 rounded-full">
          <img src={note} />
        </div>
        <div className="pt-3 pl-5 flex basis-11/12 mt-3">
            <div className='basis-4/6 text-2xl '>
                {info.desc}
            </div>
            <div className='basis-1/6'>
                <img src={paperclip} />
            </div>
            <div className='text-slate-400 text-xl pt-2'>
                {info.date}
            </div>
        </div>
      </div>
       ))}
    </div>
  )
}
