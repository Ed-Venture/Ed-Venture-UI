import React from "react";
import { AiOutlinePlus } from "react-icons/Ai";

export default function SubmitAssign({showAssign}) {
  const handleCancel = () => showAssign(prev => !prev)
  return (
    <div className="createclasspop absolute top-[6em] left-[5vw] flex flex-col h-[360px] w-[90vw] z-[1000] bg-[#645CBC] box-content border rounded-[10px] min-[895px]:w-[36vw] min-[895px]:left-[30vw] p-5">
      <button className="flex text-4xl text-white items-center cursor-pointer absolute right-10 top-6 z-50" onClick={handleCancel}>
        <svg
          className="h-9 w-9 text-white hover:scale-125 transition duration-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
      <div className="flex-col content-center items-center self-center mt-10">
        <div className="text-3xl mt-10 text-white ml-8">
          Upload Assignment</div>
        <div className="flex justify-end mt-10">
          <button
            type="button"
            class=" bg-gray-300 dark:bg-blue-500 font-medium rounded-lg text-sm px-24 pr-28 py-2 text-center hover:bg-gray-300/90 text-xl"
          >
            <AiOutlinePlus size={16} className="inline-block mr-4 mb-1 " />
            Add PDF
          </button>
        </div>
      </div>
      <div className="flex justify-end mt-20 mr-7 text-2xl text-white hover:text-gray-200 hover:cursor-pointer">Mark Done</div>
    </div>
  );
}
