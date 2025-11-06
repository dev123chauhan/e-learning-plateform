










































































































































import styled from 'styled-components';

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 60px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 40px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    padding: 20px;
  }
`;

export const CardContainer = styled.div`
  background: #FFFFFF;
  border: 1px solid #E0E0E0;
  box-shadow: 0px 4px 24px rgba(93, 62, 188, 0.04);
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0px 8px 32px rgba(93, 62, 188, 0.12);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;

  @media (max-width: 900px) {
    height: 140px;
  }

  @media (max-width: 600px) {
    height: 120px;
  }
`;

export const CardBody = styled.div`
  padding: 20px;
  flex-grow: 1;

  @media (max-width: 600px) {
    padding: 15px;
  }
`;

export const CardTitle = styled.h5`
  margin: 0 0 10px 0;
  font-size: 18px;
  font-weight: bold;
  color: #2D3748;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const CardText = styled.p`
  font-size: 14px;
  color: #666;
  margin: 10px 0 20px;
  line-height: 1.5;

  @media (max-width: 600px) {
    font-size: 12px;
    margin: 8px 0 16px;
  }
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 20px;
  margin-top: auto;

  @media (max-width: 600px) {
    padding: 0 15px 15px;
  }
`;

export const Tag = styled.span`
  border-radius: 8px;
  padding: 5px 10px;
  font-size: 12px;
  color: #333;
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: #F7FAFC;

  @media (max-width: 600px) {
    font-size: 10px;
    padding: 4px 8px;
  }
`;

export const Price = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #49BBBD;
  display: flex;
  align-items: center;
  gap: 5px;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const ProfileImage = styled.img`
  border-radius: 50%;
  width: 45px;
  height: 45px;
  object-fit: cover;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 0 0 2px #53bfba;
  }

  @media (max-width: 600px) {
    width: 35px;
    height: 35px;
  }
`;

export const SkeletonCard = styled(CardContainer)`
  .ant-skeleton-image {
    width: 100% !important;
    height: 160px !important;
  }
`;

export const IconCircle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 15px;

  svg {
    width: 30px;
    height: 30px;
    fill: white;
  }

  @media (max-width: 600px) {
    width: 50px;
    height: 50px;

    svg {
      width: 25px;
      height: 25px;
    }
  }
`;