import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import { StickyNavbar } from '../views/molecules/Navbar';
import Index from '../pages/Index';
import Movie from '../pages/Movie';

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
      {
        path: 'detail/:id',
        element: <Movie />,
      },
    ],
  },
]);

export default Router;
