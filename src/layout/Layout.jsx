import { Outlet } from 'react-router-dom';
import ReactLogo from '/webp/react.webp';

const Layout = () => {
  return (
    <>
      <header>
        <h1>{import.meta.env.APP_TITLE}</h1>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <img src={ReactLogo} alt="ReactJS logo" height="100px" />
      </footer>
    </>
  );
};

export default Layout;
