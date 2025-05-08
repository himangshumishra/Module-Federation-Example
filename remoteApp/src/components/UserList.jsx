import { useState, useEffect } from 'react';

const UserList = ({ onUserSelect }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hoveredUserId, setHoveredUserId] = useState(null);
  
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=5')
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then(data => {
        setUsers(data.results);
        setLoading(false);
      })
      .catch(error => {
        setError('Failed to fetch users');
        setLoading(false);
        console.error('Error fetching users:', error);
      });
  }, []);

  if (loading) return <div>Loading users...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h3>Select a User</h3>
      <div style={{ maxWidth: '400px', textAlign: 'left' }}>
        {users.map(user => (
          <div 
            key={user.login.uuid}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '10px',
              margin: '5px 0',
              borderRadius: '8px',
              backgroundColor: hoveredUserId === user.login.uuid ? '#f0f0f0' : 'transparent',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease'
            }}
            onClick={() => onUserSelect(user)}
            onMouseEnter={() => setHoveredUserId(user.login.uuid)}
            onMouseLeave={() => setHoveredUserId(null)}
          >
            <img 
              src={user.picture.thumbnail} 
              alt={user.name.first} 
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                marginRight: '15px'
              }} 
            />
            <div>
              <div style={{ fontWeight: 'bold', color: '#fd6a6a' }}>{user.name.first} {user.name.last}</div>
              <div style={{ fontSize: '0.8em', color: '#666' }}>{user.email}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;