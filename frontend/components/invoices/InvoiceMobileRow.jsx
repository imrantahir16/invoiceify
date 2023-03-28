import { useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { BsCircleHalf, BsTrash } from "react-icons/bs";
import { IoMdClose, IoMdDoneAll } from "react-icons/io";
import { MdOutlineVisibility } from "react-icons/md";
import Modal from "../commonUI/Modal";

const InvoiceMobileRow = ({ invoice }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const deleteToggleHandler = () => setIsDeleteModalOpen((prev) => !prev);

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
        isOpen ? "flex-col p-6 gap-6" : "items-center p-4 gap-4"
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
      <div className="w-6 h-6">
        {invoice?.status === "done" ? (
          <IoMdDoneAll className="fill-success" />
        ) : invoice.status === "partial" ? (
          <BsCircleHalf className="fill-warning" />
        ) : invoice.status === "unpaid" ? (
          <IoMdClose className="fill-error" />
        ) : null}
      </div>
      <div className="flex-1">
        {isOpen && <div className="">{invoice.id}</div>}
        {invoice.client}
      </div>
      <div
        className={`flex flex-col  ${
          isOpen ? "items-start" : "justify-center items-center"
        }`}
      >
        <span className="font-bold text-lg">
          <span>PKR</span> {invoice.amount}
        </span>
        <span className="text-xs">{invoice.dueDate}</span>
      </div>
      {!isOpen && (
        <MdOutlineVisibility
          className="ml-2 w-6 h-6 cursor-pointer"
          onClick={openHandler}
        />
      )}
      {isOpen && (
        <div className="flex items-center justify-center gap-8">
          <label htmlFor={`edit-${invoice.id}`}>
            <a href={`invoices/${invoice.id}`}>
              <BiEditAlt className="cursor-pointer hover:fill-info h-6 w-6" />
            </a>
          </label>
          <label htmlFor={`delete-${invoice.id}`} onClick={deleteToggleHandler}>
            <BsTrash className="cursor-pointer hover:fill-error h-6 w-6" />
          </label>
          <Modal
            id={`delete-${invoice.id}`}
            open={isDeleteModalOpen}
            onClose={deleteToggleHandler}
            disableClickOutside={false}
          >
            <label
              onClick={deleteToggleHandler}
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="font-bold text-lg text-primary">Delete Invoice!</h3>
            <p className="py-4">Are you sure to delete this invoice.</p>
            <div className="flex justify-end">
              <button className="btn btn-error text-error-content">
                Delete
              </button>
            </div>
          </Modal>
        </div>
      )}
    </div>
  );
};
export default InvoiceMobileRow;
