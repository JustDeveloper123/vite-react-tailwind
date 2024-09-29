import { Link } from 'react-router-dom';
import Container from '../components/Layout/Container';
import { CAT_IMG } from '../constants/images';
import { ROUTES } from '../constants/router-routes';
import Button from '../ui/Button';

const themes = [
  { theme: 'light', color: 'white' },
  { theme: 'dark', color: 'var(--gray-800)' },
  { theme: 'green', color: '#38b000' },
];

const changeTheme = toTheme => {
  if (document.documentElement.classList.contains(`theme-${toTheme}`)) return;
  localStorage.setItem('theme', toTheme);

  const removeOtherThemes = () => {
    themes
      .map(({ theme }) => theme)
      .forEach(t => document.documentElement.classList.remove(`theme-${t}`));
  };

  if (toTheme === 'light') {
    removeOtherThemes();
    return;
  }

  removeOtherThemes();
  document.documentElement.classList.add(`theme-${toTheme}`);
};

const HomePage = () => {
  //!!! add container CVA
  return (
    <Container
      variant={'tablet'}
      className={'flex flex-col items-center justify-center gap-7'}
    >
      <div className="w-[200px]">
        <img src={CAT_IMG} alt="Cat.png :)" className="animate-spin" />
      </div>
      <h1 className="text-lg">Switch theme:</h1>
      <div className="flex gap-2">
        {themes.map(({ theme, color }) => (
          <Button
            key={theme}
            onClick={() => changeTheme(theme)}
            variant={'rounded'}
            lineColor={theme === 'light' ? 'rgba(0, 0, 0, 0.15)' : false}
            style={{
              backgroundColor: color,
            }}
          />
        ))}
      </div>
      <Link to={ROUTES.extractStaticPath(r => r.public.post) + '/1'}>
        <Button>Post 1</Button>
      </Link>
    </Container>
  );
};

export default HomePage;
