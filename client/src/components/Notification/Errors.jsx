import styled from 'styled-components';
const ErrorMessage = styled.div`
  color: #ff5858;
  font-size: 12px;
  margin-top: -10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export default function Errors({ message, show }) {
  if (!show || !message) return null;

  return (
    <ErrorMessage>
      <span>{message}</span>
    </ErrorMessage>
  );
}