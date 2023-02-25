import React from 'react'

export default function Modal({ showModal, setShowModal }) {
  return (
    <div className={`container flex justify-center mx-auto z-50 ${
        showModal ? "block " : "hidden"
      }`}>
    <div className="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50 z-50">
        <div className="max-w-2xl p-6 bg-[#645CBB]">
            <div className="flex items-center justify-between">
                <h3 className="text-2xl text-white">Create class</h3>
                <div onClick={() => setShowModal(!showModal)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 hover:text-white cursor-pointer" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        
                </svg>
                </div>

            </div>
            <div className="mt-4">
                <form action="">
                    <div className="mb-5">
                        <input type="text" name="name"
                            className="w-full p-2 border border-gray-300 rounded-l shadow focus:outline-none focus:ring-2 focus:ring-purple-600"
                            placeholder="Class Name"/>
                    </div>
                    <div className="mb-5">
                        <input type="text" name="email" className="w-full p-2 border border-gray-300 rounded-l shadow"
                            placeholder="Section"/>
                    </div>
                    <div className="mb-5">
                        <input type="text" name="email" className="w-full p-2 border border-gray-300 rounded-l shadow"
                            placeholder="Stream"/>
                    </div>
                    <div className="mb-5">
                        <input type="text" name="email" className="w-full p-2 border border-gray-300 rounded-l shadow"
                            placeholder="Subject"/>
                    </div>
                    <button type="submit"
                        className="block w-full p-3 font-bold text-white bg-blue-500 hover:bg-blue-400 rounded-l">Create</button>
                </form>
            </div>
        </div>
    </div>
</div>


  )
}
