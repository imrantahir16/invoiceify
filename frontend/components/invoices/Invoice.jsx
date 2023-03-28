import Link from "next/link";
import Logo from "../header/Logo";

const Invoice = ({ id }) => {
  return (
    <div className="border border-base-content mx-auto max-w-[21cm] min-h-[29.5cm] my-10 flex flex-col shadow-xl rounded-md">
      {/* company */}
      <div className="flex px-4 items-center justify-between bg-primary/60">
        <h2 className="text-5xl p-4 text-primary-content">Logo</h2>
        <div className="flex justify-between gap-6 p-4 text-left">
          <div className="flex gap-2 flex-col justify-end text-primary-content">
            <a href="tel:+4733378901">+47 333 78 901</a>
            <a href="email:email@example.com">email@example.com</a>
            <a href="">yourwebsite.com</a>
          </div>
          <address className="text-primary-content flex gap-2 flex-col items-end">
            <p>street</p>
            <p>city</p>
            <p>state,coutry</p>
            <p>ZIP CODE</p>
          </address>
        </div>
      </div>
      {/* customer */}
      <div className="flex items-center justify-between p-8">
        <div className="flex gap-8 text-left">
          <div>
            <p className="text-neutral-content/60 text-sm">Bill To:</p>
            <p>Client Name</p>
            <a href="tel:+923334555430">+923334555430</a>
            <p>street,city</p>
            <p>state,country</p>
          </div>
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-neutral-content/60 text-sm">Invoice #</p>
              <p>{id}</p>
            </div>
            <div>
              <p className="text-neutral-content/60 text-sm">Date of Issue:</p>
              <p>25/05/2023</p>
            </div>
          </div>
        </div>
        <div className="text-right">
          <p className="text-neutral-content/60 text-sm">Invoice Total</p>
          <p className="text-4xl text-primary">$ 4590.90</p>
        </div>
      </div>
      {/* description */}
      <div className="text-left m-8 ">
        <table className="w-full">
          {/* head */}
          <thead className="border-t-2 border-primary">
            <tr className="text-primary mt-4 flex items-center justify-center gap-4 ">
              <th className="flex-1">Description</th>
              <th className="text-right w-24">Cost</th>
              <th className="text-right w-24">Qty/Hr Rate</th>
              <th className="text-right w-24">Amount</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="flex items-center justify-center gap-4 py-1 border-b-[1px] border-base-content/20 text-sm">
              <td className="flex-1">
                <div>
                  <p className="font-semibold">Keyboard</p>
                  <p className="text-xs text-base-content/60">
                    Keyboard description
                  </p>
                </div>
              </td>
              <td className="text-right w-24">
                <span className="mr-1">$</span>150
              </td>
              <td className="text-right w-24">10</td>
              <td className="text-right w-24">
                <span className="mr-1">$</span>1500
              </td>
            </tr>
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
      {/* web ads */}
      <div className="flex items-center justify-center p-8 pt-4 justify-self-end">
        <div className="flex flex-col justify-center items-center">
          <div className="flex gap-4">
            <p>Powered By </p>
            <Logo small />
          </div>
          <p>This invoice was generated with the help of Invoiceify</p>
          <p>
            To learn more, and create your own free account visit
            <span className="ml-2">
              <Link
                className="text-primary hover:text-primary/70"
                href="/invoiceify"
              >
                invoiceify
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Invoice;
