import styled from 'styled-components';
export const SuccessSection = styled.section`
  text-align: center;
  padding: 50px 20px;
  max-width: 1600px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 36px;
  }
`;

export const Description = styled.p`
  font-size: 14px;
  color: #666;
  max-width: 800px;
  margin: 0 auto 40px;
  line-height: 1.6;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const MetricsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const MetricItem = styled.div`
  flex: 1;
  min-width: 120px;
  margin: 10px;
`;

export const MetricValue = styled.div`
  font-size: 36px;
  background: linear-gradient(to right, #49BBBD, #136CB5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    font-size: 48px;
  }
`;

export const MetricLabel = styled.div`
  font-size: 16px;
  color: #333;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;