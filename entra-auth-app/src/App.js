import React from 'react';
import { 
  AuthenticatedTemplate, 
  UnauthenticatedTemplate, 
  useMsal 
} from '@azure/msal-react';
import { loginRequest } from './authConfig';
import './App.css';

function App() {
  const { instance } = useMsal();

  const handleLogin = () => {
    instance.loginRedirect(loginRequest);
  };

  const handleLogout = () => {
    instance.logoutRedirect();
  };

  return (
    <div className="App">
      <div className="container">
        <h1>🔐 Entra ID Authentication</h1>
        
        <UnauthenticatedTemplate>
          <div className="card">
            <h2>Welcome!</h2>
            <p>Please sign in to continue</p>
            <button className="btn-primary" onClick={handleLogin}>
              Sign In
            </button>
          </div>
        </UnauthenticatedTemplate>

        <AuthenticatedTemplate>
          <ProfileContent onLogout={handleLogout} />
        </AuthenticatedTemplate>
      </div>
    </div>
  );
}

function ProfileContent({ onLogout }) {
  const { accounts } = useMsal();
  const account = accounts[0];

  return (
    <div className="card">
      <h2>✅ You are signed in!</h2>
      
      <div className="profile-info">
        <p><strong>Name:</strong> {account.name || 'N/A'}</p>
        <p><strong>Email:</strong> {account.username}</p>
      </div>

      <div className="protected-content">
        <h3>🔒 Protected Content</h3>
        <p>This area is only visible to authenticated users.</p>
        <p>You have successfully completed the authentication flow!</p>
      </div>

      <button className="btn-secondary" onClick={onLogout}>
        Sign Out
      </button>
    </div>
  );
}

export default App;