import styled from "styled-components";
export const Container = styled.div`
  flex-grow: 1;
  padding: 1rem;
  margin-top: 3rem;

  @media (min-width: 768px) {
    padding: 2rem;
    margin-top: 5rem;
  }
`;

export const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const GridItem = styled.div`
  flex: 1;
  min-width: 100%;

  @media (min-width: 768px) {
    min-width: calc(50% - 2rem);
  }
`;

export const Paper = styled.div`
  padding: 1.5rem;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

export const Title = styled.h1`
  margin-bottom: 1.5rem;
  color: #49bbbd;
  font-weight: bold;
  text-align: center;
  font-size: 1.5rem;

  @media (min-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

export const GetTitle = styled.h6`
  margin-bottom: 1rem;
  color: black;
  font-size: 1rem;
`;

export const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 1rem;
`;

export const IconContainer = styled.div`
  position: absolute;
  left: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  color: #49bbbd;
  font-size: 1.2rem;
`;

export const TextField = styled.input`
  width: 100%;
  padding: 0.5rem;
  padding-left: ${(props) => (props.$hasIcon ? "2rem" : "0.5rem")};
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    border-color: #49bbbd;
    outline: none;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  min-height: 8rem;
  font-size: 1rem;

  &:focus {
    border-color: #49bbbd;
    outline: none;
  }

  @media (min-width: 768px) {
    min-height: 10rem;
  }
`;

export const Button = styled.button`
  background-color: #49bbbd;
  color: #fff;
  width: 100%;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3a9da1;
  }
`;

export const ContactDetail = styled.h4`
  font-weight: 400;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

export const ContactDetailIcon = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const Map = styled.iframe`
  width: 100%;
  height: 300px;
  border: none;
  border-radius: 8px;

  @media (min-width: 768px) {
    height: 400px;
  }
`;
