import React from 'react';
import { Responsive, WidthProvider, Layouts } from 'react-grid-layout';
import ChartComponent from './ChartComponent';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';

const ResponsiveGridLayout = WidthProvider(Responsive);
Chart.register(CategoryScale);

const Dashboard: React.FC = () => {
  const layouts: Layouts = {
    lg: [
      { i: 'chart1', x: 0, y: 0, w: 4, h: 2 },
      { i: 'chart2', x: 4, y: 0, w: 4, h: 2 },
    ],
  };

  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={layouts}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      rowHeight={30}
    >
      <div key="myChart"><ChartComponent /></div>
      {/* <div key="chart2"><ChartComponent /></div> */}
    </ResponsiveGridLayout>
  );
};

export default Dashboard;
