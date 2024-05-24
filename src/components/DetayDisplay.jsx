import React from "react";
import { baseImgURL } from "../constants";

const DetayDisplay = ({ title, data }) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <div className="flex gap-5">
        {data?.map((item) =>
          item.logo_path ? (
            <div className="bg-white px-2 py-1 rounded-md">
              <img
                className="w-[100px] object-contain h-9"
                src={baseImgURL + item.logo_path}
                alt="logo"
              />
            </div>
          ) : (
            <span
              key={item.id}
              className="border py-1 px-2 rounded-md cursor-pointer"
            >
              {item.name}
            </span>
          )
        )}
      </div>
    </div>
  );
};

export default DetayDisplay;
