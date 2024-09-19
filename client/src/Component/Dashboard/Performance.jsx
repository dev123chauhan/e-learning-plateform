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
  padding: 5px 10px;
  font-size: 16px;
  border-radius: 8px;
  border: 2px solid #e0e0e0;
  background-color: #ffffff;
  color: #333333;
  cursor: pointer;
  transition: all 0.3s ease;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E");
  background-repeat: no-repeat;
  background-position: right 12px top 50%;
  background-size: 12px auto;
  padding-right: 20px;

  &:hover, &:focus {
    border-color: #007CB2;
    box-shadow: 0 0 0 2px rgba(0, 124, 178, 0.2);
    outline: none;
  }

  &:active {
    background-color: #f0f0f0;
  }

  option {
    font-weight: normal;
    font-size: 16px;
    padding: 10px;
  }
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
      <option>Quarterly</option>
      <option>Yearly</option>
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