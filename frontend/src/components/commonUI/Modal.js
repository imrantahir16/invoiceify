import { useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";
const Modal = ({ children, open, disableClickOutside, onClose, id }) => {
  const ref = useRef(null);
  useOnClickOutside(ref, () => {
    if (!disableClickOutside && open) {
      onClose();
    }
  });
  return (
    <div
      id={id}
      className={`modal modal-bottom sm:modal-middle ${
        open ? "modal-open" : ""
      }`}
    >
      <div className="modal-box" ref={ref}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
