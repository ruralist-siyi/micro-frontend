import React from 'react';
import { PageHeader } from 'antd';
import { Chart, Geom, Tooltip, Legend } from 'bizcharts';

const data = [
    { genre: 'Sports', sold: 275, income: 2300 },
    { genre: 'Strategy', sold: 115, income: 667 },
    { genre: 'Action', sold: 120, income: 982 },
    { genre: 'Shooter', sold: 350, income: 5271 },
    { genre: 'Other', sold: 150, income: 3710 }
  ];
  
  // 定义度量
  const cols = {
    sold: { alias: '销售量' },
    genre: { alias: '游戏种类' }
  };

function Report() {
  return (
    <>
    <PageHeader
      ghost={false}
      onBack={() => window.history.back()}
      title="报表模块"
      subTitle="独立开发独立部署"
    ></PageHeader>
     <Chart width={1000} height={400} data={data} scale={cols}>
      <Legend position="top" dy={-20} />
      <Tooltip />
      <Geom type="interval" position="genre*sold" color="genre" />
    </Chart>
    </>
  );
}

export default Report;
