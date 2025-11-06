
import { CiEdit } from "react-icons/ci";
import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 64px;
  margin-bottom: 192px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const IconButton = styled.label`
  cursor: pointer;
  position: relative;
  width: fit-content;
`;

export const StyledAvatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
`;

export const EditIcon = styled(CiEdit)`
  position: absolute;
  bottom: 32px;
  right: 31px;
  color: white;
  background-color: #49BBBD;
  border-radius: 50%;
  padding: 10px;
  font-size: 2rem;
  opacity: 0.5
`;

export const Title = styled.h6`
  margin-top: 16px;
  text-align: center;
`;

export const Subtitle = styled.span`
  color: #6c757d;
  text-align: center;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #49BBBD;
  color: white;
  font-size: 16px;
  cursor: pointer;
`;