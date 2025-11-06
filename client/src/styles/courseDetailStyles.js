import styled from 'styled-components';
export const Container = styled.div`
  margin: 0 auto;
`;

export const ImageSection = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

export const MainImage = styled.img`
  width: 100%;
  height: 500px;
`;

export const OverlayCard = styled.div`
  position: absolute;
  right: 70px;
  top: 235px;
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
`;

export const SmallImage = styled.img`
  width: 100%;
  object-fit: cover;
  height: 143px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const PriceSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const CurrentPrice = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #000;
`;

export const OriginalPrice = styled.span`
  text-decoration: line-through;
  color: #888;
  margin-left: 10px;
`;

export const Discount = styled.span`
  color: #49BBBD;
  margin-left: 10px;
`;

export const TimeLeft = styled.p`
  color: #888;
  font-size: 14px;
  margin-bottom: 10px;
`;

export const BuyNowButton = styled.button`
  width: 100%;
  padding: 7px;
  background-color: ${props => props.disabled ? '#ccc' : '#49BBBD'};
  cursor: ${props => props.disabled ? 'default' : 'pointer'};
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  margin-bottom: 20px;
`;

export const CourseIncludes = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const CourseItem = styled.li`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  
  &:before {
    content: '✓';
    color: #49BBBD;
    margin-right: 10px;
  }
`;

export const ShareSection = styled.div`
  display: flex;
  gap: 10px;
`;

export const ShareIcon = styled.div`
  width: 30px;
  height: 30px;
  background-color: #f0f0f0;
  border-radius: 50%;
`;
export const OverviewSection = styled.div`
  display: flex;
  gap: 10px;
  margin-left: 1rem;
  margin-bottom: 1rem;
`;
export const OverviewButton = styled.button`
  padding: 10px 20px;
  background-color: ${props => props.active ? '#49BBBD' : '#f0f0f0'};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: ${props => props.active ? 'white' : 'black'};
`;

export const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 10px;
  color: #333;
`;

export const Description = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
  width:1100px;
  color: #666;
`;

export const BulletPoints = styled.ul`
  list-style-type: disc;
  margin-left: 20px;
  margin-bottom: 20px;
  color: #333;
`;

export const BulletPoint = styled.li`
  font-size: 16px;
  margin-bottom: 10px;
`;
export const Content = styled.div`
  margin-left: 2rem;
`;