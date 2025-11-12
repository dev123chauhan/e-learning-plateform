import { useState } from 'react';
import { toast } from 'sonner';
import { ClipLoader } from "react-spinners";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { 
  Button, 
  Form, 
  Input, 
  InputLabel, 
  InputWrapper, 
  ShowPasswordIcon 
} from '../../styles/registerStyles';
import { authService } from '../../api/services/authService';
import { validateRegisterForm, getFieldError } from '../../utils/validations';
import Errors from '../Notification/Errors';
import { getInputStyles } from '../../utils/inputStyles';

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({ name: '', email: '', password: '' });
  const [touched, setTouched] = useState({ name: false, email: false, password: false });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    

    if (touched[name]) {
      const error = getFieldError(name, value);
      setErrors({ ...errors, [name]: error });
    }
  };

  const handleBlur = (fieldName) => {
    setTouched({ ...touched, [fieldName]: true });
    const error = getFieldError(fieldName, formData[fieldName]);
    setErrors({ ...errors, [fieldName]: error });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    

    setTouched({ name: true, email: true, password: true });
    
    const { name, email, password } = formData;
    

    const validation = validateRegisterForm(name, email, password);
    
    if (!validation.isValid) {
      setErrors(validation.errors);
      toast.error('Please fix the errors in the form');
      return;
    }
    
    setLoading(true);

    try {
      await authService.register(name, email, password);
      toast.success("Successfully registered! Please login.");
      setFormData({ name: "", email: "", password: "" });
      setTouched({ name: false, email: false, password: false });
      setErrors({ name: '', email: '', password: '' });
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed. Please try again.");
      console.error("Error registering user:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>  
      <InputLabel>Username</InputLabel>
      <Input 
        type="text" 
        value={formData.name} 
        name="name" 
        onChange={handleChange}
        onBlur={() => handleBlur('name')}
        placeholder="Enter your username" 
        style={getInputStyles(touched.name, errors.name)}
      />
      <Errors message={errors.name} show={touched.name} />
      
      <InputLabel>Email Address</InputLabel>
      <Input 
        type="email" 
        name="email" 
        value={formData.email} 
        onChange={handleChange}
        onBlur={() => handleBlur('email')}
        placeholder="Enter your email address" 
        style={getInputStyles(touched.email, errors.email)}
      />
      <Errors message={errors.email} show={touched.email} />
      
      <InputLabel>Password</InputLabel>
      <InputWrapper>
        <Input
          type={showPassword ? "text" : "password"}
          name="password"
          value={formData.password}
          onChange={handleChange}
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
      
      <Button type="submit" disabled={loading}>
        {loading ? <ClipLoader size={20} color="#fff" /> : "Register"}
      </Button>
    </Form>
  );
}