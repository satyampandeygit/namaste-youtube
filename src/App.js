import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { Header } from './Header/Header';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {MainContainer} from './MainContainer';
import { WatchPage } from './WatchPage';
import { Body } from './Body/Body';

const appRouter = createBrowserRouter([
  {
      path: "/",
      element: <Body/>,
      children: [
          {
            path: "/",
            element: <MainContainer/>
          },
          {
            path: "/watch",
            element: <WatchPage/>
          }
      ]
  }
]);

function App() {
  return (
    <>
      <Provider store={store}>
        <Header/>
        <RouterProvider router={appRouter}/>
      </Provider>
    </>
  );
}

export default App;
