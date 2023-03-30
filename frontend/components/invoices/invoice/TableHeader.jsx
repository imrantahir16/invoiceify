const TableHeader = () => {
  return (
    <thead className="border-t-2 border-primary">
      <tr className="text-primary mt-4 flex items-center justify-center gap-4 ">
        <th className="flex-1">Description</th>
        <th className="text-right w-24">Cost</th>
        <th className="text-right w-24">Qty/Hr Rate</th>
        <th className="text-right w-24">Amount</th>
      </tr>
    </thead>
  );
};
export default TableHeader;
