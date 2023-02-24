import React from 'react'
import student from "../../../assets/images/student.svg";

import { conduct_data } from "./quiz_data";

export default function Conducted() {
  return (
    <div className="mb-5">
        <div className="text-[#645CBB] text-xl">Conducted</div>
        <hr
          style={{
            color: "#645CBB",
            backgroundColor: "#645CBB",
            height: 3,
            borderColor: "#645CBB",
          }}
        />
        {conduct_data.map((info) => (
        <div className="bg-gray-100 h-fit rounded-md my-3 border-2 border-gray-100">
          <div className="pl-5 pt-3 text-xl">{info.Subject} Puzzle</div>
          <div className="bg-white h-2/6 mt-3 rounded-md flex justify-center flex-wrap pl-3 pt-5 pb-3 sm:pb-0">
            <div className="xl:basis-9/12 basis-6/12 pt-2 sm:pt-0">
              Topic: {info.Topic}
            </div>
            <div className="mr-2">
              <button
                type="button"
                class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
              >
                View Ranks
              </button>
            </div>
            <div>
              <button
                type="button"
                class="text-white bg-blue-400 dark:bg-blue-500 font-medium rounded-lg text-sm px-5 py-2 text-center"
                disabled
              >
                <img src={student} className="w-5 inline-block mr-2" />
                Participants: {info.Participated}/{info.TotalP}
              </button>
            </div>
          </div>
        </div>
        ))}
      </div>
  )
}
