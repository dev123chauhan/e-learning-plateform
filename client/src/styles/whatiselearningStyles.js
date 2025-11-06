import styled from "styled-components";
export const Section = styled.section`
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px 20px;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 36px;
  color: #2f327d;
  margin-bottom: 20px;

  span {
    color: #49bbbd;
  }
`;

export const Description = styled.p`
  font-size: 18px;
  color: #696984;
  max-width: 800px;
  margin: 0 auto 40px;
  line-height: 1.6;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Card = styled.div`
  flex: 1;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
`;

export const CardImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

export const CardContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  color: white;
`;

export const CardTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 15px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  border-radius: 25px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  ${(props) =>
    props.primary
      ? `
    background-color: white;
    color: #2F327D;
  `
      : `
    background-color: #49BBBD;
    color: white;
  `}

  &:hover {
    opacity: 0.9;
  }
`;