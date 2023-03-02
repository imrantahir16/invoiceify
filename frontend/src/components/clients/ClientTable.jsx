// import { BsPerson, BsThreeDotsVertical } from "react-icons/bs";
import ClientRow from "./ClientRow";
const tableData = [
  {
    id: "1",
    name: "Hakim",
    email: "fazal@test.com",
    phone: "+923330022331",
  },
  {
    id: "2",
    name: "Rayan",
    email: "rayan@test.com",
    phone: "+923330022001",
  },
  {
    id: "3",
    name: "Inam",
    email: "inam@test.com",
    phone: "+923332255331",
  },
  {
    id: "4",
    name: "Huraim",
    email: "huraim@test.com",
    phone: "+923320923313",
  },
];
const ClientTable = () => {
  return (
    <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-rounded-lg scrollbar-thumb-base-content">
      <table className="table w-full ">
        {/* head */}
        <thead>
          <tr>
            <th className="hidden sm:block">ID</th>
            <th className="text-[0.65rem] sm:text-xs">Name</th>
            <th className="hidden sm:block">Email</th>
            <th className="text-[0.65rem] sm:text-xs">Phone</th>
            <th className="text-[0.65rem] sm:text-xs text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {tableData.map((row, index) => {
            return <ClientRow key={row.id} data={row} />;
          })}
        </tbody>
      </table>
    </div>
  );
};
export default ClientTable;
