import styled from 'styled-components';
export const Container = styled.div`
  padding: 16px;
  margin-bottom: 24px;
`;

export const Title = styled.h2`
  margin-bottom: 16px;
`;

export const Subtitle = styled.h3`
  margin-bottom: 16px;
`;

export const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -16px;
  margin-left: -16px;
`;

export const GridItem = styled.div`
  padding: 8px;
  flex: 0 0 100%;
  max-width: 100%;

  @media (min-width: 600px) {
    flex: 0 0 100%;
    ${'' }
  }
`;

export const InfoPaper = styled.div`
  padding: 16px;
  display: flex; 
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
`;

export const Label = styled.span`
  font-weight: bold;
`;

export const Text = styled.span`
  color: #666;
`;