import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App'
import CreateaPostPage from './pages/CreatePostPage';

const router = createBrowserRouter ([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/create',
        element: <CreateaPostPage  />
    },
])

const Router = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default Router;