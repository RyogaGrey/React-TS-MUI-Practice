import React, { useState, useMemo, useCallback } from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { faker } from '@faker-js/faker';
import ScrollArea from '../../components/ScrollArea';
import SimpleScrollArea from '../../components/SimpleScrollArea';

const Home: React.FC = () => {
  const [count, setCount] = useState(0);
  const [filterPassed, setFilterPassed] = useState(false);
  const [sortByDate, setSortByDate] = useState(false);
  const [sortOrder, setSortOrder] = useState<boolean | undefined>(undefined); // undefined для начального состояния
  const [isSorted, setIsSorted] = useState(false); // состояние для отслеживания, была ли выполнена сортировка

  const content1 = useMemo(() => Array.from({ length: 50 }, (_, i) => ({
    text: 'Хранилище 1 - Компонент №' + (i + 1),
    status: Math.random() > 0.6 ? 'passed' : 'failed',
    date: faker.date.past().toDateString(), // Преобразуем дату в строку, посмотреть toLocaleDateString
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
    text: 'Хранилище 2 - Компонент №' + (i + 1)
  })), []);

  const handleFilter = useCallback(() => {
    setFilterPassed(prev => !prev);
  }, []);

  const handleSortByDate = useCallback(() => {
    setSortByDate(true); 
    setSortOrder(prev => prev === undefined ? true : !prev); // Порядок сортировки
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