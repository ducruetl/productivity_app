import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './index.css';
import App from './elements/App';
import Login from './elements/Login';
import Signup from './elements/Signup';

const router = createBrowserRouter([
	{
		path: "/",
		element: <App/>
	},
	{
		path: "/login",
		element: <Login/>
	},
	{
		path: "/signup",
		element: <Signup/>
	}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
