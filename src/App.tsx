import React from 'react';
import GlobalStyle from './styles/global';
import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';
import { AuthProvider } from './hooks/AuthContext';
import Toast from './components/Toast';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>

    <Toast />

    <GlobalStyle />
  </>
);

export default App;
