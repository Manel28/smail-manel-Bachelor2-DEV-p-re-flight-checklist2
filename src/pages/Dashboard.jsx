import { useNavigate } from 'react-router-dom';
import Card from '../Components/Card';


function Dashboard({ checklists }) {
  const navigate = useNavigate();

  const handleEdit = (checklist) => {
    navigate('/checklist-form', { state: { checklist } }); // Redirige vers ChecklistForm avec des données
  };

  const handleDelete = (checklist) => {
    const confirmed = window.confirm('Are you sure you want to delete this item?');
    if (confirmed) {
      console.log('Deleted checklist:', checklist.title);
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
        <h1>Dashboard</h1>
        <button
          onClick={() => navigate('/checklist-form')}
          style={{
            backgroundColor: '#FFD166',
            padding: '10px 20px',
            borderRadius: '5px',
            border: 'none',
          }}
        >
          Add Checklist
        </button>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', padding: '20px' }}>
        {checklists.map((checklist, index) => (
          <div key={index} style={{ margin: '10px' }}>
            <Card
              title={checklist.title}
              description={checklist.description}
              status={checklist.status}
              progress={checklist.progress}
              onEdit={() => handleEdit(checklist)}
              onDelete={() => handleDelete(checklist)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
