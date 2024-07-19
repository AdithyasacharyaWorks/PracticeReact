import React, { useRef, useState } from "react";
import { BsArrowDownSquareFill } from "react-icons/bs";
import { IconContext } from "react-icons";
function Transaction_debit({ amount, note }) {
  const displayRef = useRef(null);

  return (
    <div>
      <div className="grid grid-cols-2  gap-10 justify-center items-center border  h-full mx-auto shadow-md mt-2 pl-2 pr-2 ">
        <div className="grid grid-cols-2 items-center w-full ">
          <IconContext.Provider value={{ color: "red" }}>
            <div className="">
              <BsArrowDownSquareFill />
            </div>
          </IconContext.Provider>

          <div>RS:{amount}</div>
        </div>

        <div ref={displayRef} className=" grid grid-flow-row   ">
          {note}
        </div>
      </div>
    </div>
  );
}

export default Transaction_debit;
