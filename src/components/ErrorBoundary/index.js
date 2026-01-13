import React from 'react';
import styled from 'styled-components';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error if needed
    console.error('App crashed:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer>
          <ErrorIcon>!</ErrorIcon>
          <ErrorTitle>Ocorreu um erro</ErrorTitle>
          <ErrorText>
            Este aplicativo encontrou um problema e precisa ser fechado.
          </ErrorText>
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: #f0f0f0;
  padding: 20px;
  text-align: center;
`;

const ErrorIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #ff0000;
  color: white;
  font-size: 24px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

const ErrorTitle = styled.h3`
  color: #333;
  margin-bottom: 8px;
  font-size: 14px;
`;

const ErrorText = styled.p`
  color: #666;
  font-size: 12px;
`;

export default ErrorBoundary;
