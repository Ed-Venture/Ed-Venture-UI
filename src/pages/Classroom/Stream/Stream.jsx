import React from "react";
import book from "../../../assets/images/book.png";

export default function Stream() {
  
  return (
    <div className="container p-5">
      <div className="h-52 bg-cyan-400 my-10 rounded-md pl-10 pt-20">
        <div className="text-3xl">Class Name</div>
        <div className="text-xl">Section</div>
      </div>
      <div className="h-36 bg-slate-300 my-10 p-5 pl-6 pt-8 rounded-md flex">
        <div className="rounded-full bg-green-400 sm:w-[80px] h-[80px] w-[100px]  pl-8 pt-6 text-white text-2xl">
          P
        </div>
        <form className="w-full pl-7 rounded-sm">
            <input  className="w-full rounded-lg h-20 pl-5" type="text" placeholder="Announce something to class" />
        </form>
      </div>
      <div className="h-36 bg-slate-300 my-10 rounded-md flex pt-7 pl-6">
        <div className="bg-green-400 h-20 w-20 p-3 rounded-full">
          <img src={book} />
        </div>
        <div className="pt-3 pl-5">
          <div className="text-xl">Study Material</div>
          <div>12th December 2022</div>
        </div>
      </div>
    </div>
  );
}
