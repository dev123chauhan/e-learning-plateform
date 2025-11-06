import { Table } from 'antd';
import FirstAssignment from './FirstAssignment';
import { useState } from 'react';
import { assignmentLists, columns } from '../../lib/assignmentLists';
const Assignment = () => {
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const handleRowClick = (record) => {
    if (record.id === 1) {
      setSelectedAssignment(record.id); 
    }
  };

  if (selectedAssignment === 1) {
    return <FirstAssignment />; 
  }
  return (
    <div style={{ padding: '20px' }}>
    <h2>HTML, CSS, and JavaScript Assignments</h2>
    <Table 
      columns={columns} 
      dataSource={assignmentLists} 
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

















