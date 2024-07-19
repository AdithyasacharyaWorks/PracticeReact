import Transaction_credit from "./Transaction_credit";

const Transaction = ({ list }) => {
  //sorting data with respect to the time transaction is done
  list.sort((ele1, ele2) => {
    if (ele1.createdAt > ele2.createdAt) {
      return -1;
    }
    if (ele1.createdAt < ele2.createdAt) {
      return 1;
    }
    return 0;
  });

  return (
    <div>
      <div className="flex justify-center items-center content-center  bg-neutral-200  pl-20 pr-20">
        <div className="">
          {list.map((item) => (
            <Transaction_credit
              key={item.id}
              amount={item.amount}
              note={item.note}
              type={item.type}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transaction;

// const fecth = useCallback(async () => {
//   await getDocs(collection(db, "trans3")).then((QuerySnapshot) => {
//     const newData = QuerySnapshot.docs.map((doc) => ({
//       ...doc.data().transaction,
//       id: doc.id,
//     }));
//     setDisplaydata(newData);
//   });
// }, []);

// const fetchData = async () => {
//   await getDocs(collection(db, "trans3")).then((QuerySnapshot) => {
//     const newData = QuerySnapshot.docs.map((doc) => ({
//       ...doc.data().transaction,
//       id: doc.id,
//     }));
//     setDisplaydata(newData);
//   });
// };
// <Balance arr={Displaydata} />;

// const fun = () => {
//   console.log("working on function just called");

//   list.map((ele) => {
//     if (ele.type === "credit") {
//       sum += Number(ele.amount);
//       setsumAmount(sum);
//     }
//     if (ele.type === "debit") {
//       sum -= Number(ele.amount);
//       setsumAmount(sum);
//     }
//   });
//   console.log(sum);
// };

// const fetchDatanew = async () => {
//   await getDocs(collection(db, "transaction")).then((QuerySnapshot) => {
//     const newData = QuerySnapshot.docs.map((doc) => ({
//       ...doc.data().transaction,
//       id: doc.id,
//     }));
//   });
// };
// console.log(mainArr);
