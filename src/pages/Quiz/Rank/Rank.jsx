import React from "react";
import { rank_data } from "./rank_data";
import "../../Classroom/People/people.css"

export default function Rank() {
  return (
    <div className="container p-5">
      <div className="text-[#645CBB] text-xl">Ranks</div>
      <hr
        style={{
          color: "#645CBB",
          backgroundColor: "#645CBB",
          height: 3,
          borderColor: "#645CBB",
        }}
      />

      {rank_data.map((info) => (
        <div className="content">
          <div className="flex my-3">
            <div className="pr-5 basis-3/12 md:basis-auto">
              <img
                class="w-12 h-12 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                src="https:/flowbite.com/docs/images/people/profile-picture-5.jpg"
                alt="Bordered avatar"
              />
            </div>
            <div className="basis-11/12 pt-2 text-xl">Student Name</div>
            <div className="pt-2 text-md">10/10</div>
          </div>
          <hr
            style={{
              color: "#645CBB",
              backgroundColor: "#645CBB",
              height: 0.5,
              borderColor: "#645CBB",
            }}
          />
        </div>
      ))}
    </div>
  );
}
