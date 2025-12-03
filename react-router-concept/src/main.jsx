import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './component/Root/Root.jsx'
import Home from './component/Home/Home.jsx'
import Mobiles from './component/Mobiles/Mobiles.jsx';
import Laptops from './component/Laptops/Laptops.jsx';
import Users from './component/Users/Users.jsx';
import Users2 from './component/Users2/Users2.jsx';


const usersPromise = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "mobiles", Component: Mobiles },
      { path: "app", Component: App },
      { path: "laptops", Component: Laptops },

      {
        path: "users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: Users
      },

      {
        path: "users2",
        element: <Suspense fallback={<h5>Loading..</h5>}>
          <Users2 usersPromise={usersPromise}></Users2>
        </Suspense>,

      },

    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={router} />

  </StrictMode>,
)
