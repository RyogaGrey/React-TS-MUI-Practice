export const getStoredTheme = (): 'red' | 'gray' | null => {
  return localStorage.getItem('theme') as 'red' | 'gray' | null;
};

export const setStoredTheme = (theme: 'red' | 'gray') => {
  localStorage.setItem('theme', theme);
};
