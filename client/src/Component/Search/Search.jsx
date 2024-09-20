import backgroundImage from '../../assets/searchBg.png'; // Adjust the path as necessary
import styled from 'styled-components';
import CourseCards from '../CourseCards/CourseCards';
import { useState } from 'react';
import DropdownButton from "../CourseCards/Dropdown";
import KnowAboutLearning from './KnowAboutLearning';

const SearchContainer = styled.div`
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

const SearchInput = styled.input`
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

const SearchButton = styled.button`
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

const FilterContainer = styled.div`
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

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 769px) {
    flex-direction: row;
  }
`;

const Search = () => {
  // const [searchTerm, setSearchTerm] = useState('');
  // const [subjectFilter, setSubjectFilter] = useState('');

  // const handleSearchChange = (e) => {
  //   setSearchTerm(e.target.value);
  // };

  // const handleSubjectSelect = (subject) => {
  //   setSubjectFilter(subject);
  // };
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    subject: '',
    program: '',
    language: '',
    availability: '',
    learningType: ''
  });

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterSelect = (filterType, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterType]: value
    }));
  };

  return (
    <>
      {/* <SearchContainer>
        <SearchWrapper>
          <SearchInput
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search your favourite course"
          />
          <SearchButton>Search</SearchButton>
        </SearchWrapper>

        <FilterContainer>
          <DropdownButton
            label="Subject"
            options={['All', 'Development', 'Programming', 'Design']}
            onSelect={handleSubjectSelect}
          />
          <DropdownButton label="Program" options={['Program 1', 'Program 2', 'Program 3']} />
          <DropdownButton label="Language" options={['English', 'Spanish', 'French']} />
          <DropdownButton label="Availability" options={['Available', 'Not Available']} />
          <DropdownButton label="Learning Type" options={['Self-paced', 'Instructor-led']} />
        </FilterContainer>
      </SearchContainer>
      <CourseCards searchTerm={searchTerm} subjectFilter={subjectFilter} /> */}
      <SearchContainer>
        <SearchWrapper>
          <SearchInput
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search your favourite course"
          />
          <SearchButton>Search</SearchButton>
        </SearchWrapper>

        <FilterContainer>
          <DropdownButton
            label="Subject"
            options={['All', 'Development', 'Programming', 'Design']}
            onSelect={(value) => handleFilterSelect('subject', value)}
          />
          <DropdownButton 
            label="Program" 
            options={['Program 1', 'Program 2', 'Program 3']} 
            onSelect={(value) => handleFilterSelect('program', value)}
          />
          <DropdownButton 
            label="Language" 
            options={['English', 'Spanish', 'French']} 
            onSelect={(value) => handleFilterSelect('language', value)}
          />
          <DropdownButton 
            label="Availability" 
            options={['Available', 'Not Available']} 
            onSelect={(value) => handleFilterSelect('availability', value)}
          />
          <DropdownButton 
            label="Learning Type" 
            options={['Self-paced', 'Instructor-led']} 
            onSelect={(value) => handleFilterSelect('learningType', value)}
          />
        </FilterContainer>
      </SearchContainer>
      <CourseCards searchTerm={searchTerm} filters={filters} />
      <KnowAboutLearning/>

    </>
  );
};

export default Search;
