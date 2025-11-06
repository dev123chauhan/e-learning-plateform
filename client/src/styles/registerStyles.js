import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputLabel = styled.label`
  margin-bottom: 8px;
  color: #333;
  font-size: 14px;
  font-weight: 500;
`;

export const Input = styled.input`
  margin-bottom: 20px;
  padding: 12px 16px;
  border: 2px solid #E0E0E0;
  border-radius: 25px;
  font-size: 16px;
  width: 100%;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: #53BFBA;
  }

  &::placeholder {
    color: #ccc;
  }
`;

export const Button = styled.button`
  padding: 14px;
  background-color: #53BFBA;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 16px;
  font-weight: 600;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #45A9A5;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(83, 191, 186, 0.3);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

export const ShowPasswordIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
  cursor: pointer;
  color: #53BFBA;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
`;