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

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Container App</h1>
        <Suspense fallback={<div className="loading-fallback">Loading button...</div>}>
          <RemoteButton
            text="Button From Remote App"
            onClick={() => alert("Hello, This button is from remote app!")}
            style={{ marginLeft: '10px',backgroundColor:'#1648ff'}}
          />
        </Suspense>
      </header>
      
      <div className="content-layout">
        <Suspense fallback={<div className="loading-fallback">Loading user list...</div>}>
          <div className="content-panel">
            <RemoteUserList onUserSelect={handleUserSelect} />
          </div>
        </Suspense>
        
        <div className="content-panel">
          <UserDetails user={selectedUser} />
        </div>
      </div>
    </div>
  );
}

export default App;