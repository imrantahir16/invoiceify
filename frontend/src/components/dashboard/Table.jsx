import TableMobileRow from "./TableMobileRow";
import TableRow from "./TableRow";
const tableData = [
  {
    profile: "H",
    client: "Hakim",
    amount: 900,
    paymentDate: "25/02/2023",
    paymentMethod: "Cash",
    note: "This payment was for website development Sit laborum amet do ad fugiat velit ex quis ex Lorem et aliqua in occaecat. ",
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
    <>
      <div className="hidden md:block overflow-x-auto scrollbar-thin scrollbar-thumb-rounded-lg scrollbar-thumb-base-content ">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th className="">Name</th>
              {/* <th>Paid By</th> */}
              <th className="">Amount</th>
              <th className="">Payment Date</th>
              <th className="">Payment Method</th>
              <th className="">Note</th>
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
      <div className="grid md:hidden gap-4">
        {tableData.map((client, index) => {
          return <TableMobileRow key={client.id} client={client} />;
        })}
      </div>
    </>
  );
};
export default Table;
