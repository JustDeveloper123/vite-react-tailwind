import ReactSVG from '@assets/React-icon.svg';
import Counter from '@components/Counter.jsx';

const App = () => (
  <main>
    <h1 className="text-4xl font-bold">Vite + React JS</h1>
    <Counter />
    <img src={ReactSVG} alt="ReactJS logo" className="h-[100px]" />
  </main>
);

export default App;
