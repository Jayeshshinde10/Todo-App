import React, { useState } from 'react';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !dueDate) return;
    
    const newTodo = {
      id: Date.now(),
      title,
      description,
      dueDate: new Date(dueDate),
    };

    setTodos([...todos, newTodo]);
    setTitle('');
    setDescription('');
    setDueDate('');
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Todo App</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <input 
          type="text" 
          placeholder="Title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          className="border rounded px-2 py-1 mr-2"
        />
        <input 
          type="text" 
          placeholder="Description" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          className="border rounded px-2 py-1 mr-2"
        />
        <input 
          type="date" 
          value={dueDate} 
          onChange={(e) => setDueDate(e.target.value)} 
          className="border rounded px-2 py-1"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded ml-2">Add Todo</button>
      </form>
      <div>
        {todos.map(todo => (
          <div key={todo.id} className={`p-4 mb-4 border rounded ${todo.dueDate < Date.now() ? 'bg-red-200' : ''}`}>
            <h2 className="text-lg font-bold">{todo.title}</h2>
            <p className="text-gray-700">{todo.description}</p>
            <p className="text-sm text-gray-600">Due Date: {todo.dueDate.toLocaleDateString()}</p>
            <button onClick={() => removeTodo(todo.id)} className="text-red-500 mt-2">Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
