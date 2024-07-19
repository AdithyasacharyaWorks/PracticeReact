import React from "react";
import { useState, useRef } from "react";
import { collection, addDoc } from "firebase/firestore";
import db from "../firebase";
function Home() {
  const [Transactions, setTrasactions] = useState({});
  const amountRef = useRef(null);
  const noteRef = useRef(null);
  const [anyClicked, setanyClicked] = useState(false);
  const [displayMessage, setdisplayMessage] = useState(false);

  const handleCreditClick = async () => {
    setTrasactions({
      amount: Number(amountRef.current.value),
      note: noteRef.current.value,
      type: "credit",
      createdAt: new Date(),
      sum: amountRef.current.value,
    });

    setanyClicked(true);
  };

  const handleButton = () => {
    if (post()) {
      setdisplayMessage(true);
      setanyClicked(false);
      amountRef.current.value = null;
      noteRef.current.value = null;
    } else {
      console.log("there is an error in posting");
    }
  };
  //posting the data to the firestore collection
  const post = async () => {
    try {
      const docRef = await addDoc(collection(db, "trans3"), {
        transaction: Transactions,
      });

      console.log(Transactions);
      console.log(`document written by id ${docRef.id}`);
    } catch (e) {
      console.error("Error adding document ", e);
    }
  };
  setTimeout(() => {
    setdisplayMessage(false);
  }, 7100);

  //handling the click on debit amount
  const handleDebitClick = async () => {
    setTrasactions({
      amount: Number(amountRef.current.value),
      note: noteRef.current.value,
      type: "debit",
      createdAt: new Date(),
      sum: amountRef.current.value,
    });
    setanyClicked(true);
  };

  return (
    <div>
      <div className="flex flex-col gap-5 justify-between items-center content-center pt-24">
        {!displayMessage && (
          <div className="text-2xl text-gray-500">
            Enter your Transaction Detail
          </div>
        )}

        {displayMessage && (
          <div className="text-2xl text-white bg-green-500 rounded-lg pl-2 pr-2">
            the transaction has been sucessfully noted
          </div>
        )}

        <div>
          <input
            ref={amountRef}
            className="text-xl border border-gray-500"
            type="number"
            min="1"
            placeholder=" Amount in RS"
          />
        </div>

        <div>
          <textarea
            ref={noteRef}
            placeholder="Transaction Note "
            className=" h-20 text-xl border border-gray-500 "
          ></textarea>
        </div>
        <div className="flex flex-row text-2xl text-white items-center gap-5">
          <div>
            {!anyClicked && (
              <button
                className="border bg-green-400 rounded-2xl pl-5 pr-5 pt-2 pb-2"
                onClick={handleCreditClick}
              >
                CREDIT
              </button>
            )}

            {anyClicked && (
              <div className="bg-orange-300 text-white rounded-2xl pl-7 pr-7 pt-2 pb-2">
                <button onClick={handleButton}>Confirm</button>
              </div>
            )}
          </div>
          <div>
            {!anyClicked && (
              <button
                className="border bg-red-500 rounded-2xl pl-7 pr-7 pt-2 pb-2"
                onClick={handleDebitClick}
              >
                DEBIT
              </button>
            )}
            {anyClicked && (
              <div className="bg-red-500 text-white rounded-2xl pl-7 pr-7 pt-2 pb-2">
                <button onClick={() => setanyClicked(false)}>Cancel</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
