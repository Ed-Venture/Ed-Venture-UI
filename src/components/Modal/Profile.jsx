import React from "react";
import {FiLogOut} from "react-icons/fi"
export default function Profile({showProfile}) {
    const handleCancel = () => showProfile(prev => !prev)
  return (
    <div className="createclasspop absolute top-[6em] left-[5vw] flex flex-col h-[425px] w-[90vw] z-[1000] bg-[#645CBC] box-content border rounded-[10px] min-[895px]:w-[36vw] min-[895px]:left-[30vw]">
      <button
        className="flex text-4xl text-white items-center cursor-pointer absolute right-10 top-6 z-50"
        onClick={handleCancel}
      >
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
      <div className="flex-col content-center items-center self-center">
        <div className="text-3xl mt-10 text-white font-outline-08 ">
          My Profile
        </div>

        <img
          className="w-24 h-24 rounded-full mt-4 ml-4 ring-2 ring-gray-300 dark:ring-gray-500"
          src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
          alt="Rounded avatar"
        />
        
      </div>
      <div className="flex justify-center mt-7">
          <div className="mt-1 mr-5 text-white">Name:</div>
          <div>
            <button
              type="button"
              class=" bg-gray-300 dark:bg-blue-500 font-medium rounded-full text-sm px-16 py-2 text-center border-2"
              disabled
            >
              Shreya Jash
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <div className="mt-1 mr-5 text-white">Email:</div>
          <div>
            <button
              type="button"
              class=" bg-gray-300 dark:bg-blue-500 font-medium rounded-full text-sm px-[3.1rem] py-2 text-center ml-[3px] border-2"
              disabled
            >
              abc@gmail.com
            </button>
          </div>
        </div>
        <div className="flex justify-end mt-10 mr-7">
        <button
              type="button"
              class=" bg-gray-300 dark:bg-blue-500 font-medium rounded-lg text-sm px-5 py-2 text-center ml-[3px] hover:bg-gray-300/90"
            >
                <FiLogOut className="inline-block mr-3 mb-1"/>
            LOGOUT
            </button>
        </div>
    </div>
  );
}
