import WithRedux from '../providers/WithRedux';
import WithRouter from '../providers/WithRouter';

// Importing styles
import '../assets/styles/index.scss';

// Initializing features
import '../lib/init/initLocalSettings';

const App = () => (
  <WithRedux>
    <WithRouter />
  </WithRedux>
);
export default App;
