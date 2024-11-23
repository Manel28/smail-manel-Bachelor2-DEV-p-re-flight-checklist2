import React, { useEffect } from 'react';
import axios from './axiosConfig';

const App = () => {
    useEffect(() => {
        axios.get('/ping')
            .then(response => console.log(response.data))
            .catch(error => console.error(error));
    }, []);

    return <div>Pre-Flight Checklist App</div>;
};

export default App;
