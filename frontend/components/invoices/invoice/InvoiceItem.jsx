const InvoiceItem = ({ item }) => {
  return (
    <tr className="flex items-center justify-center gap-4 py-1 border-b-[1px] border-base-content/20 text-sm">
      <td className="flex-1">
        <div>
          {/* <p> */}
          <strong>{item.name}</strong>
          {/* </p> */}
          <p className="text-xs text-base-content/60">{item.description}</p>
        </div>
      </td>
      <td className="text-right w-24">
        <span className="mr-1">$</span>
        {item.cost}
      </td>
      <td className="text-right w-24">{item.quantity}</td>
      <td className="text-right w-24">
        <span className="mr-1">$</span>
        {item.cost * item.quantity}
      </td>
    </tr>
  );
};
export default InvoiceItem;
