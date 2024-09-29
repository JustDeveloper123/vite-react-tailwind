// Theme
const localTheme = localStorage.getItem('theme');

if (localTheme) {
  try {
    document.documentElement.classList.add(`theme-${localTheme}`);
  } catch (e) {
    console.error(e);
  }
}
