import styled from "styled-components";
export const FilterButton = styled.div`
  position: relative;
  padding: 8px 40px;
  font-size: 14px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DropdownMenu = styled.div`
  display: ${(props) => (props.$show ? 'block' : 'none')};
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 100;
  width: 100%;
`;

export const DropdownItem = styled.div`
  padding: 10px;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
`;