const UserDetails = ({ user }) => {
  if (!user) {
    return (
      <div className="user-details-empty">
        Please select a user to view their details
      </div>
    );
  }

  return (
    <div className="user-details-container">
      <h2>User Details</h2>
      <img 
        src={user.picture.large} 
        alt={user.name.first} 
        className="user-avatar" 
      />
      <h3>{user.name.first} {user.name.last}</h3>
      
      <div className="user-info">
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Location:</strong> {user.location.city}, {user.location.country}</p>
        <p><strong>Age:</strong> {user.dob.age}</p>
      </div>
    </div>
  );
};

export default UserDetails;