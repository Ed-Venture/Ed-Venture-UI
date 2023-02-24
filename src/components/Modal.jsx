import React from 'react'

export default function Modal({ showModal, setShowModal }) {
  return (
    <div class={`container flex justify-center mx-auto z-50 ${
        showModal ? "block " : "hidden"
      }`}>
    <div class="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50 z-50">
        <div class="max-w-2xl p-6 bg-[#645CBB]">
            <div class="flex items-center justify-between">
                <h3 class="text-2xl text-white">Create Class</h3>
                <div onClick={() => setShowModal(!showModal)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 hover:text-white cursor-pointer" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        
                </svg>
                </div>

            </div>
            <div class="mt-4">
                <form action="">
                    <div class="mb-5">
                        <input type="text" name="name"
                            class="w-full p-2 border border-gray-300 rounded-l shadow focus:outline-none focus:ring-2 focus:ring-purple-600"
                            placeholder="Class Name"/>
                    </div>
                    <div class="mb-5">
                        <input type="text" name="email" class="w-full p-2 border border-gray-300 rounded-l shadow"
                            placeholder="Section"/>
                    </div>
                    <div class="mb-5">
                        <input type="text" name="email" class="w-full p-2 border border-gray-300 rounded-l shadow"
                            placeholder="Stream"/>
                    </div>
                    <div class="mb-5">
                        <input type="text" name="email" class="w-full p-2 border border-gray-300 rounded-l shadow"
                            placeholder="Subject"/>
                    </div>
                    <button type="submit"
                        class="block w-full p-3 font-bold text-white bg-blue-500 hover:bg-blue-400 rounded-l">Create</button>
                </form>
            </div>
        </div>
    </div>
</div>


  )
}
