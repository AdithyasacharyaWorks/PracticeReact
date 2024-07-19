import React from "react";
import { IconContext } from "react-icons";
import { BsArrowUpSquareFill, BsArrowDownSquareFill } from "react-icons/bs";
import Transaction_debit from "./Transaction_debit";
function Transaction_credit({ amount, note, type }) {
  return (
    <div>
      {type === "credit" && (
        <div className="grid grid-cols-2  gap-10  items-center border  h-full mx-auto  shadow-md mt-2 pl-2 pr-2">
          <div className="grid grid-cols-2 items-center">
            <IconContext.Provider value={{ color: "green" }}>
              <div>
                <BsArrowUpSquareFill />
              </div>
            </IconContext.Provider>
            <div>RS:{amount}</div>
          </div>
          <div className=" grid grid-flow-row">{note}</div>
        </div>
      )}
      {type === "debit" && <Transaction_debit amount={amount} note={note} />}
    </div>
  );
}

export default Transaction_credit;
