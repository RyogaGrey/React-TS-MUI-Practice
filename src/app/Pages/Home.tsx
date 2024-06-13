import React, { useState, useMemo, useCallback } from 'react';
import { Box, Typography, Button, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { faker } from '@faker-js/faker';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

// Для первой таблицы
type ContentItem = {
  text: string;
  status?: string;
  date: string;
  email: string;
};

// Для второй таблицы
type SimpleContentItem = {
  text: string;
};

type ScrollAreaProps = {
  title: string;
  content: ContentItem[];
  width: string;
  maxHeight: string;
  onFilter?: () => void;
  onSortByDate?: () => void;
  sortOrder?: boolean; // true для восходящей, false для нисходящей сортировки
  isSorted?: boolean; // для отображения стрелочки сортировки, не появиться до сортировки
};

type SimpleScrollAreaProps = {
  title: string;
  content: SimpleContentItem[];
  width: string;
  maxHeight: string;
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
      <TableContainer component={Paper} sx={{ overflowY: 'scroll', maxHeight: '100%' }}>
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

const Home: React.FC = () => {
  const [count, setCount] = useState(0);
  const [filterPassed, setFilterPassed] = useState(false);
  const [sortByDate, setSortByDate] = useState(false);
  const [sortOrder, setSortOrder] = useState<boolean | undefined>(undefined); // undefined для начального состояния
  const [isSorted, setIsSorted] = useState(false); // состояние для отслеживания, была ли выполнена сортировка

  const content1 = useMemo(() => Array.from({ length: 50 }, (_, i) => ({
    text: `Хранилище 1 - Компонент №${i + 1}`,
    status: Math.random() > 0.6 ? 'passed' : 'failed',
    date: faker.date.past().toDateString(), // Преобразуем дату в строку, TODO: посмотреть локаль
    email: faker.internet.email(),
  })), []);

  const filteredContent1 = useMemo(() => {
    const filtered = filterPassed ? content1.filter(item => item.status === 'passed') : content1;
    if (sortByDate && sortOrder !== undefined) {
      return filtered.slice().sort((a, b) => sortOrder
        ? new Date(a.date).getTime() - new Date(b.date).getTime()
        : new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    }
    return filtered;
  }, [filterPassed, sortByDate, sortOrder, content1]);

  const content2 = useMemo(() => Array.from({ length: 50 }, (_, i) => ({
    text: `Хранилище 2 - Компонент №${i + 1}`
  })), []);

  const handleFilter = useCallback(() => {
    setFilterPassed(prev => !prev);
  }, []);

  const handleSortByDate = useCallback(() => {
    setSortByDate(true);
    setSortOrder(prev => prev === undefined ? true : !prev); // Меняем порядок сортировки
    setIsSorted(true);
  }, []);

  return (
    <Box sx={{ padding: '20px', gap: '20px' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <ScrollArea
            title="Зафиксированный 1"
            content={filteredContent1}
            width="100%"
            maxHeight="800px"
            onFilter={handleFilter}
            onSortByDate={handleSortByDate}
            sortOrder={sortOrder}
            isSorted={isSorted}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <SimpleScrollArea title="Зафиксированный 2" content={content2} width="100%" maxHeight="800px" />
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex', marginTop: '20px' }}>
        <Button variant="contained" onClick={() => setCount(count + 1)}>Кнопочка</Button>
        <Typography sx={{ marginLeft: '20px' }}>
          Количество нажатий: {count}
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
