import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

type SimpleContentItem = {
  text: string;
};

type SimpleScrollAreaProps = {
  title: string;
  content: SimpleContentItem[];
  width: string;
  maxHeight: string;
};

const SimpleScrollArea: React.FC<SimpleScrollAreaProps> = React.memo(({ title, content, width, maxHeight }) => {
  return (
    <Box sx={{
      border: '1px solid #dbdbdb8e',
      borderRadius: '8px',
      maxHeight,
      width,
      display: 'flex',
      flexDirection: 'column',
    }}>
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#d90429',
        padding: '10px',
        borderRadius: '8px 8px 0 0',
        position: 'sticky',
        top: 0,
        zIndex: 10
      }}>
        <Typography sx={{ fontWeight: 'bold', color: '#edf2f4' }}>
          {title}
        </Typography>
      </Box>
      <TableContainer sx={{ overflowY: 'scroll', maxHeight: '100%' }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Компонент</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {content.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.text}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
});

export default SimpleScrollArea;
