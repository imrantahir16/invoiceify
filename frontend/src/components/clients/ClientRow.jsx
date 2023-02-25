import { BiEditAlt } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { AiOutlinePhone } from "react-icons/ai";
import Modal from "../commonUI/Modal";
import { useState } from "react";
import ClientForm from "./ClientForm";

const ClientRow = ({ data }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const handleToggle = () => setIsEditModalOpen((prev) => !prev);
  const deleteToggleHandler = () => setIsDeleteModalOpen((prev) => !prev);
  return (
    <tr key={data.id} className="text-[0.7rem] xs:text-xs">
      <td className="hidden sm:block">
        <h3 className="">{data.id}</h3>
      </td>
      <td className="p-2 sm:p-4">{data.name}</td>
      <td className="hidden sm:block">
        <div className="min-w-max inline-flex items-center justify-start gap-2">
          <FiMail />
          <a className="hover:text-primary" href={`mailto:${data.email}`}>
            {data.email}
          </a>
        </div>
      </td>
      <td className="p-2 sm:p-4">
        <div className="min-w-max inline-flex items-center justify-start gap-2">
          <AiOutlinePhone />
          <a className="hover:text-primary" href={`tel:${data.phone}`}>
            {data.phone}
          </a>
        </div>
      </td>
      <td className="p-2 sm:p-4">
        <div className="flex items-center justify-evenly">
          <label htmlFor={`edit-${data.id}`} onClick={handleToggle}>
            <BiEditAlt className="cursor-pointer hover:fill-info h-4 w-4 sm:h-6 sm:w-6" />
          </label>
          <Modal
            id={`edit-${data.id}`}
            open={isEditModalOpen}
            onClose={handleToggle}
            disableClickOutside={false}
          >
            <label
              onClick={handleToggle}
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="font-bold text-lg text-primary">Edit Client!</h3>
            <ClientForm />
          </Modal>
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
            <h3 className="font-bold text-lg text-primary">Delete Client!</h3>
            <p className="py-4">Are you sure to delete this client details.</p>
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
export default ClientRow;
