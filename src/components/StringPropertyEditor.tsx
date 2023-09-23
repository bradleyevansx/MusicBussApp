import { useRef, useState } from "react";
import ConfirmIntent from "./ConfirmIntent";

interface Props {
  title: string;
  oldValue: string;
  onSubmit: (newVal: string, oldValue: string) => void;
}

const StringPropertyEditor = ({ title, oldValue, onSubmit }: Props) => {
  const [modalIsShown, setModalIsShown] = useState(false);
  const newValueRef = useRef<HTMLInputElement | null>(null);
  const [newValue, setNewValue] = useState<string | null>(null);

  const checkIntent = (intent: boolean) => {
    if (intent && newValue) {
      onSubmit(newValue, oldValue);
    } else {
      onSubmit(oldValue, oldValue);
    }

    setModalIsShown(false);
  };

  if (modalIsShown)
    return (
      <ConfirmIntent
        onConfirm={(intent) => checkIntent(intent)}
      ></ConfirmIntent>
    );

  return (
    <div className="container-colors w-fit flex-col p-5 space-y-5">
      <h4 className="w-fit text-sky-300 text-3xl mx-auto">{title}</h4>
      <input
        ref={newValueRef}
        id="newValue"
        type="text"
        required
        className="bg-zinc-700 appearance-none rounded block w-full px-3 py-2 border border-zinc-500 placeholder-zinc-300 text-zinc-50 focus:outline-none focus:ring-zinc-500 focus:border-zinc-500 focus:z-10 sm:text-sm md:text-base lg:text-lg xl:text-xl"
        placeholder="New Value"
      />
      <div className="mx-auto w-fit">
        <button
          className="primary-btn"
          onClick={() => {
            setNewValue(newValueRef.current!.value);
            setModalIsShown(true);
          }}
        >
          Submit Change
        </button>
      </div>
    </div>
  );
};

export default StringPropertyEditor;
