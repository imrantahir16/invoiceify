const TableRow = ({ data }) => {
  return (
    <tr className="hover cursor-pointer">
      <th>
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
          <h3 className="text-primary-content">{data.profile}</h3>
        </div>
      </th>
      <td>{data.client}</td>
      <td>
        <span className="text-success">{data.amount}</span>
      </td>
      <td>{data.paymentDate}</td>
      <td>{data.paymentMethod}</td>
      <td>{data.note}</td>
    </tr>
  );
};
export default TableRow;
