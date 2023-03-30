import ClientDetails from "./invoice/ClientDetails";
import CompanyDetails from "./invoice/CompanyDetails";
import InvoiceItem from "./invoice/InvoiceItem";
import TableHeader from "./invoice/TableHeader";
import WebAds from "./invoice/WebAds";

const invoiceItems = [
  {
    name: "Keyboard",
    description: "This is keyboard description",
    cost: 150,
    quantity: 10,
  },
  {
    name: "Gaming Mouse",
    description: "This is gaming mouse description",
    cost: 120,
    quantity: 12,
  },
];
const Invoice = ({ id }) => {
  return (
    <div className="border border-base-content mx-auto max-w-[21cm] min-h-[29.5cm] my-10 flex flex-col shadow-xl rounded-md">
      <CompanyDetails />
      <ClientDetails id={id} />
      {/* description */}
      <div className="text-left m-8 ">
        <table className="w-full">
          <TableHeader />
          <tbody>
            {invoiceItems.map((item, index) => (
              <InvoiceItem key={index} item={item} />
            ))}
          </tbody>
        </table>
      </div>
      {/* Total */}
      <div className="flex items-end justify-between p-8 flex-1">
        <div className="text-left">
          <p className="">Note:</p>
          <p className="max-w-sm">This is computer generated invoice.</p>
        </div>
        <div className="flex gap-8">
          <div className="text-right">
            <p className="text-primary">Sub Total</p>
            <p className="text-primary">Tax</p>
            <p className="text-primary">Total</p>
            <p className="text-primary pt-4">Amount Due (USD)</p>
          </div>
          <div className="text-right">
            <p>$4000.00</p>
            <p>$590.90</p>
            <p>$4590.90</p>
            <p className="pt-4">$4500.90</p>
          </div>
        </div>
      </div>
      <div className="divider my-2"></div>
      <WebAds />
    </div>
  );
};
export default Invoice;
