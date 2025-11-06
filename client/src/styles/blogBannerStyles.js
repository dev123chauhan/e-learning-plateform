import styled from 'styled-components';
export const Container = styled.div`
  background-color: #f0f8ff;
  padding: 2rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    padding: 1rem;
    margin-top: 2rem;
  }
`;

export const Content = styled.div`
  display: flex;
  max-width: 1400px;
  margin: 0 auto;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const TextSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

export const AuthorInfo = styled.p`
  color: #4682b4;
  font-size: 0.9rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const Title = styled.h1`
  color: #191970;
  font-size: 2rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Description = styled.p`
  color: #708090;
  font-size: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
  }
`;

export const Button = styled.button`
  background-color: #20b2aa;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  align-self: flex-start;

  @media (max-width: 768px) {
    align-self: center;
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
`;

export const ImageSection = styled.div`
  flex: 0.7;

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;