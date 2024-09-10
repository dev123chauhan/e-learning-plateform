import  { useState, useEffect } from 'react';
import styled from 'styled-components';

const SuccessSection = styled.section`
  text-align: center;
  padding: 50px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 36px;
  }
`;

const Description = styled.p`
  font-size: 14px;
  color: #666;
  max-width: 800px;
  margin: 0 auto 40px;
  line-height: 1.6;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

const MetricsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const MetricItem = styled.div`
  flex: 1;
  min-width: 120px;
  margin: 10px;
`;

const MetricValue = styled.div`
  font-size: 36px;
  background: linear-gradient(to right, #49BBBD, #136CB5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    font-size: 48px;
  }
`;

const MetricLabel = styled.div`
  font-size: 16px;
  color: #333;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

const Success = () => {
  const [counts, setCounts] = useState({});

  const metrics = [
    { key: 'students', value: 15000, label: 'Students', suffix: '+' },
    { key: 'success', value: 75, label: 'Total success', suffix: '%' },
    { key: 'questions', value: 35, label: 'Main questions', suffix: '' },
    { key: 'experts', value: 26, label: 'Chief experts', suffix: '' },
    { key: 'experience', value: 16, label: 'Years of experience', suffix: '' },
  ];

  useEffect(() => {
    const intervalIds = metrics.map(metric => {
      return setInterval(() => {
        setCounts(prevCounts => ({
          ...prevCounts,
          [metric.key]: (prevCounts[metric.key] || 0) + 1
        }));
      }, 3000 / metric.value); // Adjust speed based on the target value
    });

    return () => intervalIds.forEach(clearInterval);
  }, []);

  const formatCount = (count, target, suffix) => {
    const formattedCount = count % (target + 1);
    return `${formattedCount}${suffix}`;
  };

  return (
    <SuccessSection>
      <Title>Our Success</Title>
      <Description>
        Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae sollicitudin at nec
        nam et pharetra gravida. Adipiscing a quis ultrices eu ornare tristique vel nisl orci.
      </Description>
      <MetricsContainer>
        {metrics.map((metric) => (
          <MetricItem key={metric.key}>
            <MetricValue>
              {formatCount(counts[metric.key] || 0, metric.value, metric.suffix)}
            </MetricValue>
            <MetricLabel>{metric.label}</MetricLabel>
          </MetricItem>
        ))}
      </MetricsContainer>
    </SuccessSection>
  );
};

export default Success;