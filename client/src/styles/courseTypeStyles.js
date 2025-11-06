import styled from 'styled-components';
export const CardContainer = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
`;

export const Card = styled.div`
  background-color: ${props => props.$bgColor};
  border-radius: 12px;
  padding: 20px;
  width: 200px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const IconWrapper = styled.div`
  background-color: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #666;
`;

export const Stat = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;