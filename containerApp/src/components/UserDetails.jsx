import React from 'react';

const UserDetails = ({ user }) => {
  if (!user) {
    return (
      <div style={{ 
        padding: '20px', 
        border: '1px dashed #ddd', 
        borderRadius: '8px', 
        textAlign: 'center',
        color: '#888'
      }}>
        Please select a user to view their details
      </div>
    );
  }
  
  const containerStyle = {
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    maxWidth: '400px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    backgroundColor: '#4635df'
  };
  
  const avatarStyle = {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    marginBottom: '20px'
  };
  
  const infoStyle = {
    margin: '10px 0',
    textAlign: 'left',
    padding: '5px 10px',
    borderLeft: '3px solid #646cff',
    backgroundColor: '#47e1fc'
  };

  return (
    <div style={containerStyle}>
      <h2>User Details</h2>
      <img src={user.picture.large} alt={user.name.first} style={avatarStyle} />
      <h3>{user.name.first} {user.name.last}</h3>
      
      <div style={infoStyle}>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Location:</strong> {user.location.city}, {user.location.country}</p>
        <p><strong>Age:</strong> {user.dob.age}</p>
      </div>
    </div>
  );
};

export default UserDetails;