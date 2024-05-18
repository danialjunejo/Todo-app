import { useState } from "react";

const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white shadow-lg rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">
          Create a new Todo
        </h2>
        <input
          type="text"
          placeholder="Title"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          onChange={function (e) {
            const value = e.target.value;
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Description"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          onChange={function (e) {
            const value = e.target.value;
            setDescription(e.target.value);
          }}
        />
        <button
          onClick={() => {
            fetch("http://localhost:3000/todo", {
              method: "POST",
              body: JSON.stringify({
                title: title,
                description: description,
              }),
              headers: {
                "Content-Type": "application/json",
              },
            }).then(async function (res) {
              const json = await res.json();
              console.log(json);
              alert("Todo added");
            });
          }}
          className="w-full px-4 py-2 bg-blue-500 text-white rounded"
        >
          Create Todo
        </button>
      </div>
    </div>
  );
};

export default CreateTodo;
