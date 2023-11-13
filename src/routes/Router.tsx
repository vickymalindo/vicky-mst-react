import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import { StickyNavbar } from '../views/molecules/Navbar';

const Router = createBrowserRouter([
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
