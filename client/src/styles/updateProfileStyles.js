import styled from 'styled-components';
export const Container = styled.div`
  padding: 16px;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: block;
`;

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const GridItem = styled.div`
  flex: 1 1 100%;

  @media (min-width: 600px) {
    flex: 1 1 50%;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Label = styled.label`
  font-size: 16px;
  color: #000;
  display: block;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #49BBBD;
  color: white;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #49BBBD;
  }
`;