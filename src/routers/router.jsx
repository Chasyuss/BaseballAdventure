import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../styles/MainLayout';
import Main from '../pages/Main';
import Login from '../pages/Login';
import Join from '../pages/Join';
import Mypage from '../pages/Mypage';
import Gameroom from '../pages/Gameroom';
import Makeroom from '../pages/Makeroom';
import Gamepage from '../pages/Gamepage';
import { requireAuthLoader } from './requireAuthLoader';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Main />
            },

            {
                path: '/mypage',
                element: <Mypage />,
                loader: requireAuthLoader
            },

            {
                path: '/room',
                element: <Gameroom />
            },

            {
                path: '/makeroom',
                element: <Makeroom />
            },


            {
                path: '/gamepage',
                element: <Gamepage />
            }
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