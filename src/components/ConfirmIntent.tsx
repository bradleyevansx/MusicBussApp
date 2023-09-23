interface Props {
  onConfirm: (intent: boolean) => void;
}

const ConfirmIntent = ({ onConfirm }: Props) => {
  return (
    <div className="container-colors w-fit p-5 space-y-5">
      <h4 className="text-zinc-100 text-4xl">Are you sure?</h4>
      <div className="flex justify-center space-x-4 w-full">
        <button className="green-btn" onClick={() => onConfirm(true)}>
          Confirm
        </button>
        <button
          onClick={() => {
            onConfirm(false);
          }}
          className="red-btn"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ConfirmIntent;
