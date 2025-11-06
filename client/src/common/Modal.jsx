import { useState } from 'react';
import { Tab, TabContainer } from '../styles/modalStyles';
import LoginForm from '../components/Login/LoginForm';
import RegisterForm from '../components/Register/RegisterForm';

export default function Modal() {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <>

      <TabContainer>
        <Tab
          $isActive={activeTab === 'login'}
          onClick={() => setActiveTab('login')}
          type="button"
        >
          Login
        </Tab>
        <Tab
          $isActive={activeTab === 'register'}
          onClick={() => setActiveTab('register')}
          type="button"
        >
          Register
        </Tab>
      </TabContainer>

      {activeTab === 'login' ? <LoginForm /> : <RegisterForm />}
    </>
  );
}