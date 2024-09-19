import styled from 'styled-components';

const Container = styled.div`
  font-family: Arial, sans-serif;
  width: 500px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 20px;
`;

const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Button = styled.button`
  color: #49BBBD;
  background: none;
  border: none;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;
`;

const Select = styled.select`
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #e0e0e0;
`;

const GaugeContainer = styled.div`
  position: relative;
  width: 200px;
  height: 100px;
  margin: 0 auto 20px;
`;

const GaugeArc = styled.div`
  width: 200px;
  height: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
  border: 10px solid #f0f0f0;
  border-bottom: 0;
  box-sizing: border-box;
`;

const GaugeFill = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 200px;
  height: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
  border: 10px solid #49BBBD;
  border-bottom: 0;
  box-sizing: border-box;
  ${'' /* clip-path: polygon(50% 50%, 0% 0%, 100% 0%); */}
  clip-path: polygon(0% 105%, 0% 0%, 84% 0%);
`;

const GaugeNeedle = styled.div`
  position: absolute;
  bottom: 0;
  left: 100px;
  width: 4px;
  height: 80px;
  background-color: #ff6b6b;
  transform-origin: bottom center;
  transform: rotate(45deg);
`;

const GaugeCenter = styled.div`
  position: absolute;
  bottom: -5px;
  left: 95px;
  width: 10px;
  height: 10px;
  background-color: #ff6b6b;
  border-radius: 50%;
`;

const PointsText = styled.p`
  text-align: center;
  font-size: 16px;
  margin: 0;
`;

const Points = styled.span`
  font-weight: bold;
  font-size: 24px;
`;

const Performance = () => {
  return (
    <Container>
      <Title>Performance</Title>
      <Controls>
        <Button>Point Progress</Button>
        <Select>
          <option>Monthly</option>
        </Select>
      </Controls>
      <GaugeContainer>
        <GaugeArc />
        <GaugeFill />
        <GaugeNeedle />
        <GaugeCenter />
      </GaugeContainer>
      <PointsText>Your Point: <Points>8.966</Points></PointsText>
    </Container>
  );
};

export default Performance;