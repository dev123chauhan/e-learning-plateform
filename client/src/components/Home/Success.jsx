import { useState, useEffect } from "react";
import { Description, MetricItem, MetricLabel, MetricsContainer, MetricValue, SuccessSection, Title } from "../../styles/successStyles";
import { successMatrixLists } from "../../lib/successMetrixLists";
const Success = () => {
  const [counts, setCounts] = useState({});
  useEffect(() => {
    const intervalIds = successMatrixLists.map((metric) => {
      return setInterval(() => {
        setCounts((prevCounts) => ({
          ...prevCounts,
          [metric.key]: (prevCounts[metric.key] || 0) + 1,
        }));
      }, 3000 / metric.value);
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
        Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae
        sollicitudin at nec nam et pharetra gravida. Adipiscing a quis ultrices
        eu ornare tristique vel nisl orci.
      </Description>
      <MetricsContainer>
        {successMatrixLists.map((metric) => (
          <MetricItem key={metric.key}>
            <MetricValue>
              {formatCount(
                counts[metric.key] || 0,
                metric.value,
                metric.suffix
              )}
            </MetricValue>
            <MetricLabel>{metric.label}</MetricLabel>
          </MetricItem>
        ))}
      </MetricsContainer>
    </SuccessSection>
  );
};

export default Success;
