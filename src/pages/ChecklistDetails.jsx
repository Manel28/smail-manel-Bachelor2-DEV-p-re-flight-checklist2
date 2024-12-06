import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function ChecklistDetails() {
  const navigate = useNavigate();
  const location = useLocation();

  const checklist = location.state?.checklist || {};
  const [tasks, setTasks] = useState(checklist.tasks || []);

  // Fonction pour changer le statut d'une tâche
  const handleStatusChange = (index, status) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].status = status;
    setTasks(updatedTasks);
  };

  // Fonction pour retourner au dashboard
  const handleBack = () => {
    navigate('/');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>{checklist.title}</h1>
      <p>{checklist.description}</p>
      
      <h3>Tasks</h3>
      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        tasks.map((task, index) => (
          <div key={index} style={{ marginBottom: '15px' }}>
            <p>{task.title}</p>
            <p>{task.description}</p>
            <div>
              <button
                onClick={() => handleStatusChange(index, 'Completed')}
                style={{ margin: '5px', backgroundColor: '#4CAF50', color: 'white' }}
              >
                Completed
              </button>
              <button
                onClick={() => handleStatusChange(index, 'In Progress')}
                style={{ margin: '5px', backgroundColor: '#FFD166' }}
              >
                In Progress
              </button>
              <button
                onClick={() => handleStatusChange(index, 'Pending')}
                style={{ margin: '5px', backgroundColor: '#EF476F', color: 'white' }}
              >
                Pending
              </button>
            </div>
          </div>
        ))
      )}

      <button
        onClick={handleBack}
        style={{
          backgroundColor: '#26547C',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          marginTop: '20px',
        }}
      >
        Back to Dashboard
      </button>
    </div>
  );
}

export default ChecklistDetails;
