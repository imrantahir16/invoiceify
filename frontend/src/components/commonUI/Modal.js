import { useRef } from "react";
import ReactDOM from "react-dom";
import { useOnClickOutside } from "usehooks-ts";
const Modal = ({ children, open, disableClickOutside, onClose }) => {
  const ref = useRef(null);
  useOnClickOutside(ref, () => {
    if (!disableClickOutside && open) {
      onClose();
    }
  });
  return (
    <div
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
