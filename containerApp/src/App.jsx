import { useState, lazy, Suspense } from "react";
import "./App.css";

const RemoteButton = lazy(() => import("remoteApp/Button"));
const RemoteUserList = lazy(() => import("remoteApp/UserList"));

import UserDetails from "./components/UserDetails";

function App() {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  const loadingStyle = {
    padding: '12px', 
    backgroundColor: '#f5f5f5', 
    borderRadius: '4px', 
    color: '#666'
  };

  const contentLayoutStyle = {
    display: 'flex', 
    gap: '24px', 
    padding: '20px', 
    maxWidth: '1000px', 
    margin: '20px auto',
    flexDirection: window.innerWidth < 768 ? 'column' : 'row'
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 style={{ margin: 0, color: '#ffffff' }}>Container App</h1>
        <Suspense fallback={<div style={loadingStyle}>Loading button...</div>}>
          <RemoteButton
            text="Button From Remote App"
            onClick={() => alert("Hello from container app!")}
            style={{ marginLeft: '10px' }}
          />
        </Suspense>
      </header>
      
      <div style={contentLayoutStyle}>
        <Suspense fallback={<div style={loadingStyle}>Loading user list...</div>}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <RemoteUserList onUserSelect={handleUserSelect} />
          </div>
        </Suspense>
        
        <div style={{ flex: 1, minWidth: 0 }}>
          <UserDetails user={selectedUser} />
        </div>
      </div>
    </div>
  );
}

export default App;