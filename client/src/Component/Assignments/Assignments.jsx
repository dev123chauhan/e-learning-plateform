import { Table } from 'antd';
import FirstAssignment from './FirstAssignment';
import { useState } from 'react';
// const AssignmentItem = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 10px;
//   margin-bottom: 10px;
//   background-color: #f0f0f0;
//   border-radius: 5px;
//   margin-top: 10px;
// `;

const Assignment = () => {
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const assignments = [
    { id: 1, title: 'HTML Basics - Document Structure', dueDate: '2024-09-05', completed: false },
    { id: 2, title: 'HTML Forms and Input Elements', dueDate: '2024-09-08', completed: false },
    { id: 3, title: 'HTML5 Semantic Elements', dueDate: '2024-09-11', completed: false },
    { id: 4, title: 'HTML Tables and Lists', dueDate: '2024-09-14', completed: false },
    { id: 5, title: 'CSS Selectors and Specificity', dueDate: '2024-09-17', completed: false },
    { id: 6, title: 'CSS Box Model and Layouts', dueDate: '2024-09-20', completed: false },
    { id: 7, title: 'CSS Flexbox', dueDate: '2024-09-23', completed: false },
    { id: 8, title: 'CSS Grid', dueDate: '2024-09-26', completed: false },
    { id: 9, title: 'CSS Transitions and Animations', dueDate: '2024-09-29', completed: false },
    { id: 10, title: 'Responsive Web Design with CSS', dueDate: '2024-10-02', completed: false },
    { id: 11, title: 'JavaScript Variables and Data Types', dueDate: '2024-10-05', completed: false },
    { id: 12, title: 'JavaScript Functions and Scope', dueDate: '2024-10-08', completed: false },
    { id: 13, title: 'JavaScript Arrays and Objects', dueDate: '2024-10-11', completed: false },
    { id: 14, title: 'DOM Manipulation with JavaScript', dueDate: '2024-10-14', completed: false },
    { id: 15, title: 'JavaScript Event Handling', dueDate: '2024-10-17', completed: false },
    { id: 16, title: 'Asynchronous JavaScript - Promises and Async/Await', dueDate: '2024-10-20', completed: false },
    { id: 17, title: 'JavaScript ES6+ Features', dueDate: '2024-10-23', completed: false },
    { id: 18, title: 'JavaScript Error Handling and Debugging', dueDate: '2024-10-26', completed: false }
  ];

  const columns = [
    {
      title: 'S.No',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Assignment Name',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Due Date',
      dataIndex: 'dueDate',
      key: 'dueDate',
    },
  ];

  const handleRowClick = (record) => {
    if (record.id === 1) {
      setSelectedAssignment(record.id); // Set the state to the clicked assignment's id
    }
  };

  if (selectedAssignment === 1) {
    return <FirstAssignment />; // Render the new component when the first assignment is clicked
  }


  return (
    <div style={{ padding: '20px' }}>
    <h2>HTML, CSS, and JavaScript Assignments</h2>
    <Table 
      columns={columns} 
      dataSource={assignments} 
      rowKey="id"
      pagination={{ pageSize: 10 }}
      onRow={(record) => ({
          onClick: () => handleRowClick(record),
        })}
    />
  </div>
  );
};

export default Assignment;

















