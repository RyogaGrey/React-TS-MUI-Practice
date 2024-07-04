// src/components/DataTable.tsx
import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
} from '@mui/material';

const generateData = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: `Item ${i + 1}`,
    value: Math.random().toFixed(2),
  }));
};

const DataTable: React.FC = () => {
  const [data, setData] = useState(generateData(2000));

  // const handleEdit = (id: number, key: string, value: string) => {
  //   setData(data.map(item => (item.id === id ? { ...item, [key]: value } : item)));
  // };

  const handleEdit = (id: number, key: string, value: string) => {
    setData(prevData =>
      prevData.map(item => (item.id === id ? { ...item, [key]: value } : item))
    );
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Value</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>
                <TextField
                  value={row.name}
                  onChange={(e) => handleEdit(row.id, 'name', e.target.value)}
                />
              </TableCell>
              <TableCell>
                <TextField
                  value={row.value}
                  onChange={(e) => handleEdit(row.id, 'value', e.target.value)}
                />
              </TableCell>
              <TableCell>
                <Button onClick={() => handleEdit(row.id, 'name', `Edited ${row.name}`)}>Edit</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
