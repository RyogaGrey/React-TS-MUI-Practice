import React from 'react';
import { AppBar, Tab, Tabs, Typography } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`user-tabpanel-${index}`}
      aria-labelledby={`user-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Typography component="div" sx={{ p: 3 }}>
          {children}
        </Typography>
      )}
    </div>
  );
}

const UserTabs: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="User tabs">
          <Tab label="Вкладка 1" />
          <Tab label="Вкладка 2" />
          <Tab label="Вкладка 3" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <BarChart
            xAxis={[
            {
                id: 'barCategories',
                data: ['bar A','bar B','bar C','bar D','bar E', 'bar F', 'bar G'],
                scaleType: 'band',
            },
            ]}
            series={[
            {
                data: [Math.sin(0.5), Math.sin(1), Math.sin(2), Math.sin(2.5), Math.sin(3), Math.sin(3.5), Math.sin(4)],
            },
            ]}
            width={1000}
            height={600}
        />
        <Typography> Содержимое первой вкладки </Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
        {/* Содержимое второй вкладки */}
        <Typography> Содержимое второй вкладки</Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
        {/* Содержимое третьей вкладки */}
        <Typography> Содержимое третьей вкладки</Typography>
      </TabPanel>
    </div>
  );
};

export default UserTabs;
