import  { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
const zoomIn = keyframes`
  from {
    transform: scale(0.7);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: relative;
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 500px;
  max-width: 100%;
  animation: ${zoomIn} 0.3s ease-in-out;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
`;

const InputField = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Label = styled.label`
  font-size: 14px;
  color: #333;
`;

const SubmitButton = styled.button`
  padding: 10px;
  background-color: #49BBBD;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`;

function Modal({ isOpen, onClose, courseId, onEnrollmentSuccess  }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    duration: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log('Form Data:', formData);
    console.log('Course ID:', courseId);
    try {
      const response = await axios.post('http://localhost:8000/api/enroll', {
        ...formData,
        courseId,
      });
      if (response.data.success) {
        setMessage('Enrollment successful!'); 
        toast.success('Enrollment successful!')
        onEnrollmentSuccess(); // Call this function on successful enrollment
        // Optionally, clear the form or close the modal after a delay
        setTimeout(() => {
          onClose();
        }, 2000);
      }
    } catch (error) {
      setMessage(error.response?.data?.message || 'Enrollment failed. Please try again.');
    }finally {
      setIsLoading(false);
    }
  };

  return (
    <>
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>
        <h2>Course Registration</h2>
        {message && <p>{message}</p>}
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="firstName">First Name</Label>
          <InputField id="firstName" type="text" required value={formData.firstName} onChange={handleChange} />

          <Label htmlFor="lastName">Last Name</Label>
          <InputField id="lastName" type="text" required value={formData.lastName} onChange={handleChange} />

          <Label htmlFor="email">Email</Label>
          <InputField id="email" type="email" required value={formData.email} onChange={handleChange} />

          <Label htmlFor="duration">Course Duration</Label>
          <InputField id="duration" type="text" required value={formData.duration} onChange={handleChange} />

          <SubmitButton type="submit"> {isLoading ?  <Spin indicator={<LoadingOutlined style={{ color: '#ffffff' }} spin  />}  /> : 'Submit'}</SubmitButton>
        </Form>
      </ModalContent>
    </ModalOverlay>
    <Toaster
  position="top-right"
  reverseOrder={false}
/>
    </>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  courseId: PropTypes.string.isRequired,
  onEnrollmentSuccess: PropTypes.func.isRequired,
};

export default Modal;


