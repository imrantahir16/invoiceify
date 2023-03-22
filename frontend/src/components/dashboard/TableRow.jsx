const TableRow = ({ data }) => {
  return (
    <tr className="hover cursor-pointer">
      <td>
        <div className="flex space-x-2">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <h2 className="font-semibold text-primary-content">
              {data.profile}
            </h2>
          </div>
          <span>{data.client}</span>
        </div>
      </td>
      <td>
        <span className="text-success font-bold">{data.amount}</span>
      </td>
      <td>{data.paymentDate}</td>
      <td>{data.paymentMethod}</td>
      <td className="whitespace-normal">{data?.note ? data.note : " "}</td>
    </tr>
  );
};
export default TableRow;
