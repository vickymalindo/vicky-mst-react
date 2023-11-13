import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import { StickyNavbar } from '../views/molecules/Navbar';
import Index from '../pages/Index';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
  },
  {
    path: '/movie',
    element: <StickyNavbar />,
    children: [
      {
        path: 'home',
        element: <Home />,
      },
    ],
  },
]);

export default Router;
