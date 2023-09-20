import React from 'react';
import ChatBox from './ChatBox';
import ProtocolList from './ProtocolList';
import MenuIcon from './MenuIcon';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <MenuIcon />
      <ChatBox />
      <ProtocolList />
    </div>
  );
}

export default App;