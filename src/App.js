import logo from './logo.svg';
import './App.css';
import Signup from './Component/Signup';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import { routers } from './Component/Route/Router';

function App() {
 
  return (
    <div>
       <RouterProvider router={routers}>
      
      </RouterProvider>

    
    </div>
  );
}

export default App;
