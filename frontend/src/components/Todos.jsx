export default function Todos({ todos }) {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      {todos.map((todo) => (
        <div key={todo.id} className="p-4 mb-4 bg-white shadow-md rounded-lg">
          <h1 className="text-xl font-bold text-gray-900">{todo.title}</h1>
          <h2 className="text-gray-600">{todo.description}</h2>
          <button
            className={`mt-2 px-4 py-2 rounded ${
              todo.completed ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'
            }`}
          >
            {todo.completed ? 'Completed' : 'Mark as completed'}
          </button>
        </div>
      ))}
    </div>
  );
}
