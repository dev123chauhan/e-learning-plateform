import { Card } from "antd";
import styled from "styled-components";
export const CourseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
`;

export const StyledCard = styled(Card)`
  .ant-card-cover img {
    height: 150px;
    object-fit: cover;
  }
`;

export const SkeletonCard = styled(Card)`
  .ant-card-cover {
    height: 150px;
    background: #f0f0f0;
  }
`;