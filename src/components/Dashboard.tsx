import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import ChartComponent from './ChartComponent';

const ResponsiveGridLayout = WidthProvider(Responsive);

const Dashboard: React.FC = () => {
  const layout = [
    { i: 'chart1', x: 0, y: 0, w: 4, h: 2 },
    { i: 'chart2', x: 4, y: 0, w: 4, h: 2 },
  ];

  return (
    <ResponsiveGridLayout className="layout" layouts={{ lg: layout }} breakpoints={{ lg: 1200 }} cols={{ lg: 12 }}>
      <div key="chart1"><ChartComponent /></div>
      <div key="chart2"><ChartComponent /></div>
    </ResponsiveGridLayout>
  );
};

export default Dashboard;
