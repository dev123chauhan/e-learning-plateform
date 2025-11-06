import styled from 'styled-components';
export const Container = styled.div`
  background-color: #e6f2ff;
  border-radius: 20px;
  padding: 20px;
  max-width: 900px;
  margin-left: 2rem;
  margin-bottom: 2rem;
`;

export const RatingOverview = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const OverallRating = styled.div`
  background-color: white;
  border-radius: 15px;
  padding: 20px;
  text-align: center;
  margin-right: 20px;
`;

export const RatingNumber = styled.h2`
  margin: 0;
  font-size: 24px;
`;

export const Stars = styled.div`
  color: #ffc107;
  font-size: 24px;
  margin: 10px 0;
`;

export const TopRating = styled.p`
  margin: 0;
  color: #666;
`;

export const RatingBars = styled.div`
  flex-grow: 1;
`;

export const RatingBar = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const StarLabel = styled.span`
  width: 60px;
  text-align: right;
  margin-right: 10px;
  color: #666;
`;

export const BarContainer = styled.div`
  flex-grow: 1;
  background-color: #d9d9d9;
  height: 8px;
  border-radius: 4px;
`;

export const Bar = styled.div`
  background-color: #49BBBD;
  height: 100%;
  border-radius: 4px;
  width: ${props => props.percentage}%;
`;

export const Review = styled.div`
  margin-bottom: 20px;
`;

export const ReviewHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const ReviewerName = styled.span`
  font-weight: bold;
  margin-right: 10px;
`;

export const ReviewStars = styled.div`
  color: #ffc107;
  flex-grow: 1;
`;

export const ReviewTime = styled.span`
  color: #666;
`;

export const ReviewText = styled.p`
  margin: 0;
  color: #333;
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid #ccc;
  margin: 20px 0;
`;