import { useState } from "react";
import { MdOutlineVisibility } from "react-icons/md";

const TableMobileRow = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openHandler = () => {
    console.log("opened");
    setIsOpen(true);
  };
  const closeHandler = () => {
    console.log("closed");
    setIsOpen(false);
  };
  return (
    <div
      className={`flex rounded-lg shadow-lg bg-base-300 text-base-content relative ${
        isOpen ? "flex-col p-6 gap-6" : "items-center px-4 py-4 sm:px-6 gap-4"
      }`}
    >
      {isOpen && (
        <button
          onClick={closeHandler}
          className="btn btn-sm btn-circle absolute right-2 top-2"
        >
          ✕
        </button>
      )}
      <div
        className={`flex ${
          isOpen ? "flex-col space-y-2" : "items-center space-x-2"
        }`}
      >
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
          <h2 className="font-semibold text-primary-content">{data.profile}</h2>
        </div>
        <p>{data.client}</p>
      </div>
      <div className="flex-1">
        <div
          className={`flex flex-col ${isOpen ? "items-start" : "items-center"}`}
        >
          <span className="text-success font-semibold">{data.amount}</span>
          <span className="text-xs">{data.paymentDate}</span>
        </div>
      </div>
      {isOpen && (
        <div>
          <span>{data.paymentMethod}</span>
        </div>
      )}
      {isOpen && (
        <div className="flex flex-col space-y-1">
          <h3>Note:</h3>
          <span>{data.note}</span>
        </div>
      )}
      {!isOpen && (
        <MdOutlineVisibility
          className="ml-2 w-6 h-6 cursor-pointer"
          onClick={openHandler}
        />
      )}
    </div>
  );
};
export default TableMobileRow;
