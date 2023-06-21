import { useState } from "react";
import Select from "react-select";
import { v4 as uuid } from "uuid";

import { options } from "../assets/data";

function NewTodoForm({ toggleOpenNewTodoForm, saveNewTodo }) {
  const [newTodo, setNewTodo] = useState({
    id: uuid(),
    title: "",
    description: "",
    completed: false,
    labels: [],
  });

  function handleSave() {
    saveNewTodo(newTodo);
    toggleOpenNewTodoForm();
  }

  function handleChange(event) {
    setNewTodo(prevFormData => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  }

  function handleLabelsChange(selectedLabels) {
    setNewTodo(prevFormData => ({
      ...prevFormData,
      labels: selectedLabels.map(label => label.value),
    }));
  }

  return (
    <div
      className="fixed inset-0 flex justify-center items-center w-full h-full bg-black/50"
      onClick={toggleOpenNewTodoForm}
    >
      <div
        className="flex flex-col gap-3 px-10 py-8 w-[768px] bg-white rounded-lg"
        onClick={event => event.stopPropagation()}
      >
        <div className="flex justify-between">
          <button
            className="bg-transparent border-none text-sm"
            onClick={toggleOpenNewTodoForm}
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-yellow-900 px-6 py-2 rounded-md text-white text-sm"
          >
            Add
          </button>
        </div>

        <div>
          <h2 className="font-bold mb-2">Title</h2>
          <input
            type="text"
            placeholder="add a title..."
            name="title"
            className="w-full p-2 text-sm border-none bg-yellow-900/5 rounded-md focus:ring-yellow-900"
            value={newTodo.title}
            onChange={handleChange}
          />
        </div>

        <div>
          <h2 className="font-bold mb-2">Description</h2>
          <textarea
            rows="5"
            name="description"
            className="w-full p-2 text-sm border-none bg-yellow-900/5 rounded-md focus:ring-yellow-900"
            placeholder="add a description..."
            value={newTodo.description}
            onChange={handleChange}
          />
        </div>

        <div>
          <h2 className="font-bold mb-2">Tags</h2>
          <Select
            options={options}
            onChange={handleLabelsChange}
            defaultValue={newTodo.labels}
            placeholder="Select the labels"
            closeMenuOnSelect={false}
            isMulti
            isSearchable
            theme={theme => ({
              ...theme,
              colors: {
                ...theme.colors,
                primary: "#713f12",
              },
            })}
            styles={{
              input: base => ({
                ...base,
                "input:focus": {
                  boxShadow: "none",
                },
              }),
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default NewTodoForm;
