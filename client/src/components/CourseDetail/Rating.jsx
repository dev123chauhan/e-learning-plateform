import React from 'react';
import avatarImage from "../../../public/assets/avatarImage.png"
import { Avatar, Bar, BarContainer, Container, Divider, OverallRating, RatingBar, RatingBars, RatingNumber, RatingOverview, Review, ReviewerName, ReviewHeader, ReviewStars, ReviewText, ReviewTime, StarLabel, Stars, TopRating } from '../../styles/ratingStyles';
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