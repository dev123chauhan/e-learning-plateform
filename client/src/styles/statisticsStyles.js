import styled from 'styled-components';
export const ChartContainer = styled.div`
  width: 100%;
  max-width: 500px;
  height: 400px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

export const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const LegendContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
`;

export const LegendItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

export const LegendColor = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  margin-right: 8px;
  background-color: ${props => props.color};
`;