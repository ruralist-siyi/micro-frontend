import React from 'react';
import { PageHeader, Button, Table } from 'antd';
import { MicroStateContext } from '../../index';

const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
];

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
];

function Marketing() {
  return (
    <MicroStateContext.Consumer>
      {(state: any) => {
        return (
          <>
            <PageHeader
              ghost={false}
              onBack={() => window.history.back()}
              title='营销模块'
              subTitle={
                <div>
                  独立开发独立部署：
                  <span style={{ color: 'red' }}>我是{state.global}</span>
                </div>
              }
              extra={[
                <Button key='3'>Operation</Button>,
                <Button key='2'>Operation</Button>,
                <Button key='1' type='primary'>
                  Primary
                </Button>,
              ]}
            ></PageHeader>
            <Table dataSource={dataSource} columns={columns} />
          </>
        );
      }}
    </MicroStateContext.Consumer>
  );
}

export default Marketing;
