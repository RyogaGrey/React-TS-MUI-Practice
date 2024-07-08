import React from 'react';
import { Box, Typography, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register( CategoryScale,LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const generateData = () => {
  return Array.from({ length: 12 }, () => faker.number.int({ min: 1, max: 100 }));
};

const BigComponent: React.FC = () => {

  const data = generateData();

  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Sales',
        data,
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        tension: 0.2,
      },
    ],
  };

  console.log(chartData);

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Большой компонент
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6">Данные о продажах</Typography>
          <Line data={chartData} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6">Таблица продаж</Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Месяц</TableCell>
                  <TableCell>Продажи</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((value, index) => (
                  <TableRow key={index}>
                    <TableCell>{chartData.labels[index]}</TableCell>
                    <TableCell>{value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid> 
    </Box>
  );
};

export default BigComponent;
