import { BarChart, Bar, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Users, Clock, Star, BookOpen } from 'lucide-react';
import { Card, CardContent, CardTitle, CardValue, ChartContainer, ChartTitle, Grid, PageContainer, Title } from '../../styles/courseReportStyles';
import { performanceStatLists } from '../../lib/performanceStatLists';
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
          <BarChart data={performanceStatLists}>
            <CartesianGrid strokeDasharray="3 3" />
            {/* <XAxis dataKey="name" />
            <YAxis /> */}
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