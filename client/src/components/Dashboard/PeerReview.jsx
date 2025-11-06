import  { useState } from 'react';
import {  Send } from 'lucide-react';
import { AssignmentDetails, PageContainer, RatingContainer, RatingLabel, ReviewForm, ReviewSection, StarContainer, StarIcon, SubmitButton, TextArea, Title } from '../../styles/peerReviewStyles';

const PeerReview = () => {
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log('Submitted review:', review, 'with rating:', rating);
  
    setReview('');
    setRating(0);
  };

  return (
    <PageContainer>
      <Title>Peer Review Assignment</Title>
      
      <AssignmentDetails>
        <h2>Assignment: React Component Development</h2>
        <p>Review your peer is implementation of a React component for a user profile page. 
         Consider the code structure, component reusability, and adherence to React best practices.</p>
      </AssignmentDetails>

      <ReviewSection>
        <h3>Your Review</h3>
        <ReviewForm onSubmit={handleSubmit}>
          <TextArea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Enter your review here..."
          />
          <RatingContainer>
            <RatingLabel>Rating:</RatingLabel>
            <StarContainer>
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon
                  key={star}
                  size={24}
                  filled={star <= rating ? "true" : "false"}
                  onClick={() => setRating(star)}
                />
              ))}
            </StarContainer>
          </RatingContainer>
          <SubmitButton type="submit">
            <Send size={18} style={{ marginRight: '8px' }} />
            Submit Review
          </SubmitButton>
        </ReviewForm>
      </ReviewSection>
    </PageContainer>
  );
};

export default PeerReview;