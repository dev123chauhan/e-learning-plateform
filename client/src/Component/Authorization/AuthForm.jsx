




import { useState } from 'react';
import styled from 'styled-components';
import authImage from "../../assets/authImage.jpg";
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { Link } from 'react-router-dom';
import { IoIosArrowRoundBack } from "react-icons/io";
const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  flex: 1.5;
  background-image: url(${authImage});
  background-size: cover;
  background-position: center;
  position: relative;
  height: 300px;

  @media (min-width: 768px) and (max-width: 1200px) {
    flex: 1;
    height: 50vh; /* Adjust height as needed */
  }

  @media (min-width: 1201px) {
    height: 100vh;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

const TextOverlay = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`;

const FormContainer = styled.div`
  flex: 1;
  padding: 20px;
  background-color: white;

  @media (min-width: 768px) and (max-width: 1200px) {
    flex: 1;
    padding: 40px;
    height: 50vh; /* Adjust height as needed */
  }

  @media (min-width: 1201px) {
    padding: 40px;
    border-radius: 0 10px 10px 0;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const TabContainer = styled.div`
  display: flex;
  background-color: #E0F4FF;
  border-radius: 25px;
  padding: 5px;
  margin-bottom: 20px;
`;

const Tab = styled.button`
  flex: 1;
  padding: 10px 20px;
  border: none;
  background-color: ${({ $isActive }) => ($isActive ? '#53BFBA' : 'transparent')};
  color: ${({ $isActive }) => ($isActive ? 'white' : 'black')};
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s;
`;

const Description = styled.p`
  margin-bottom: 20px;
  color: #666;
`;
const styleBack ={
  display: "flex",
  alignItems:"center",
  gap:"5px",
  color: "#49BBBD",
  marginBottom:"2rem"
}

const AuthForm = () => {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <Container>
      <ImageContainer>
        <TextOverlay>
          {/* <h2>Unlock Your Learning Potential</h2>
          <p>Explore courses, develop new skills, and achieve your goals with our E-learning platform.</p> */}
        </TextOverlay>
      </ImageContainer>
      <FormContainer>
      <Link to="/" style={styleBack}><IoIosArrowRoundBack />Back to home</Link>
        <Title>Welcome to E-learning!</Title>
        <TabContainer>
          <Tab 
            $isActive={activeTab === 'login'}
            onClick={() => setActiveTab('login')}
          >
            Login
          </Tab>
          <Tab 
            $isActive={activeTab === 'register'}
            onClick={() => setActiveTab('register')}
          >
            Register
          </Tab>
        </TabContainer>
        <Description>
          Join our E-learning platform to access a wide range of courses and resources tailored to help you succeed.
        </Description>
        {activeTab === 'login' ? <LoginForm /> : <RegisterForm />}
      </FormContainer>
    </Container>
  );
};

export default AuthForm;

