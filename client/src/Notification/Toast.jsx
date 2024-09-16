import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { X, CheckCircle, XCircle, AlertTriangle, Info } from 'lucide-react';
import PropTypes from 'prop-types';

const ToastContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  color: white;
  font-family: Arial, sans-serif;
  
  ${({ type }) => {
    switch (type) {
      case 'success':
        return 'background-color: #4caf50;';
      case 'error':
        return 'background-color: #f44336;';
      case 'warning':
        return 'background-color: #ff9800;';
      default:
        return 'background-color: #2196f3;';
    }
  }}
`;

const Message = styled.p`
  margin: 0 12px;
  font-weight: 500;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    opacity: 0.8;
  }
`;

const Toast = ({ message, type = 'info', duration = 3000, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!visible) return null;

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircle size={24} />;
      case 'error':
        return <XCircle size={24} />;
      case 'warning':
        return <AlertTriangle size={24} />;
      default:
        return <Info size={24} />;
    }
  };

  return (
    <ToastContainer type={type}>
      {getIcon()}
      <Message>{message}</Message>
      <CloseButton onClick={() => setVisible(false)}>
        <X size={18} />
      </CloseButton>
    </ToastContainer>
  );
};

Toast.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['info', 'success', 'error', 'warning']),
  duration: PropTypes.number,
  onClose: PropTypes.func.isRequired,
};

export default Toast;