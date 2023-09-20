import React, { useState, useEffect } from 'react';
import axios from 'axios';


function ProtocolList() {
    const [protocols, setProtocols] = useState([]);
  
    useEffect(() => {
      // Fetch protocols from the backend when the component mounts
      axios.get('http://127.0.0.1:8000/api/protocols/', {
        headers: {
          'Authorization': `Token ${'fd60b19e446960c7442c372f77105bcabc366c70'}`
       }
      })
        .then(response => {
        setProtocols(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the protocols!', error);
      });
    }, []); // Empty dependency array means this useEffect runs once when component mounts
  
    return (
      <div style={{ padding: '20px' }}>
        <ul>
          {protocols.map((protocol, index) => (
            <li key={index}>
              {protocol.id} - {protocol.name} - {protocol.description}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default ProtocolList;