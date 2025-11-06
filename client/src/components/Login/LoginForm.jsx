import { useState } from "react";
import { toast } from 'sonner';
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import useAuth from "../../hooks/useAuth";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { useModal } from "../../context/ModalContext";
import { Button, CheckboxContainer, CheckboxInput, CheckboxLabel, CheckboxWrapper, ForgotPassword, Form, Input, InputLabel, InputWrapper, ShowPasswordIcon } from "../../styles/loginFormStyles";
import { authService } from "../../api/services/authService";
export default function LoginForm() {
  const { closeModal } = useModal(); // ADD
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); 
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();
  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true); 
    try {
      const data = await authService.login(email, password);
      login(data.token);
      toast.success('Successfully logged in!');
      closeModal(); 
      setTimeout(() => {
        navigate('/');
      }, 1000);
    } catch (error) {
      toast.error('Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <Form onSubmit={handleLogin}>
      <InputLabel>Email address</InputLabel>
      <Input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Enter your email address" 
        required
      />
      
      <InputLabel>Password</InputLabel>
      <InputWrapper>
        <Input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
          style={{ marginBottom: 0 }}
        />
        <ShowPasswordIcon onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
        </ShowPasswordIcon>
      </InputWrapper>

      <CheckboxContainer>
        <CheckboxWrapper>
          <CheckboxInput
            type="checkbox"
            id="remember"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <CheckboxLabel htmlFor="remember">Remember me</CheckboxLabel>
        </CheckboxWrapper>
        <ForgotPassword href="#">Forgot Password?</ForgotPassword>
      </CheckboxContainer>

      <Button type="submit" disabled={loading}>
        {loading ? <ClipLoader size={20} color="#fff" /> : "Login"}
      </Button>
    </Form>
  );
}