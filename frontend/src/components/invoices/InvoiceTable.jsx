import InvoiceRow from "./InvoiceRow";

const invoiceData = [
  {
    id: "1",
    client: "Hakim",
    amount: 1000,
    dueDate: "6 Days ago",
    status: "done",
  },
  {
    id: "2",
    client: "Sattar",
    amount: 1600,
    dueDate: "7 Days ago",
    status: "done",
  },
  {
    id: "3",
    client: "Naeem",
    amount: 1300,
    dueDate: "9 Days ago",
    status: "partial",
  },
  {
    id: "4",
    client: "Zahid",
    amount: 3000,
    dueDate: "2 Days ago",
    status: "unpaid",
  },
];
const InvoiceTable = () => {
  return (
    <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-rounded-lg scrollbar-thumb-base-content">
      <table className="table w-full ">
        {/* head */}
        <thead>
          <tr>
            <th className="hidden sm:block">#No.</th>
            <th className="text-[0.65rem] sm:text-xs">Client</th>
            <th className="hidden sm:block">Amount</th>
            <th className="text-[0.65rem] sm:text-xs">Due Date</th>
            <th className="text-[0.65rem] sm:text-xs text-center">Status</th>
            <th className="text-[0.65rem] sm:text-xs text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {invoiceData.map((row, index) => {
            return <InvoiceRow key={row.id} data={row} />;
          })}
        </tbody>
      </table>
    </div>
  );
};
export default InvoiceTable;
