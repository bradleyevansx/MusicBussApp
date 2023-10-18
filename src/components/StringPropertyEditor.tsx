import { useRef, useState } from "react";
import ConfirmIntent from "./ConfirmIntent";

interface Props {
  propertyBeingChanged: string;
  onSubmit: (newVal: string, intent: boolean) => void;
}

const StringPropertyEditor = ({ propertyBeingChanged, onSubmit }: Props) => {
  const [modalIsShown, setModalIsShown] = useState(false);
  const newValueRef = useRef<HTMLInputElement | null>(null);
  const [newValue, setNewValue] = useState<string | null>(null);

  const checkIntent = (intent: boolean) => {
    if (intent && newValue) {
      onSubmit(newValue, intent);
    }

    setModalIsShown(false);
  };

  if (modalIsShown)
    return (
      <ConfirmIntent onIntent={(intent) => checkIntent(intent)}></ConfirmIntent>
    );

  return (
    <div className="container-colors w-fit flex-col p-5 space-y-5">
      <h4 className="w-fit text-sky-300 text-3xl mx-auto">
        Set new {propertyBeingChanged}:
      </h4>
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
