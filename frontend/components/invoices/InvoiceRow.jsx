import { BiEditAlt } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import Modal from "../commonUI/Modal";
import { useState } from "react";

const InvoiceRow = ({ data }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const deleteToggleHandler = () => setIsDeleteModalOpen((prev) => !prev);

  return (
    <tr key={data.id} className="">
      <td className="">
        <h3 className="">{data.id}</h3>
      </td>
      <td className="">{data.client}</td>
      <td className="">
        <p>
          <span>$ </span>
          {data.amount}
        </p>
      </td>
      <td className="">{data.dueDate}</td>
      <td className="flex items-center justify-center">
        <div
          className={`${
            data.status === "done"
              ? "bg-success/90 text-success-content"
              : data.status === "partial"
              ? "bg-warning/90 text-warning-content"
              : data.status === "unpaid"
              ? "bg-error/90 text-error-content"
              : ""
          } uppercase py-2 px-4 rounded-full max-w-min`}
        >
          {data.status}
        </div>
      </td>
      <td className="">
        <div className="flex items-center justify-evenly">
          <label htmlFor={`edit-${data.id}`}>
            <a href={`edit/invoice/${data.id}`}>
              <BiEditAlt className="cursor-pointer hover:fill-info h-4 w-4 sm:h-6 sm:w-6" />
            </a>
          </label>
          <label htmlFor={`delete-${data.id}`} onClick={deleteToggleHandler}>
            <BsTrash className="cursor-pointer hover:fill-error h-4 w-4 sm:h-6 sm:w-6" />
          </label>
          <Modal
            id={`delete-${data.id}`}
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
      </td>
    </tr>
  );
};
export default InvoiceRow;
