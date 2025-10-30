import React from 'react';
import { AuthProvider } from './src/viewmodels/hooks/context/AuthContext';
import TestAuth from './src/TestAuth';

function App() {
  return (
    <AuthProvider>
      <TestAuth />
    </AuthProvider>
  );
}

export default App;