import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

const generateData = () => {
  return Array.from({ length: 12 }, () => faker.datatype.number({ min: 0, max: 1000 }));
};

const BigComponent: React.FC = () => {
  const [data, setData] = useState<number[]>([]);
  
  useEffect(() => {
    setData(generateData());
  }, []);

  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Sales',
        data: data,
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
      },
    ],
  };

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
         Большой компонент
      </Typography>
      
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: '20px' }}>
            <Typography variant="h6">Данные о продажах</Typography>
            <Line data={chartData} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: '20px' }}>
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
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BigComponent;
