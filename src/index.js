import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createHashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createHashRouter([{
	path: "/*",
	element: <App />
}]);

root.render(
	<RouterProvider router={router} />
);
