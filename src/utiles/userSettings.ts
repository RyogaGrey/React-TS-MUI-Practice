export const getUserSettings = () => {
    const settings = localStorage.getItem('userSettings');
    return settings ? JSON.parse(settings) : {};
  };
  
  export const saveUserSettings = (settings: any) => {
    localStorage.setItem('userSettings', JSON.stringify(settings));
  };