import { useRef } from "react";
import Input from "./Input.jsx";
import Modal from "./Modal.jsx";

export default function NewProject({ onAdd,onCancel }) {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const duedate = useRef();
  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = duedate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      //show modal
      modal.current.open();
      return; // so that the invalid null inputs wont go in the onAdd func
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      duedate: enteredDueDate,
    });
  }
  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-600 my-4">
          ERROR! Invalid input
        </h2>
        <p className="text-stone-500 mb-4">
          Oopsie... Please enter valid value for every input :/
        </p>
      </Modal>
      <div className="w-[40rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button className="text-stone-900 hover:text-red-600" onClick={onCancel}>
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950 hover:text-green-400"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={description} label="Description" isTextArea />
          <Input type="date" ref={duedate} label="Due Date" />
        </div>
      </div>
    </>
  );
}
