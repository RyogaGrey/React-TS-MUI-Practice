import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, MenuItem} from '@mui/material';

type AddRowDialogProps = {
  open: boolean;
  onClose: () => void;
  onAddRow: (newRow: { text: string; status: string; date: string; email: string } | null) => void;
};

const AddRowDialog: React.FC<AddRowDialogProps> = ({ open, onClose, onAddRow }) => {
  const [newRow, setNewRow] = useState({ text: '', status: 'passed', date: '', email: '' });
  const [formErrors, setFormErrors] = useState<{ [key: string]: string | null }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewRow({ ...newRow, [e.target.name]: e.target.value });
    setFormErrors({ ...formErrors, [e.target.name]: null });
  };

  const validateForm = () => {
    let valid = true;
    const errors: { [key: string]: string | null } = {};

    if (!newRow.text.trim()) {
      errors.text = 'Поле "Компонент" не может быть пустым';
      valid = false;
    }

    setFormErrors(errors);
    return valid;
  };

  const handleAddRow = () => {
    if (validateForm()) {
      onAddRow(newRow);
      setNewRow({ text: '', status: 'passed', date: '', email: '' });
      onClose();
    } else {
      onAddRow(null);
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Добавить строку</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          name="text"
          label="Компонент"
          type="text"
          fullWidth
          variant="standard"
          value={newRow.text}
          onChange={handleChange}
          error={!!formErrors.text}
          helperText={formErrors.text}
        />
        <TextField
          margin="dense"
          name="status"
          select
          label="Статус"
          fullWidth
          variant="standard"
          value={newRow.status}
          onChange={handleChange}
          error={!!formErrors.status}
          helperText={formErrors.status}
        >
          <MenuItem value="passed">Сдано</MenuItem>
          <MenuItem value="failed">Провалено</MenuItem>
        </TextField>
        <TextField
          margin="dense"
          name="date"
          label="Дата"
          type="date"
          fullWidth
          variant="standard"
          value={newRow.date}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="email"
          label="Почта"
          type="email"
          fullWidth
          variant="standard"
          value={newRow.email}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Отмена</Button>
        <Button onClick={handleAddRow}>Добавить</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddRowDialog;
