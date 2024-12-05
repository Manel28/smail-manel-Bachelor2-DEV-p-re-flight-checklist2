import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function ChecklistForm() {
  const navigate = useNavigate();
  const location = useLocation();

  const checklist = location.state?.checklist || {};

  // États pour gérer les informations de la checklist
  const [form, setForm] = useState({
    title: checklist.title || '',
    description: checklist.description || '',
  });

  // État pour gérer les tâches
  const [tasks, setTasks] = useState(checklist.tasks || []);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Gérer les changements dans les inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  // Ajouter une tâche
  const addTask = () => {
    setTasks([...tasks, { title: '', description: '' }]);
  };

  // Modifier une tâche
  const handleTaskChange = (index, key, value) => {
    const updatedTasks = [...tasks];
    updatedTasks[index][key] = value;
    setTasks(updatedTasks);
  };

  // Supprimer une tâche
  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // Fonction pour envoyer les données au serveur
  const handleSave = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('https://api.exemple.com/checklist/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'dc6b28bda4f2b66ca185ae21229e22e4bca61aa1', 
        },
        body: JSON.stringify({
          title: form.title,
          description: form.description,
          todo: tasks.map((task) => ({
            title: task.title,
            description: task.description,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to save checklist');
      }

      const data = await response.json();
      console.log('Checklist created with ID:', data.id);

      navigate('/dashboard'); // Redirige vers le Dashboard
    } catch (err) {
      setError(err.message || 'An error occurred while saving the checklist');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>{checklist.title ? 'Edit Checklist' : 'Create a New Checklist'}</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form>
        {/* Titre */}
        <div>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '10px',
                marginBottom: '10px',
                border: '1px solid #ccc',
                borderRadius: '5px',
              }}
            />
          </label>
        </div>

        {/* Description */}
        <div>
          <label>
            Description:
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '10px',
                marginBottom: '10px',
                border: '1px solid #ccc',
                borderRadius: '5px',
              }}
            />
          </label>
        </div>

        {/* Tâches */}
        <h3>Tasks</h3>
        {tasks.length === 0 ? (
          <p>No tasks available. Add some tasks.</p>
        ) : (
          tasks.map((task, index) => (
            <div key={index} style={{ marginBottom: '15px' }}>
              <input
                type="text"
                placeholder="Task Title"
                value={task.title}
                onChange={(e) =>
                  handleTaskChange(index, 'title', e.target.value)
                }
                style={{
                  width: '48%',
                  padding: '10px',
                  marginRight: '4%',
                  marginBottom: '5px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                }}
              />
              <input
                type="text"
                placeholder="Task Description"
                value={task.description}
                onChange={(e) =>
                  handleTaskChange(index, 'description', e.target.value)
                }
                style={{
                  width: '48%',
                  padding: '10px',
                  marginBottom: '5px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                }}
              />
              <button
                type="button"
                onClick={() => removeTask(index)}
                style={{
                  backgroundColor: '#EF476F',
                  color: 'white',
                  padding: '5px 10px',
                  marginLeft: '10px',
                  border: 'none',
                  borderRadius: '5px',
                }}
              >
                Delete Task
              </button>
            </div>
          ))
        )}

        {/* Ajouter une tâche */}
        <button
          type="button"
          onClick={addTask}
          style={{
            backgroundColor: '#FFD166',
            padding: '10px 20px',
            marginBottom: '20px',
            border: 'none',
            borderRadius: '5px',
          }}
        >
          Add Task
        </button>

        {/* Sauvegarder */}
        <button
          type="button"
          onClick={handleSave}
          disabled={loading}
          style={{
            backgroundColor: loading ? '#999' : '#26547C',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
          }}
        >
          {loading ? 'Saving...' : 'Save'}
        </button>
      </form>
    </div>
  );
}

export default ChecklistForm;
