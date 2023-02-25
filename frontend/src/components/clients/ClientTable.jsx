import { BsPerson } from "react-icons/bs";
import ClientRow from "./ClientRow";
const tableData = [
  {
    id: "1",
    name: "Hakim",
    email: "fazal@test.com",
    phone: "+923330022331",
  },
];
const ClientTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {tableData.map((row, index) => {
            return <ClientRow key={index} data={row} />;
          })}
        </tbody>
      </table>
    </div>
  );
};
export default ClientTable;
