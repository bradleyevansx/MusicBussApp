import { ReactNode } from "react";

interface Props {
  isVisible: boolean;
  showCloseButton: boolean;
  onClose?: () => void;
  children: ReactNode;
}

const Modal = ({ isVisible, children, onClose, showCloseButton }: Props) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center">
      <div className="card-1">
        {children}
        {showCloseButton && (
          <button className="primary-btn" onClick={onClose}>
            Close
          </button>
        )}
      </div>
    </div>
  );
};

export default Modal;
