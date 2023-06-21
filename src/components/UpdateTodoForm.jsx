import Select from "react-select";

import { options } from "../assets/data";

function UpdateTodoForm({
  todoToUpdate,
  setTodoToUpdate,
  toggleOpenUpdateTodoForm,
  updateTodo,
}) {
  function handleUpdate() {
    updateTodo();
    toggleOpenUpdateTodoForm();
  }

  function handleChange(event) {
    setTodoToUpdate(prevFormData => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  }

  function handleLabelsChange(selectedLabels) {
    setTodoToUpdate(prevFormData => ({
      ...prevFormData,
      labels: selectedLabels.map(label => label.value),
    }));
  }

  return (
    <div
      className="fixed inset-0 flex justify-center items-center w-full h-full bg-black/50"
      onClick={toggleOpenUpdateTodoForm}
    >
      <div
        className="flex flex-col gap-3 px-10 py-8 w-[768px] bg-white rounded-lg"
        onClick={event => event.stopPropagation()}
      >
        <div className="flex justify-between">
          <button
            className="bg-transparent border-none text-sm"
            onClick={toggleOpenUpdateTodoForm}
          >
            Cancel
          </button>
          <button
            onClick={handleUpdate}
            className="bg-yellow-900 px-6 py-2 rounded-md text-white text-sm"
          >
            Update
          </button>
        </div>

        <div>
          <h2 className="font-bold mb-2">Title</h2>
          <input
            type="text"
            placeholder="add a title..."
            name="title"
            className="w-full p-2 text-sm border-none bg-yellow-900/5 rounded-md focus:ring-yellow-900"
            value={todoToUpdate.title}
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
            value={todoToUpdate.description}
            onChange={handleChange}
          />
        </div>

        <div>
          <h2 className="font-bold mb-2">Tags</h2>
          <Select
            options={options}
            onChange={handleLabelsChange}
            defaultValue={options.filter(option =>
              todoToUpdate.labels.includes(option.label)
            )}
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

export default UpdateTodoForm;
