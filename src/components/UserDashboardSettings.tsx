import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Grid } from '@mui/material';
import { saveUserSettings, getUserSettings } from '../utiles/userSettings';

interface UserDashboardSettingsProps {
  settings: any;
  onChange: (settings: any) => void;
}

const UserDashboardSettings: React.FC<UserDashboardSettingsProps> = ({ settings, onChange }) => {
  const [localSettings, setLocalSettings] = useState(settings);

  useEffect(() => {
    setLocalSettings(settings);
  }, [settings]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLocalSettings((prevSettings: any) => ({
      ...prevSettings,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onChange(localSettings);
    saveUserSettings(localSettings);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Настройки пользовательской панели
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Положение панели"
            name="dashboardPosition"
            value={localSettings.dashboardPosition}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Тема панели</FormLabel>
            <RadioGroup
              row
              name="dashboardTheme"
              value={localSettings.dashboardTheme}
              onChange={handleInputChange}
            >
              <FormControlLabel value="light" control={<Radio />} label="Светлая" />
              <FormControlLabel value="dark" control={<Radio />} label="Темная" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleSave}>
            Сохранить настройки
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserDashboardSettings;
