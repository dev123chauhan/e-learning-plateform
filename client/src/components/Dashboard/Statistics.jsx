import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  ChartContainer,
  LegendColor,
  LegendContainer,
  LegendItem,
  Title,
} from "../../styles/statisticsStyles";
import { statisticsLists } from "../../lib/statisticsLists";
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          background: "#fff",
          padding: "10px",
          border: "1px solid #ccc",
        }}
      >
        <p>{`${
          typeof label === "number" ? statisticsLists[label].name : label
        }`}</p>
        <p>{`Study: ${payload[0].value} Hr`}</p>
        <p>{`Exams: ${payload[1].value} Hr`}</p>
      </div>
    );
  }
  return null;
};

const CustomXAxis = ({ dataKey = "name", ...props }) => (
  <XAxis dataKey={dataKey} {...props} />
);

const CustomYAxis = ({ ...props }) => <YAxis {...props} />;

const Statistics = () => {
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
        <BarChart data={statisticsLists}>
          <CartesianGrid strokeDasharray="3 3" />
          <CustomXAxis />
          <CustomYAxis />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="Study" stackId="a" fill="#FF9053" />
          <Bar dataKey="Exams" stackId="a" fill="#F8EFE2" />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default Statistics;
