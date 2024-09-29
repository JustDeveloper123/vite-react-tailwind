import { Provider } from 'react-redux';
import { setupStore } from '../store/store';

const store = setupStore();

const WithRedux = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default WithRedux;
