import React from 'react';
import styled from 'styled-components';
import avatarImage from "../../assets/avatarImage.png"
const Container = styled.div`
  background-color: #e6f2ff;
  border-radius: 20px;
  padding: 20px;
  max-width: 900px;
  margin-left: 2rem;
  margin-bottom: 2rem;
`;

const RatingOverview = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const OverallRating = styled.div`
  background-color: white;
  border-radius: 15px;
  padding: 20px;
  text-align: center;
  margin-right: 20px;
`;

const RatingNumber = styled.h2`
  margin: 0;
  font-size: 24px;
`;

const Stars = styled.div`
  color: #ffc107;
  font-size: 24px;
  margin: 10px 0;
`;

const TopRating = styled.p`
  margin: 0;
  color: #666;
`;

const RatingBars = styled.div`
  flex-grow: 1;
`;

const RatingBar = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const StarLabel = styled.span`
  width: 60px;
  text-align: right;
  margin-right: 10px;
  color: #666;
`;

const BarContainer = styled.div`
  flex-grow: 1;
  background-color: #d9d9d9;
  height: 8px;
  border-radius: 4px;
`;

const Bar = styled.div`
  background-color: #49BBBD;
  height: 100%;
  border-radius: 4px;
  width: ${props => props.percentage}%;
`;

const Review = styled.div`
  margin-bottom: 20px;
`;

const ReviewHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const ReviewerName = styled.span`
  font-weight: bold;
  margin-right: 10px;
`;

const ReviewStars = styled.div`
  color: #ffc107;
  flex-grow: 1;
`;

const ReviewTime = styled.span`
  color: #666;
`;

const ReviewText = styled.p`
  margin: 0;
  color: #333;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #ccc;
  margin: 20px 0;
`;

const Rating = () => {
  return (
    <Container>
      <RatingOverview>
        <OverallRating>
          <RatingNumber>4 out of 5</RatingNumber>
          <Stars>★★★★☆</Stars>
          <TopRating>Top Rating</TopRating>
        </OverallRating>
        <RatingBars>
          {[5, 4, 3, 2, 1].map(stars => (
            <RatingBar key={stars}>
              <StarLabel>{stars} Stars</StarLabel>
              <BarContainer>
                <Bar percentage={Math.random() * 100} />
              </BarContainer>
            </RatingBar>
          ))}
        </RatingBars>
      </RatingOverview>
      
      {[1, 2].map(index => (
        <React.Fragment key={index}>
          <Review>
            <ReviewHeader>
              <Avatar src={avatarImage} alt="Lina" />
              <ReviewerName>Lina</ReviewerName>
              <ReviewStars>★★★★★</ReviewStars>
              <ReviewTime>3 Month</ReviewTime>
            </ReviewHeader>
            <ReviewText>
              Class, launched less than a year ago by Blackboard co-founder Michael Chasen,
              integrates exclusively...
            </ReviewText>
          </Review>
          {index === 1 && <Divider />}
        </React.Fragment>
      ))}
    </Container>
  );
};

export default Rating;