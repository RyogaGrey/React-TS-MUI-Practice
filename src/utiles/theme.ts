export function getThemeFromLocalStorage(): 'light' | 'dark' {
  const theme = localStorage.getItem('theme');
  return theme === 'dark' ? 'dark' : 'light';
}

export function saveThemeToLocalStorage(theme: 'light' | 'dark'): void {
  localStorage.setItem('theme', theme);
}