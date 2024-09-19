import { Table } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import leaderboardImage1 from "../../assets/userProfile.png";
import leaderboardImage2 from "../../assets/person2.png";

const leaderboardData = [
  { key: 1, rank: 1, name: 'Charlie Rawal', avatar: leaderboardImage1, course: 53, hour: 250, point: 13450, change: 'up' },
  { key: 2, rank: 2, name: 'Ariana Agrawal', avatar: leaderboardImage2, course: 88, hour: 212, point: 10333, change: 'down' },
];
const styleSpan ={
    display:"flex",
    alignItems:"center",
}
const Leaderboard = () => {
  const columns = [
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
        <span  style={styleSpan}>
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
        columns={columns}
        dataSource={leaderboardData}
        pagination={false}
      />
    </div>
  );
};

export default Leaderboard;