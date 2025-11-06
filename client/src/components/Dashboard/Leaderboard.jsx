import { Table } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { leaderboardLists } from '../../lib/leaderBoardLists';
const Leaderboard = () => {
  const styleSpan = {
    display: "flex",
    alignItems: "center",
  };
  const leaderboardColumnLists = [
    {
      title: 'RANK',
      dataIndex: 'rank',
      key: 'rank',
      render: (rank, record) => (
        <span style={styleSpan}>
          {rank}
          {record.change === 'up' ? (
            <ArrowUpOutlined style={{ color: '#00bfa5', marginLeft: 5 }} />
          ) : (
            <ArrowDownOutlined style={{ color: '#ff5252', marginLeft: 5 }} />
          )}
        </span>
      ),
    },
    {
      title: 'NAME',
      dataIndex: 'name',
      key: 'name',
      render: (name, record) => (
        <span style={styleSpan}>
          <img
            src={record.avatar}
            alt={name}
            style={{ width: 40, height: 40, borderRadius: '50%', marginRight: 10 }}
          />
          {name}
        </span>
      ),
    },
    {
      title: 'COURSE',
      dataIndex: 'course',
      key: 'course',
    },
    {
      title: 'HOUR',
      dataIndex: 'hour',
      key: 'hour',
    },
    {
      title: 'POINT',
      dataIndex: 'point',
      key: 'point',
      render: (point) => (
        <span style={{ color: '#00bfa5', fontWeight: 'bold' }}>
          {point.toLocaleString()}
        </span>
      ),
    },
  ];

  return (
    <div>
      <h2 style={{ color: '#333', marginBottom: 20 }}>Leader Board</h2>
      <Table
        columns={leaderboardColumnLists}
        dataSource={leaderboardLists}
        pagination={false}
      />
    </div>
  );
};

export default Leaderboard;