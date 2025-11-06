import styled from 'styled-components';
export const QuizContainer = styled.div`
  margin: 0 auto;
  padding: 1.5rem;
  border-radius: 0.5rem;
`;

export const QuizTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #49BBBD;
`;

export const QuestionContainer = styled.div`
  margin-bottom: 1.5rem;
`;

export const QuestionText = styled.p`
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const OptionsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const OptionItem = styled.div`
  padding: 0.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  ${({ $isSelected, $isCorrect, $showResults }) => {
    if ($showResults) {
      if ($isCorrect) {
        return `
          background-color: #d1fae5;
          border-color: #34d399;
        `;
      } else if ($isSelected) {
        return `
          background-color: #fee2e2;
          border-color: #f87171;
        `;
      }
    } else if ($isSelected) {
      return `
        background-color: #dbeafe;
        border-color: #3b82f6;
      `;
    }
    return `
      &:hover {
        background-color: #f3f4f6;
      }
    `;
  }}
`;

export const SubmitButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #49BBBD;
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;

  &:hover {
    background-color: #49BBBD;
  }

  &:disabled {
    background-color: #9ca3af;
    cursor: not-allowed;
  }
`;