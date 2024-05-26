import { Route, Routes } from 'react-router-dom';
import Layout from '../layout/Layout';
import { HomePage, NotFoundPage } from '../pages';

const App = () => (
  <Routes>
    {/* path параметр написаний для деплою на GitHub Actions, при потребі можна виправити на потрібні шляхи (або залишити лише path="шлях") */}
    <Route path={import.meta.env.APP_BASE} element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  </Routes>
);

export default App;
