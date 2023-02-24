import React from "react";
import { participate_data } from "./quiz_data";
import tick from "../../../assets/images/tick.svg";

export default function Participated() {
  return (
    <div>
      <div className="text-[#645CBB] text-xl">Participated</div>
      <hr
        style={{
          color: "#645CBB",
          backgroundColor: "#645CBB",
          height: 3,
          borderColor: "#645CBB",
        }}
      />
      {participate_data.map((info) => (
        <div className="bg-gray-100 h-fit rounded-md my-3 border-2 border-gray-100">
          <div className="pl-5 pt-3 text-xl">{info.Subject} Puzzle</div>
          <div className="bg-white h-2/6 mt-3 rounded-md flex justify-center  flex-wrap py-5 pl-3 pt-5 pb-5 ">
            <div className="lg:basis-10/12 basis-6/12 pt-2">
              Topic: {info.Topic}
            </div>
            <div>
              <button
                type="button"
                class="text-white bg-green-500 dark:bg-blue-500 font-medium rounded-lg text-sm px-5 py-2 text-center"
                disabled
              >
                <img src={tick} className="w-5 inline-block mr-2" />
                Score: {info.Score}/{info.TotalS}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
