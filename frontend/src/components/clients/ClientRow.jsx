import { BiEditAlt } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { AiOutlinePhone } from "react-icons/ai";
import Modal from "../commonUI/Modal";
import { useState } from "react";
import ClientForm from "./ClientForm";

const ClientRow = ({ data }) => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen((prev) => !prev);
  return (
    <tr>
      <td>
        <h3 className="">{data.id}</h3>
      </td>
      <td>{data.name}</td>
      <td>
        <div className="min-w-max inline-flex items-center justify-start gap-2">
          <FiMail />
          <a className="hover:text-primary" href={`mailto:${data.email}`}>
            {data.email}
          </a>
        </div>
      </td>
      <td>
        <div className="min-w-max inline-flex items-center justify-start gap-2">
          <AiOutlinePhone />
          <a className="hover:text-primary" href={`tel:${data.phone}`}>
            {data.phone}
          </a>
        </div>
      </td>
      <td>
        <div className="flex items-center justify-evenly">
          <label onClick={handleToggle} className="btn">
            <BiEditAlt className="cursor-pointer hover:fill-info h-6 w-6" />
          </label>
          <Modal open={open} onClose={handleToggle} disableClickOutside={false}>
            <label
              onClick={handleToggle}
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="font-bold text-lg text-primary">Edit Client!</h3>
            <ClientForm />
          </Modal>
          <BsTrash className="cursor-pointer hover:fill-error h-6 w-6" />
        </div>
      </td>
    </tr>
  );
};
export default ClientRow;
