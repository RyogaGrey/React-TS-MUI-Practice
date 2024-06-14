import React from 'react';
import { Box,
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel } from '@mui/material';

type ContentItem = {
  text: string;
  status?: string;
  date: string;
  email: string;
};

type ScrollAreaProps = {
  title: string;
  content: ContentItem[];
  width: string;
  maxHeight: string;
  onFilter?: () => void;
  onSortByDate?: () => void;
  sortOrder?: 'asc' | 'desc' | undefined;
};

const ScrollArea: React.FC<ScrollAreaProps> = React.memo(({ title, content, width, maxHeight, onFilter, onSortByDate, sortOrder }) => {
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
        <Box>
          {onFilter && <Button variant="contained" color="primary" onClick={onFilter}>Сдано</Button>}
        </Box>
      </Box>
      <TableContainer sx={{ overflowY: 'scroll', maxHeight: '100%' }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Компонент</TableCell>
              <TableCell>Статусы</TableCell>
              <TableCell sortDirection={sortOrder}>
                <TableSortLabel
                  active={!!sortOrder}
                  direction={sortOrder}
                  onClick={onSortByDate}
                >
                  Дата
                </TableSortLabel>
              </TableCell>
              <TableCell>Почта</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {content.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.text}</TableCell>
                <TableCell>{item.status || ''}</TableCell>
                <TableCell>{new Date(item.date).toLocaleDateString()}</TableCell>
                <TableCell>{item.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
});

export default ScrollArea;
