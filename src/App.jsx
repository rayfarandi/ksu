import {createBrowserRouter,RouterProvider} from 'react-router-dom'

// page & components
import Home from './page/Home'
import Abouts from './page/About'
import Portofolio from './page/Portofolio'
import Kontak from './page/Kontak'


const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/about',
    element:<Abouts/>
  },
  {
    path:'/portofolio',
    element:<Portofolio/>
  },
  {
    path:'/kontak',
    element:<Kontak/>
  }
])

const App = () => {
  return(
    <RouterProvider router={router}/>
  )
};

export default App;
