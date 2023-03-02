const TableRow = ({ data }) => {
  return (
    <tr className="hover cursor-pointer text-[0.7rem] xs:text-xs sm:text-sm">
      {/* <th>
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
          <h3 className="text-primary-content">{data.profile}</h3>
        </div>
      </th> */}
      <td className="flex items-center flex-start gap-2 sm:gap-4">
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
          <h3 className="text-primary-content">{data.profile}</h3>
        </div>
        <span>{data.client}</span>
      </td>
      <td>
        <span className="text-success font-bold">{data.amount}</span>
      </td>
      <td>{data.paymentDate}</td>
      <td>{data.paymentMethod}</td>
      <td className="hidden sm:table-cell">{data?.note ? data.note : " "}</td>
    </tr>
  );
};
export default TableRow;
