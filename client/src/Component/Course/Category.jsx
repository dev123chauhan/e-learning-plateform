import design from "../../assets/design.png"
import development from "../../assets/development.png"
import buisness from "../../assets/buisness.png"
import marketing from "../../assets/marketing.png"
import photography from "../../assets/photography.png"
import acting from "../../assets/acting.png"
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
  margin-left: 5rem;
  margin-right: 5rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    padding: 15px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 10px;
    padding: 10px;
  }
`;

const Card = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const CategoryImage = styled.img`
  background-color: ${({ color }) => color};
  padding: 10px;
  border-radius: 8px;
  width: 40px;
  height: 40px;

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
  }

  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
  }
`;

const Title = styled.h3`
  margin: 10px 0;
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const Description = styled.p`
  margin: 0;
  color: #666;
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const categories = [
  { name: 'Design', image: design, color: '#E6F7F5' },
  { name: 'Development', image: development, color: '#E6E6FA' },
  { name: 'Business', image: buisness, color: '#E6F3FF' },
  { name: 'Marketing', image: marketing, color: '#E6F7F5' },
  { name: 'Photography', image: photography, color: '#FFF0E6' },
  { name: 'Acting', image: acting, color: '#FFE6E6' },
];

const Category = () => {
  return (
    <Grid>
      {categories.map((category, index) => (
        <Card key={index}>
          <CategoryImage src={category.image} color={category.color} alt={`${category.name} icon`} />
          <Title>{category.name}</Title>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod adipiscing elit, sed do eiusmod
          </Description>
        </Card>
      ))}
    </Grid>
  );
};

export default Category;
