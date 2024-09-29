import { Navigate } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import PostPage from '../pages/PostPage';

const ROUTES = {
  // new path requires keys: path, element, index*, props*
  // new path string has to start with "/" (slash)

  public: {
    404: {
      path: '/*',
      element: Navigate,
      props: {
        to: '/',
      },
    },
    home: { path: '/', element: HomePage, index: true },
    post: { path: '/post/:id', element: PostPage },
  },

  // This function gets a static path for redirecting or other cases. Simply explanation: /post/:id => /post
  // Using: ROUTES.extractStaticPath(r => r.public.post). It returns /post, as example we can add some id: '/post' + `/${id}`
  extractStaticPath(callback) {
    const { path } = callback(this);
    const staticPath =
      path.indexOf(':') === -1 ? path : path.slice(0, path.indexOf(':') - 1);
    return staticPath;
  },
};

// Base of project if we have
const { VITE_BASE } = import.meta.env;

// This function recursively adds a base URL for paths
function combinePathWithBase(obj, baseUrl) {
  // Iterate through each key in the object
  for (const key in obj) {
    // If the current value is an object, traverse deeper
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      combinePathWithBase(obj[key], baseUrl);
    }

    // Modify the 'path' property if it exists
    if (key === 'path' && typeof obj[key] === 'string') {
      console.log(`${baseUrl}${obj[key]}`);
      obj[key] = `${baseUrl}${obj[key]}`;
    }

    // Modify 'props.to' if it exists
    if (key === 'props' && obj[key]?.to) {
      obj[key].to = `${baseUrl}${obj[key].to}`;
    }
  }
}

// Modifying paths if we need
combinePathWithBase(ROUTES, VITE_BASE.slice(0, VITE_BASE.length - 1));

export { ROUTES };

export const publicRoutesArray = Object.values(ROUTES.public);
// export const privateRoutesArray = Object.values(ROUTES.private);
// export const ownerRoutesArray = Object.values(ROUTES.owner);
