import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const withAuthentication = (WrappedComponent) => {
  const AuthenticatedComponent = () => {
    const navigate = useNavigate();

    // Simulate authentication status
    const isAuthenticated = true; // Replace with your actual authentication logic

    useEffect(() => {
      if (!isAuthenticated) {
        navigate('/login');
      }
    }, [isAuthenticated, navigate]);

    if (!isAuthenticated) {
      return null; // Render null or a login component instead
    }

    return <WrappedComponent />;
  };

  return AuthenticatedComponent;
};

export default withAuthentication;
