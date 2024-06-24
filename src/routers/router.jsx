import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../styles/MainLayout';
import Main from '../pages/Main';
import Login from '../pages/Login';
import Join from '../pages/Join';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Main />
            },
        ]
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/join',
        element: <Join />
    }

])

export default router;