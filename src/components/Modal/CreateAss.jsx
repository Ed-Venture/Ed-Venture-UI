import React, {useRef} from "react";
import { FaFileUpload } from "react-icons/fa";

export default function CreateAss({createAssign}) {
    const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = event => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }
    event.target.value = null;
  };
  const handleCancel = () => createAssign(prev => !prev)
  return (
    <div className="createclasspop absolute top-[6em] left-[5vw] flex flex-col h-[360px] w-72 z-[1000] bg-[#645CBC] box-content border rounded-[10px] min-[895px]:w-[36vw] min-[895px]:left-[30vw] p-5">
      <button className="flex text-4xl text-white items-center cursor-pointer absolute right-6 top-6 z-50" onClick={handleCancel}>
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
        <div className="text-3xl mt-10 text-white ml-5">
         Create Assignment</div>
        <div className="flex justify-end mt-10">
        <input
        style={{display: 'none'}}
        ref={inputRef}
        type="file"
        accept=".pdf"
        onChange={handleFileChange}
      />
          <button
            type="button"
            className=" bg-gray-300 dark:bg-blue-500 font-medium rounded-lg text-sm px-16 md:px-24 flex flex-nowrap pr-28 py-2 text-center hover:bg-gray-300/90 text-xl" onClick={handleClick}
          >
            <FaFileUpload size={28} className="inline-block mr-4 mb-1 " />
            <div className="whitespace-nowrap">Upload PDF</div>
          </button>
        </div>
      </div>
      <div className="flex justify-end mt-20 mr-7 text-2xl text-white hover:text-gray-200 hover:cursor-pointer">Upload</div>
    </div>
  );
}