import { useState } from 'react';

const Button = ({ text = 'Remote Button', onClick, style }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const buttonStyle = {
    backgroundColor: isHovered ? '#4a5aff' : '#646cff',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '500',
    transition: 'background-color 0.3s ease',
    ...style
  };

  return (
    <button
      style={buttonStyle}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}
    </button>
  );
};

export default Button;