

const Card = ({ title, description, status, progress, onEdit, onDelete }) => {
  // Définir une couleur dynamique pour le statut
  const statusColor = status === 'Completed' ? '#EF476F' : '#FFD166';

  return (
    <div style={styles.card}>
      <h2 style={styles.title}>{title}</h2>
      <p style={styles.description}>Description: {description}</p>
      <p>
        Statut: <span style={{ ...styles.status, color: statusColor }}>{status}</span>
      </p>
      <p>Progress: {progress}</p>
      <div style={styles.actions}>
        <button style={styles.editButton} onClick={onEdit}>Edit</button>
        <button style={styles.deleteButton} onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};


const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '10px',
    margin: '10px',
    width: '250px',
    backgroundColor: '#fff',
  },
  title: {
    color: '#26547C',
    fontWeight: 'bold',
  },
  description: {
    marginBottom: '10px',
  },
  status: {
    fontWeight: 'bold',
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  editButton: {
    backgroundColor: '#26547C',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '5px',
  },
  deleteButton: {
    backgroundColor: '#EF476F',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '5px',
  },
};

export default Card;
