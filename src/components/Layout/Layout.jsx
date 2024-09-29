import { Outlet } from 'react-router-dom';
import Container from './Container';

const JSXTile = ({ label, children }) => {
  if (children) {
    return (
      <>
        <span className="jsx">&lt;{label}&gt;</span>
        {children}
        <span className="jsx">&lt;&#47;{label}&gt;</span>
      </>
    );
  }
  return <span className="jsx">&lt;{label}&nbsp;&#47;&gt;</span>;
};

const Layout = () => {
  return (
    <div className="bg-background text-text flex min-h-screen flex-col overflow-hidden transition-colors duration-500">
      <header>
        <Container>
          <h1 className="title">
            <JSXTile label={'Header'}>{import.meta.env.VITE_TITLE}</JSXTile>
          </h1>
        </Container>
      </header>
      <main className="grid flex-auto">
        <Outlet />
      </main>
      <footer>
        <Container>
          <h3 className="title">
            <JSXTile label={'Footer'} />
          </h3>
        </Container>
      </footer>
    </div>
  );
};

export default Layout;
