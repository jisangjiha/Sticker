import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import App from './App';
import Greeting from './page/Greeting';
import theme from './Theme';

const root = document.querySelector('#root');

if (root === null) {
  throw new Error('Cannot find root!');
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="/greeting" element={<Greeting />} />
    </>,
  ),
);

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
);
