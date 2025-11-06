import backgroundImage from '../../public/assets/searchBg.png'; 
import styled from 'styled-components';
export const SearchContainer = styled.div`
  background-image: url(${backgroundImage});
  padding: 60px 40px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;
  background-size: cover; 
  background-position: center;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 40px 20px;
    margin-top: 2rem;
  }

  @media (max-width: 480px) {
    padding: 20px 10px;
    margin-top: 1rem;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  max-width: 630px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 10px;
    border-radius: 4px;
  }
`;

export const SearchButton = styled.button`
  width: 120px;
  padding: 10px;
  font-size: 16px;
  background-color: #49BBBD;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100%;
    border-radius: 4px;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 769px) {
    flex-direction: row;
  }
`;
