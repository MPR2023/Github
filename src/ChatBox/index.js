import React, { useState } from 'react';
import axios from 'axios'; // Import Axios

function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  const handleSendMessage = async () => {
    if (userInput.trim() !== '') {
      console.log("Sending message:", userInput);
      setMessages(prevMessages => [...prevMessages, { text: userInput, type: 'user' }]);
      
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/chat/', {
          user_input: userInput,
          user_role: 'admin'
        });
  
        console.log("Received response:", response);
        console.log("Response data structure:", response.data); // This will help you debug
  
        if (response.status === 200) {
          const responseData = response.data;
          if (responseData && responseData.response) {
            setMessages(prevMessages => [...prevMessages, { text: responseData.response, type: 'bot' }]);
          } else if (responseData && responseData.error) {
            console.log("Error from backend:", responseData.error);
            setMessages(prevMessages => [...prevMessages, { text: `Error: ${responseData.error}`, type: 'bot' }]);
          } else {
            console.log("Unexpected response format.");
          }
        }
      } catch (error) {
        console.error('There was an error fetching the ChatGPT response!', error);
      }
      
      setUserInput('');
    }
  };

  return (
    <div style={{ backgroundColor: 'black', color: 'white', padding: '20px' }}>
      <p>This is the chatbox.</p>
      <div>
        {messages.map((message, index) => (
          <p key={index} style={{ textAlign: message.type === 'user' ? 'right' : 'left' }}>
            {message.text}
          </p>
        ))}
      </div>
      <input 
        type="text" 
        placeholder="Type a message..." 
        value={userInput}
        onChange={e => setUserInput(e.target.value)} 
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
}

export default ChatBox;
