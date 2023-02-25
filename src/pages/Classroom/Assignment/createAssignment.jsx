const createAssignment=(prop)=>{
    const handleCancel=()=>{
        prop.popp(prev=>!prev)
    }
    return(
        <div className="createclasspop absolute top-[6em] left-[5vw] flex flex-col h-[547px] w-[90vw] z-[1000] bg-[#645CBC] box-content border rounded-[10px] min-[895px]:w-[50vw] min-[895px]:left-[25vw]">
       <div className="createclasspop-header h-[15%] w-[100%] box-border flex justify-center items-center text-[1.5rem] font-bold">Create Class</div>
       <form className="flex flex-col items-center  justify-evenly h-[70%] w-[100%]">
        <input type="text"
        className="w-[80%] h-[10%] text-slate-900 p-4 placeholder:text-[rgba(0, 0, 0, 0.5)] text-[1.2rem] font-[500]  border border-[black] border-solid box-border "
        placeholder="Class Name"
        />
        <input type="text"
        className="w-[80%] h-[10%] text-slate-900  p-4 placeholder:text-[rgba(0, 0, 0, 0.5)] text-[1.2rem] font-[500] border border-[black] border-solid box-border"
        placeholder="Section"
        />
        <input type="text"
        className="w-[80%] h-[10%] text-slate-900 p-4 placeholder:text-[rgba(0, 0, 0, 0.5)] text-[1.2rem] font-[500] border border-[black] border-solid box-border"
        placeholder="Stream"
        />
        <input type="text"
        className="w-[80%] h-[10%] text-slate-900 p-4 placeholder:text-[rgba(0, 0, 0, 0.5)] text-[1.2rem] font-[500] border border-[black] border-solid box-border"
        placeholder="Subject"
        />
       </form>
       <div className="h-[8%] flex justify-end items-end pr-[2em]">
       <button className="mr-[2em] text-[1.5rem] text-[#C9C9C9] font-[700]" onClick={handleCancel}>Cancel</button>
       <button className="text-[1.5rem] text-[#C9C9C9] font-[700]">Create</button>
       </div>
      </div>
    )
}
export default createAssignment