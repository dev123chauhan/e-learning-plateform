import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ChartContainer = styled.div`
  width: 100%;
  max-width: 500px;
  height: 400px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const LegendContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const LegendColor = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  margin-right: 8px;
  background-color: ${props => props.color};
`;

const data = [
  { name: 'Jan', Study: 40, Exams: 20 },
  { name: 'Feb', Study: 20, Exams: 30 },
  { name: 'Mar', Study: 60, Exams: 10 },
  { name: 'Apr', Study: 35, Exams: 25 },
  { name: 'May', Study: 15, Exams: 10 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ background: '#fff', padding: '10px', border: '1px solid #ccc' }}>
        <p>{`${label}`}</p>
        <p>{`Study: ${payload[0].value} Hr`}</p>
        <p>{`Exams: ${payload[1].value} Hr`}</p>
      </div>
    );
  }
  return null;
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number,
    })
  ),
  label: PropTypes.string,
};


const StatisticsSection = () => {
  return (
    <ChartContainer>
      <Title>Hours Spent</Title>
      <LegendContainer>
        <LegendItem>
          <LegendColor color="#FF9053" />
          <span>Study</span>
        </LegendItem>
        <LegendItem>
          <LegendColor color="#F8EFE2" />
          <span>Exams</span>
        </LegendItem>
      </LegendContainer>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="Study" stackId="a" fill="#FF9053" />
          <Bar dataKey="Exams" stackId="a" fill="#F8EFE2" />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default StatisticsSection;
