import { useState } from "react";
import { AiOutlinePhone } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import { MdOutlineVisibility } from "react-icons/md";
import Modal from "../commonUI/Modal";

const TableMobileRow = ({ client }) => {
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
          <h2 className="font-semibold text-primary-content">
            {client.profile}
          </h2>
        </div>
        <p>{client.client}</p>
      </div>
      <div className="flex-1">
        <div
          className={`flex flex-col ${isOpen ? "items-start" : "items-center"}`}
        >
          <span className="text-success font-semibold">{client.amount}</span>
          <span className="text-xs">{client.paymentDate}</span>
        </div>
      </div>
      {isOpen && (
        <div>
          <span>{client.paymentMethod}</span>
        </div>
      )}
      {isOpen && (
        <div className="flex flex-col space-y-1">
          <h3>Note:</h3>
          <span>{client.note}</span>
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
