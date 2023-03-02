import { BsPerson } from "react-icons/bs";
import TableRow from "./TableRow";
const tableData = [
  {
    profile: "H",
    client: "Hakim",
    amount: 900,
    paymentDate: "25/02/2023",
    paymentMethod: "Cash",
    note: "",
  },
  {
    profile: "A",
    client: "Afaq",
    amount: 500,
    paymentDate: "24/02/2023",
    paymentMethod: "Bank Transfer",
    note: "",
  },
  {
    profile: "J",
    client: "Jerry",
    amount: 800,
    paymentDate: "25/02/2023",
    paymentMethod: "Cash",
    note: "",
  },
];
const Table = () => {
  return (
    <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-rounded-lg scrollbar-thumb-base-content ">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th className="text-[0.65rem] sm:text-xs">Name</th>
            {/* <th>Paid By</th> */}
            <th className="text-[0.65rem] sm:text-xs">Amount</th>
            <th className="text-[0.65rem] sm:text-xs">Payment Date</th>
            <th className="text-[0.65rem] sm:text-xs">Payment Method</th>
            <th className="hidden sm:block">Note</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {tableData.map((row, index) => {
            return <TableRow key={index} data={row} />;
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
