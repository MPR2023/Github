import React from 'react';

function MenuIcon() {
  const handleClick = () => {
    alert('Menu icon clicked');
  };  
  return (
    <div style={{ padding: '10px' }}>
       <span style={{ fontSize: '30px' }} onClick={handleClick}>☰</span>
    </div>
  );
}

export default MenuIcon;