import React, { useState, useMemo, useCallback } from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { faker } from '@faker-js/faker';
import ScrollArea from '../../components/ScrollArea';
import SimpleScrollArea from '../../components/SimpleScrollArea';
import AddRowDialog from '../../components/AddRowForm';
import AddIcon from '@mui/icons-material/Add';

const Home: React.FC = () => {
  const [count, setCount] = useState(0);
  const [filterPassed, setFilterPassed] = useState(false);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | undefined>(undefined);
  const [open, setOpen] = useState(false);
  const [content1, setContent1] = useState(() =>
    Array.from({ length: 50 }, (_, i) => ({
      text: `Хранилище 1 - Компонент №${i + 1}`,
      status: Math.random() > 0.6 ? 'passed' : 'failed',
      date: faker.date.past().toISOString(),
      email: faker.internet.email(),
    }))
  );

  const filteredContent1 = useMemo(() => {
    const filtered = filterPassed ? content1.filter(item => item.status === 'passed') : content1;
    if (sortOrder) {
      return filtered.slice().sort((a, b) => sortOrder === 'desc'
        ? new Date(a.date).getTime() - new Date(b.date).getTime()
        : new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    }
    return filtered;
  }, [filterPassed, sortOrder, content1]);

  const content2 = useMemo(() => Array.from({ length: 50 }, (_, i) => ({
    text: `Хранилище 2 - Компонент №${i + 1}`
  })), []);

  const handleFilter = useCallback(() => {
    setFilterPassed(prev => !prev);
  }, []);

  const handleSortByDate = useCallback(() => {
    setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddRow = (newRow: { text: string; status: string; date: string; email: string } | null) => {
    if (newRow) {
      setContent1([...content1, newRow]);
    }
  };

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
          />
        <Button startIcon={<AddIcon />} variant="contained" color="primary" onClick={handleOpen}>Добавить строку</Button>
        </Grid>
        <Grid item xs={12} md={4}>
          <SimpleScrollArea title="Зафиксированный 2" content={content2} width="100%" maxHeight="800px" />
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex', marginTop: '20px', gap: '20px' }}>
        <Button variant="contained" onClick={() => setCount(count + 1)}>Кнопочка</Button>
        <Typography sx={{ marginLeft: '20px' }}>
          Количество нажатий: {count}
        </Typography>
      </Box>
      <AddRowDialog open={open} onClose={handleClose} onAddRow={handleAddRow} />
    </Box>
  );
};

export default Home;
