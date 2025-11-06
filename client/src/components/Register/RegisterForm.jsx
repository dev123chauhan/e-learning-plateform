import { useState } from 'react';
import { toast } from 'sonner';
import { ClipLoader } from "react-spinners";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { Button, Form, Input, InputLabel, InputWrapper, ShowPasswordIcon } from '../../styles/registerStyles';
import { authService } from '../../api/services/authService';

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { name, email, password } = formData;

    try {
      await authService.register(name, email, password);
      toast.success("Successfully registered! Please login.");
      setFormData({ name: "", email: "", password: "" });
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
        placeholder="Enter your username" 
        required
      />
      
      <InputLabel>Email Address</InputLabel>
      <Input 
        type="email" 
        name="email" 
        value={formData.email} 
        onChange={handleChange} 
        placeholder="Enter your email address" 
        required
      />
      
      <InputLabel>Password</InputLabel>
      <InputWrapper>
        <Input
          type={showPassword ? "text" : "password"}
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          required
          style={{ marginBottom: 0 }}
        />
        <ShowPasswordIcon onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
        </ShowPasswordIcon>
      </InputWrapper>
      
      <Button type="submit" disabled={loading}>
        {loading ? <ClipLoader size={20} color="#fff" /> : "Register"}
      </Button>
    </Form>
  );
}





























      

      


      





















      









      















      








