import { Star } from 'lucide-react';
import styled from 'styled-components';
export const PageContainer = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
`;

export const Title = styled.h1`
  color: #333;
  margin-bottom: 20px;
`;

export const AssignmentDetails = styled.div`
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
`;

export const ReviewSection = styled.div`
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
`;

export const ReviewForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const RatingLabel = styled.span`
  margin-right: 10px;
`;

export const StarContainer = styled.div`
  display: flex;
`;

export const StarIcon = styled(Star)`
  cursor: pointer;
  color: ${props => props.filled ? '#ffc107' : '#ddd'};
`;

export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #49BBBD;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 2rem;
  cursor: pointer;
  font-size: 16px;
  
  &:hover {
    background-color: #49BBBD;
  }
`;