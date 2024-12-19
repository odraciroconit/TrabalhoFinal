import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'


import RootLayout from './pages/RootLayout';
import HomePage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register'




import ErrorPage from './pages/ErrorPage';
import { Loja } from './pages/Loja';



const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: 'root',
    loader: () => ({ login: localStorage.getItem('token') ? true : false }),
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/login', element: <Login /> },
      { path: '/registo', element: <Register /> },
      { path: '/loja', element: <Loja /> },


      
      
      
    ],
  },
]);


function App() {

  
  

  return <RouterProvider router = {router}/>
  
  
}

export default App
