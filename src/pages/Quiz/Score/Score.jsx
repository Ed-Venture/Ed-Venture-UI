import React from 'react'
import medal from "../../../assets/images/medal.svg"
import { score_Data } from './score_Data'

export default function Score() {
  return (
    <div className='container p-5'>
      {score_Data.map((info) => (
    <div className="bg-gray-100 h-fit rounded-md my-3 border-2 border-gray-100">
          <div className="pl-5 pt-3 text-xl">{info.Subject}</div>
          <div className="bg-white h-2/6 mt-3 rounded-md flex  flex-wrap pl-10 pt-5 pb-3 sm:pb-0">
            <div className="lg:basis-10/12 basis-7/12 pt-2 sm:pt-0">
              Score: {info.Score}/{info.TotalS}
            </div>
            <div className='pb-3'>
              <button
                type="button"
                class="text-white bg-blue-400 dark:bg-blue-500 font-medium rounded-lg text-sm px-5 py-2 text-center"
                disabled
              >
                <img src={medal} className="w-5 inline-block mr-2" />
                Rank: {info.Rank}
              </button>
            </div>
          </div>
          </div>
      ))}
          </div>
  )
}
