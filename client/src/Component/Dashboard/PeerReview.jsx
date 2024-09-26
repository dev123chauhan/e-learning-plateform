import  { useState } from 'react';
import styled from 'styled-components';
import { Star, Send } from 'lucide-react';

const PageContainer = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  color: #333;
  margin-bottom: 20px;
`;

const AssignmentDetails = styled.div`
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
`;

const ReviewSection = styled.div`
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
`;

const ReviewForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const RatingLabel = styled.span`
  margin-right: 10px;
`;

const StarContainer = styled.div`
  display: flex;
`;

const StarIcon = styled(Star)`
  cursor: pointer;
  color: ${props => props.filled ? '#ffc107' : '#ddd'};
`;

const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #49BBBD;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  
  &:hover {
    background-color: #49BBBD;
  }
`;

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