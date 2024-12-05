// src/pages/ChecklistDetails.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';

function ChecklistDetails() {
  const location = useLocation();
  const checklist = location.state?.checklist || {};

  return (
    <div style={{ padding: '20px' }}>
      <h1>{checklist.title}</h1>
      <p><strong>Description:</strong> {checklist.description}</p>
      <h3>Tasks</h3>
      {checklist.tasks && checklist.tasks.length > 0 ? (
        checklist.tasks.map((task, index) => (
          <div key={index} style={{ marginBottom: '10px' }}>
            <h4>{task.title}</h4>
            <p>{task.description}</p>
          </div>
        ))
      ) : (
        <p>No tasks available.</p>
      )}
    </div>
  );
}

export default ChecklistDetails;
