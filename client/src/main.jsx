import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App.jsx';
import Home from './pages/homepage/homepage.jsx';
import Createacc from './pages/createacc/createacc.jsx';
import Login from './pages/login/login.jsx';
import Profile from './pages/profile/profile.jsx'
import ErrorPage from './pages/ErrorPages/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/login',
        element: <Login />
      },
       {
        path: '/createaccount',
        element: <Createacc />
      }, {
        path: '/profiles/:username',
        element: <Profile />
      },
       {
        path: '/profile',
        element: <Profile />
      },
      //  {
      //   path: '/thoughts/:thoughtId',
      //   element: <SingleThought />
      // }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
