import { createBrowserRouter } from 'react-router-dom';
import CashoutPage from '../pages/CashoutPage';
import HomePage from '../pages/HomePageWeShare';
import LoginPage from '../pages/LoginPage';
import Layout from './Layout';
import SignupPage from '../pages/SignupPage';
import PaginationListNongov from '../pages/PaginationListNongov';
import ErrorPage from '../pages/ErrorPage';
import NonGovCardsPage from '../pages/NonGovCardsPage';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { 
                path: "", 
                element: <HomePage />,
                children: [
                    {
                        path: ":slug?",
                        element: <NonGovCardsPage />
                    }
                ]
            },
            { path: "nongov-list", element: <PaginationListNongov /> },
            { path: "login", element: <LoginPage /> },            
            { path: "cadastrar-produto", element: <SignupPage /> },            
            { path: "carrinho", element: <CashoutPage /> },            
        ]
    }
]);
export default router;