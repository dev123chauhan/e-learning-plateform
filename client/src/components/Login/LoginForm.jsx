import { useState } from "react";
import { toast } from 'sonner';
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { useAuth } from "../../context/AuthContext";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { useModal } from "../../context/ModalContext";
import { 
  Button, 
  CheckboxContainer, 
  CheckboxInput, 
  CheckboxLabel, 
  CheckboxWrapper, 
  ForgotPassword, 
  Form, 
  Input, 
  InputLabel, 
  InputWrapper, 
  ShowPasswordIcon 
} from "../../styles/loginFormStyles";
import { authService } from "../../api/services/authService";
import { validateLoginForm, getFieldError } from "../../utils/validations";
import Errors from "../Notification/Errors";
import { getInputStyles } from "../../utils/inputStyles";

export default function LoginForm() {
  const { closeModal } = useModal(); 
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); 
  const [isChecked, setIsChecked] = useState(false);
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [touched, setTouched] = useState({ email: false, password: false });
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (touched.email) {
      const error = getFieldError('email', value);
      setErrors({ ...errors, email: error });
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (touched.password) {
      const error = getFieldError('password', value);
      setErrors({ ...errors, password: error });
    }
  };

  const handleBlur = (field) => {
    setTouched({ ...touched, [field]: true });
    const value = field === 'email' ? email : password;
    const error = getFieldError(field, value);
    setErrors({ ...errors, [field]: error });
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    

    setTouched({ email: true, password: true });
    

    const validation = validateLoginForm(email, password);
    
    if (!validation.isValid) {
      setErrors(validation.errors);
      toast.error('Please enter all the credientials');
      return;
    }
    
    setLoading(true); 
    try {
      const data = await authService.login(email, password);
      login(data.token);
      toast.success('Successfully logged in!');
      navigate('/');
      closeModal(); 
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
        onChange={handleEmailChange}
        onBlur={() => handleBlur('email')}
        placeholder="Enter your email address" 
        style={getInputStyles(touched.email, errors.email)}
      />
      <Errors message={errors.email} show={touched.email} />
      
      <InputLabel>Password</InputLabel>
      <InputWrapper>
        <Input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={handlePasswordChange}
          onBlur={() => handleBlur('password')}
          placeholder="Enter your password"
           style={{ 
            marginBottom: 0,
            ...getInputStyles(touched.password, errors.password)
          }}
        />
        <ShowPasswordIcon onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
        </ShowPasswordIcon>
      </InputWrapper>
      <Errors message={errors.password} show={touched.password} />

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