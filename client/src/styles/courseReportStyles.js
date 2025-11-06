import styled from 'styled-components';
export const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

export const Title = styled.h1`
  color: #333;
  margin-bottom: 20px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`;

export const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const CardTitle = styled.h3`
  font-size: 16px;
  color: #666;
  margin-bottom: 10px;
`;

export const CardContent = styled.div`
  display: flex;
  align-items: center;
`;

export const CardValue = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-left: 10px;
`;

export const ChartContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
`;

export const ChartTitle = styled.h2`
  font-size: 18px;
  color: #333;
  margin-bottom: 20px;
`;