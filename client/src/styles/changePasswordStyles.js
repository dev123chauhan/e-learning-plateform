import styled from "styled-components";
export const Container = styled.div`
  margin-top: 64px;
  margin-bottom: 192px;
  margin-right: 20px;
`;

export const Title = styled.h4`
  margin-bottom: 16px;
  font-size: 1.5rem;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const InputField = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding-right: 40px; 
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px 0;
  border: none;
  background-color: #49bbbd;
  color: white;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const ShowPasswordIcon = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #53bfba;
  font-size: 1.4rem;
`;