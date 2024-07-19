import React, { useEffect, useCallback, useState, useMemo } from "react";
function Balance({ list }) {
  const [sumAmount, setsumAmount] = useState(0);
  useEffect(() => {
    val();
  }, [list]);

  const val = useCallback(() => {
    let sum = 0;
    console.log("i am called");
    list.map((ele) => {
      if (ele.type === "credit") {
        sum = sum + ele.amount;
      }
      if (ele.type === "debit") {
        sum = sum - ele.amount;
      }
    });

    setsumAmount(sum);
  }, [list]);

  return (
    <div className="grid grid-col-2 gap-5 pl-5">
      <div className="grid grid-row-2 text-xl text-green-500">
        <div>Balance Amount is</div>
        <div> {sumAmount} </div>
      </div>
    </div>
  );
}

export default Balance;
