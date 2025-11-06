import {
  SearchContainer,
  SearchWrapper,
  SearchInput,
  SearchButton,
  FilterContainer,
} from "../../styles/courseBannerStyles";
import { useState } from "react";
import Dropdown from "../../common/Dropdown";
import CoursesList from "./CoursesList";
export default function CourseBanner() {
  const [searchTerm, setSearchTerm] = useState("");
  const [subjectFilter, setSubjectFilter] = useState("");
  const [programFilter, setProgramFilter] = useState("All");
  const [languageFilter, setLanguageFilter] = useState("");
  const [availabilityFilter, setAvailabilityFilter] = useState("");
  const [learningTypeFilter, setLearningTypeFilter] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubjectSelect = (subject) => {
    setSubjectFilter(subject);
  };

  const handleProgramSelect = (program) => {
    setProgramFilter(program);
  };

  const handleLanguageSelect = (language) => {
    setLanguageFilter(language);
  };

  const handleAvailabilitySelect = (availability) => {
    setAvailabilityFilter(availability);
  };

  const handleLearningTypeSelect = (learningType) => {
    setLearningTypeFilter(learningType);
  };
  return (
    <>
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
          <Dropdown
            label="Subject"
            options={["All", "Development", "Programming", "Design"]}
            onSelect={handleSubjectSelect}
          />
          <Dropdown
            label="Program"
            options={["All", "Development", "Data Analyst", "Cloud Computing"]}
            onSelect={handleProgramSelect}
          />
          <Dropdown
            label="Language"
            options={["C", "C++", "Java"]}
            onSelect={handleLanguageSelect}
          />
          <Dropdown
            label="Availability"
            options={["Available", "Not Available"]}
            onSelect={handleAvailabilitySelect}
          />
          <Dropdown
            label="Learning Type"
            options={["Self-paced", "Instructor-led"]}
            onSelect={handleLearningTypeSelect}
          />
        </FilterContainer>
      </SearchContainer>
      <CoursesList
        searchTerm={searchTerm}
        subjectFilter={subjectFilter}
        programFilter={programFilter}
        languageFilter={languageFilter}
        availabilityFilter={availabilityFilter}
        learningTypeFilter={learningTypeFilter}
      />
    </>
  );
}
