import Modal from "./Modal";

interface Props {
  onIntent: (intent: boolean) => void;
  isVisible: boolean;
}

const ConfirmIntent = ({ onIntent, isVisible }: Props) => {
  if (!isVisible) return null;

  return (
    <Modal showCloseButton={false} isVisible={isVisible}>
      <h4 className="text-zinc-100 text-4xl">Are you sure?</h4>
      <div className="flex justify-center space-x-4 w-full">
        <button
          onClick={() => {
            onIntent(false);
          }}
          className="red-btn"
        >
          Cancel
        </button>
        <button className="green-btn" onClick={() => onIntent(true)}>
          Confirm
        </button>
      </div>
    </Modal>
  );
};

export default ConfirmIntent;
