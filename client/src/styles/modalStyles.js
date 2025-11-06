import styled from 'styled-components';
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(4px);
  opacity: ${props => props.$isOpen ? 1 : 0};
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  transition: opacity 0.3s ease, visibility 0.3s ease;
`;

export const ModalContainer = styled.div`
  background: white;
  border-radius: 20px;
  padding: 40px;
  max-width: 500px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  transform: ${props => props.$isOpen ? 'scale(1)' : 'scale(0.9)'};
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #999;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s;

  &:hover {
    background-color: #f5f5f5;
    color: #333;
  }
`;


export const TabContainer = styled.div`
  display: flex;
  background-color: #E8F5F5;
  border-radius: 30px;
  padding: 5px;
  margin-bottom: 30px;
`;

export const Tab = styled.button`
  flex: 1;
  padding: 12px;
  border: none;
  background-color: ${props => props.$isActive ? '#53BFBA' : 'transparent'};
  color: ${props => props.$isActive ? 'white' : '#666'};
  border-radius: 25px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s;

  &:hover {
    background-color: ${props => props.$isActive ? '#53BFBA' : 'rgba(83, 191, 186, 0.1)'};
  }
`;