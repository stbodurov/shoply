import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { checkUserSession } from './redux/User/user.actions';

// hoc
import WithAuth from './hoc/withAuth';
import WithAdminAuth from './hoc/withAdminAuth';

// layouts
import MainLayout from './layouts/MainLayout';
import HomepageLayout from './layouts/HomepageLayout';
import AdminLayout from './layouts/AdminLayout';
import DashboardLayout from './layouts/DashboardLayout';

// pages
import Homepage from './pages/Homepage';
import Product from './pages/Product';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Recovery from './pages/Recovery';
import Dashboard from './pages/Dashboard';
import Admin from './pages/Admin';
import './default.scss';

const router = createBrowserRouter(
  createRoutesFromElements(
    [
      <Route path="/" element={(
        <HomepageLayout>
          <Homepage />
        </HomepageLayout>
      )}
      />,
      <Route exact path="/products" element={(
        <WithAuth>
          <HomepageLayout>
            <Products />
          </HomepageLayout>
        </WithAuth>
      )}
      />,
      <Route exact path="/products/:id" element={(
        <WithAuth>
          <HomepageLayout>
            <Product />
          </HomepageLayout>
        </WithAuth>
      )}
      />,
      <Route path="/registration" element={(
        <MainLayout>
          <Registration />
        </MainLayout>
      )} />,
      <Route path="/login"
        element={(
          <MainLayout>
            <Login />
          </MainLayout>
        )} />,
      <Route path="/recovery" element={(
        <MainLayout>
          <Recovery />
        </MainLayout>
      )} />,
      <Route path="/dashboard" element={(
        <WithAuth>
          <DashboardLayout>
            <Dashboard />
          </DashboardLayout>
        </WithAuth>
      )} />,
      <Route path="/cart" element={(
        <WithAuth>
          <DashboardLayout>
            <Cart />
          </DashboardLayout>
        </WithAuth>
      )} />,
      <Route path="/admin" element={(
        <WithAdminAuth>
          <AdminLayout>
            <Admin />
          </AdminLayout>
        </WithAdminAuth>
      )} />
    ]

  ))

const App = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  });

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
