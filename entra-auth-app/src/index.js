import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';
import { msalConfig } from './authConfig';

// MSAL instance oluþtur
const msalInstance = new PublicClientApplication(msalConfig);

// ÇOK ÖNEMLÝ: Initialize ve redirect handle
await msalInstance.initialize();

// Redirect'ten dönen response'u handle et
await msalInstance.handleRedirectPromise();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <MsalProvider instance={msalInstance}>
            <App />
        </MsalProvider>
    </React.StrictMode>
);