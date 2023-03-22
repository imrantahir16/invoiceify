import { useState } from "react";
import { AiOutlinePhone } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { MdOutlineVisibility } from "react-icons/md";
import Modal from "../commonUI/Modal";
import ClientForm from "./ClientForm";

const ClientMobileRow = ({ client }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const deleteToggleHandler = () => setIsDeleteModalOpen((prev) => !prev);
  const editToggleHandler = () => setIsEditModalOpen((prev) => !prev);

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
        isOpen ? "flex-col p-6 gap-6" : "items-center px-2 py-4 sm:px-4 gap-4"
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
      <div className="flex-1">
        {isOpen && <div className="mb-2">{client.id}</div>}
        <span>{client.name}</span>
      </div>
      <div className="flex-1 flex items-center gap-2">
        <AiOutlinePhone />
        <a className="hover:text-primary" href={`tel:${client.phone}`}>
          {client.phone}
        </a>
      </div>
      {isOpen && (
        <div className="flex-1 flex items-center gap-2">
          <FiMail />
          <a className="hover:text-primary" href={`mailto:${client.email}`}>
            {client.email}
          </a>
        </div>
      )}
      {!isOpen && (
        <MdOutlineVisibility
          className="ml-2 w-6 h-6 cursor-pointer"
          onClick={openHandler}
        />
      )}
      {isOpen && (
        <div className="flex items-center justify-center gap-8">
          <label htmlFor={`edit-${client.id}`} onClick={editToggleHandler}>
            <BiEditAlt className="cursor-pointer hover:fill-info h-6 w-6" />
          </label>
          <Modal
            id={`edit-${client.id}`}
            open={isEditModalOpen}
            onClose={editToggleHandler}
            disableClickOutside={false}
          >
            <label
              onClick={editToggleHandler}
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="font-bold text-lg text-primary">Edit Client!</h3>
            <ClientForm />
          </Modal>
          <label htmlFor={`delete-${client.id}`} onClick={deleteToggleHandler}>
            <BsTrash className="cursor-pointer hover:fill-error h-6 w-6" />
          </label>
          <Modal
            id={`delete-${client.id}`}
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
            <p className="py-4">Are you sure to delete this client.</p>
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
export default ClientMobileRow;
