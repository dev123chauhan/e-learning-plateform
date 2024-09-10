import styled from 'styled-components';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Users, Clock, Star, BookOpen } from 'lucide-react';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  color: #333;
  margin-bottom: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`;

const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CardTitle = styled.h3`
  font-size: 16px;
  color: #666;
  margin-bottom: 10px;
`;

const CardContent = styled.div`
  display: flex;
  align-items: center;
`;

const CardValue = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-left: 10px;
`;

const ChartContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
`;

const ChartTitle = styled.h2`
  font-size: 18px;
  color: #333;
  margin-bottom: 20px;
`;

const performanceData = [
  { name: 'Week 1', average: 75 },
  { name: 'Week 2', average: 80 },
  { name: 'Week 3', average: 78 },
  { name: 'Week 4', average: 82 },
  { name: 'Week 5', average: 85 },
  { name: 'Week 6', average: 88 },
];

const CourseReport = () => {
  return (
    <PageContainer>
      <Title>Course Report: Introduction to React</Title>
      
      <Grid>
        <Card>
          <CardTitle>Total Students</CardTitle>
          <CardContent>
            <Users size={24} color="#4CAF50" />
            <CardValue>256</CardValue>
          </CardContent>
        </Card>
        <Card>
          <CardTitle>Average Time Spent</CardTitle>
          <CardContent>
            <Clock size={24} color="#2196F3" />
            <CardValue>4.5 hours/week</CardValue>
          </CardContent>
        </Card>
        <Card>
          <CardTitle>Overall Rating</CardTitle>
          <CardContent>
            <Star size={24} color="#FFC107" />
            <CardValue>4.8/5.0</CardValue>
          </CardContent>
        </Card>
        <Card>
          <CardTitle>Completion Rate</CardTitle>
          <CardContent>
            <BookOpen size={24} color="#9C27B0" />
            <CardValue>89%</CardValue>
          </CardContent>
        </Card>
      </Grid>

      <ChartContainer>
        <ChartTitle>Student Performance Over Time</ChartTitle>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="average" fill="#FF9053" name="Average Score" />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>

      <Card>
        <CardTitle>Key Insights</CardTitle>
        <ul>
          <li>Student engagement has increased by 15% compared to the previous month.</li>
          <li>The most challenging topic for students was State Management in React.</li>
          <li>95% of students found the course content relevant to their learning goals.</li>
          <li>Theres a strong correlation between time spent on exercises and overall performance.</li>
        </ul>
      </Card>
    </PageContainer>
  );
};

export default CourseReport;