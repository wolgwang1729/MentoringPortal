import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './index.css';
import Layout from './Layout.jsx';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Resources from './components/Resources.jsx';
import Events from './components/Events.jsx';
import QA from './components/QA.jsx';
import MentorConnect from './components/MentorConnect.jsx';
import { Provider } from 'react-redux';
import { store } from './store/store.js';
import Profile from './components/Profile.jsx';
import MyQueries from './components/MyQueries.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/resources' element={<Resources />} />
      <Route path='/events' element={<Events />} />
      <Route path='/mentor-connect' element={<MentorConnect />} />
      <Route path='/q&a' element={<QA />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/my-queries' element={<MyQueries />} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);