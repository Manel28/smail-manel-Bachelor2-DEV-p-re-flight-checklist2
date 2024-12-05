// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Dashboard from './pages/Dashboard';
import ChecklistForm from './pages/ChecklistForm';
import Header from './Components/Header';

function App() {
  const [pingStatus, setPingStatus] = useState(null);

  useEffect(() => {
    // Effectuer l'appel à l'API de ping
    const checkApiStatus = async () => {
      try {
        // Utilisation de l'URL pour tester la connexion à l'API
        const response = await axios.get('https://greenvelvet.alwaysdata.net/pfc/ping');
        
        console.log('Réponse de l\'API:', response.data); // Ajout d'un log pour la réponse complète

        if (response.data.response === 'pong') {
          setPingStatus('API is online');
        } else {
          setPingStatus('API is down');
        }
      } catch (error) {
        setPingStatus('Error connecting to API');
        console.error('Erreur lors de la requête API:', error); // Afficher l'erreur si elle se produit
      }
    };

    checkApiStatus();
  }, []); // Le tableau vide [] garantit que l'appel est effectué une seule fois lors du montage du composant

  const checklists = [
    {
      title: 'Deploy website',
      description: 'Tasks to deploy the website',
      status: 'In progress',
      progress: '2/3',
    },
    {
      title: 'SEO Optimization',
      description: 'Tasks to improve SEO',
      status: 'Completed',
      progress: '5/5',
    },
  ];

  return (
    <Router>
      <div>
        <Header /> {/* Le header est affiché sur toutes les pages */}
        {/* Afficher l'état de l'API en haut */}
        <div>
          <h3>{pingStatus}</h3>
        </div>
        <Routes>
          <Route path="/" element={<Dashboard checklists={checklists} />} />
          <Route path="/checklist-form" element={<ChecklistForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
