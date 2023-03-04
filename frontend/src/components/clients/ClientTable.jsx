// import { BsPerson, BsThreeDotsVertical } from "react-icons/bs";
import ClientMobileRow from "./ClientMobileRow";
import ClientRow from "./ClientRow";
const tableData = [
  {
    id: "1",
    name: "Hakim",
    email: "fazal@test.com",
    phone: "+923126104979",
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
    <>
      <div className="hidden md:block overflow-x-auto scrollbar-thin scrollbar-thumb-rounded-lg scrollbar-thumb-base-content">
        <table className="table w-full ">
          {/* head */}
          <thead>
            <tr>
              <th className="">ID</th>
              <th className="">Name</th>
              <th className="">Email</th>
              <th className="">Phone</th>
              <th className="">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {tableData.map((client, index) => {
              return <ClientRow key={client.id} client={client} />;
            })}
          </tbody>
        </table>
      </div>
      <div className="grid md:hidden gap-4">
        {tableData.map((client, index) => {
          return <ClientMobileRow key={client.id} client={client} />;
        })}
      </div>
    </>
  );
};
export default ClientTable;
