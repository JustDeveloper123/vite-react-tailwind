import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import { publicRoutesArray } from '../constants/router-routes';

const { VITE_BASE } = import.meta.env;

const renderRoutes = routesArray => {
  return routesArray.map(route => {
    const Element = route.element;
    return (
      <Route
        key={route.path}
        index={route.index}
        path={route.path}
        element={<Element {...route.props} />}
      />
    );
  });
};

const WithRouter = () => {
  const routes = renderRoutes(publicRoutesArray);

  // pushing more routes if we have any condition
  // if (isAuth) routes.push(...renderRoutes(privateRoutesArray));
  // if (isAdmin) routes.push(...renderRoutes(ownerRoutesArray));

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={VITE_BASE} element={<Layout />}>
        {...routes}
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
};

export default WithRouter;
