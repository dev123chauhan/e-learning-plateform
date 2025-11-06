import { Button, Container, Controls, GaugeArc, GaugeCenter, GaugeContainer, GaugeFill, GaugeNeedle, Points, PointsText, Select, Title } from "../../styles/performanceStyles";
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