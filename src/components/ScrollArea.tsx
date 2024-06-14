import React from 'react';
import { Box, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

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
  sortOrder?: boolean; // true для восходящей, false для нисходящей сортировки
  isSorted?: boolean; // для скрытия стрелочки сортировки
};

const ScrollArea: React.FC<ScrollAreaProps> = React.memo(({ title, content, width, maxHeight, onFilter, onSortByDate, sortOrder, isSorted }) => {
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
          {onSortByDate && <Button variant="contained" color="secondary" onClick={onSortByDate} sx={{ ml: 2 }}>Сортировать по дате</Button>}
        </Box>
      </Box>
      <TableContainer component={Paper} sx={{ overflowY: 'scroll', maxHeight: '100%' }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Компонент</TableCell>
              <TableCell>Статусы</TableCell>
              <TableCell onClick={onSortByDate} sx={{ cursor: 'pointer' }}>
                Дата
                {isSorted && (
                  sortOrder
                    ? <ArrowUpwardIcon fontSize="small" />
                    : <ArrowDownwardIcon fontSize="small" />
                )}
              </TableCell>
              <TableCell>Почта</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {content.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.text}</TableCell>
                <TableCell>{item.status || ''}</TableCell>
                <TableCell>{item.date}</TableCell>
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