import { createContext, useContext, useState } from 'react';
import { CloseButton, ModalContainer, ModalOverlay } from '../styles/modalStyles';

const ModalContext = createContext();

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within ModalProvider');
  }
  return context;
};
export function ModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [modalConfig, setModalConfig] = useState({ maxWidth: '500px' });

  const openModal = (content, config = {}) => {
    setModalContent(content);
    setModalConfig({ maxWidth: config.maxWidth || '500px' });
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';

    setTimeout(() => {
      setModalContent(null);
    }, 300);
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal, isOpen }}>
      {children}
      
      {}
      <ModalOverlay $isOpen={isOpen} onClick={closeModal}>
        <ModalContainer 
          $isOpen={isOpen} 
          $maxWidth={modalConfig.maxWidth}
          onClick={(e) => e.stopPropagation()}
        >
          <CloseButton onClick={closeModal}>×</CloseButton>
          {modalContent}
        </ModalContainer>
      </ModalOverlay>
    </ModalContext.Provider>
  );
}