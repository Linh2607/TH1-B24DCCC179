import React, { useState } from 'react';

function TodoList() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]); 

  
  const addTask = () => {
    if (task.trim() === '') return; 
    setTasks([...tasks, task.trim()]);
    setTask(''); 
  };

  
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto' }}>
      <h2>Danh sách công việc</h2>

      <input
        type="text"
        placeholder="Nhập công việc mới"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={(e) => { if (e.key === 'Enter') addTask(); }} 
        style={{ width: '70%', padding: 8, marginRight: 8 }}
      />

      <button onClick={addTask}>Thêm</button>

      <ul style={{ marginTop: 20 }}>
        {tasks.map((t, index) => (
          <li key={index} style={{ marginBottom: 8, display: 'flex', justifyContent: 'space-between' }}>
            <span>{t}</span>
            <button onClick={() => deleteTask(index)} style={{ color: 'red' }}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
