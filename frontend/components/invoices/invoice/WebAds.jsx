import Link from "next/link";
import Logo from "../../header/Logo";

const WebAds = () => {
  return (
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
  );
};
export default WebAds;
