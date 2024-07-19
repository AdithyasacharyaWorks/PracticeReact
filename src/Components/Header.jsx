import { useEffect, useRef, useState } from "react";
import { SlWallet } from "react-icons/sl";
import { CgHomeAlt, CgList } from "react-icons/cg";
import { collection, getDocs } from "firebase/firestore";
import db from "../firebase";
//All other components (home ,balance and Transaction is being called here)
import Home from "../Components/Home";
import Balance from "../Components/Balance";
import Trasnsaction from "../Components/Transaction";
function Header() {
  const [home, sethome] = useState(true);
  const [balance, setbalance] = useState(false);
  const [transaction, settransaction] = useState(false);
  const [Displaydata, setDisplaydata] = useState([]);

  const homeRef = useRef(null);
  const BalanceRef = useRef(null);
  const TransactionRef = useRef(null);

  useEffect(() => {
    homeRef.current.style.color = "green";
  }, []);
  useEffect(() => {
    fecth();
  }, [balance]);
  //getting data from firebase
  const fecth = async () => {
    await getDocs(collection(db, "trans3")).then((QuerySnapshot) => {
      const newData = QuerySnapshot.docs.map((doc) => ({
        ...doc.data().transaction,
        id: doc.id,
      }));
      setDisplaydata(newData);
    });
  };

  const handleClickBalance = () => {
    BalanceRef.current.style.color = "green";
    homeRef.current.style.color = "black";
    TransactionRef.current.style.color = "black";
  };
  const handleClickTransaction = () => {
    BalanceRef.current.style.color = "black";
    homeRef.current.style.color = "black";
    TransactionRef.current.style.color = "green";
  };
  const handleClickHome = () => {
    BalanceRef.current.style.color = "black";
    homeRef.current.style.color = "green";
    TransactionRef.current.style.color = "black";
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex rounded-xl mt-5 pt-5 pl-5 pr-5 pb-8 mb-5 text-black flex-auto gap-5 mx-auto justify-center content-center items-cente shadow-xl ">
        <div>
          <span className="text-2xl">Track Your Transaction</span>
        </div>
      </div>
      <div className="grid grid-cols-3   items-center content-center mx-auto text-2xl">
        <div>
          <button
            className="grid grid-row-2 justify-items-center"
            ref={homeRef}
            onClick={() => {
              sethome(true);
              setbalance(false);
              settransaction(false);
              handleClickHome();
            }}
          >
            <div>Home</div>
            <CgHomeAlt />
          </button>
        </div>
        <div>
          <button
            className="grid grid-row-2 justify-items-center"
            ref={BalanceRef}
            onClick={() => {
              setbalance(true);
              sethome(false);
              settransaction(false);
              handleClickBalance();
            }}
          >
            <div>Balance</div>
            <SlWallet />
          </button>
        </div>
        <div>
          <button
            className="grid grid-row-2 justify-items-center"
            ref={TransactionRef}
            onClick={() => {
              settransaction(true);
              sethome(false);
              setbalance(false);
              handleClickTransaction();
            }}
          >
            <div>Transactions</div>

            <CgList />
          </button>
        </div>
      </div>
      <div>
        {home && !balance && !transaction && <Home />}
        {balance && !home && !transaction && <Balance list={Displaydata} />}
        {transaction && !home && !balance && (
          <Trasnsaction list={Displaydata} />
        )}
      </div>
    </div>
  );
}

export default Header;
