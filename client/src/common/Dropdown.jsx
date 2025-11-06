import  { useState } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { DropdownItem, DropdownMenu, FilterButton } from '../styles/dropdownStyles';
const Dropdown = ({ label, options, onSelect }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState(label);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowDropdown(false);
    if (onSelect && typeof onSelect === 'function') {
      onSelect(option);
    }
  };

  return (
    <FilterButton onClick={toggleDropdown}>
      {selectedOption} 
      <RiArrowDropDownLine />
      <DropdownMenu $show={showDropdown}>
        {options.map((option, index) => (
          <DropdownItem key={index} onClick={() => handleOptionClick(option)}>
            {option}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </FilterButton>
  );
};



export default Dropdown;