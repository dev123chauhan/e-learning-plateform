import styled from 'styled-components';
export const Section = styled.section`
  text-align: center;
  padding: 50px 20px;
  max-width: 1600px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
  
  span {
    color: #49BBBD;
  }
`;

export const Subtitle = styled.p`
  font-size: 18px;
  color: #696984;
  max-width: 800px;
  margin: 0 auto 40px;
`;

export const FeaturesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FeatureCard = styled.div`
  background: #FFFFFF;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  flex: 1;
`;

export const IconCircle = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  
  svg {
    width: 40px;
    height: 40px;
    fill: #FFFFFF;
  }
`;

export const FeatureTitle = styled.h3`
  font-size: 20px;
  color: #2F327D;
  margin-bottom: 10px;
`;

export const FeatureDescription = styled.p`
  font-size: 14px;
  color: #696984;
`;