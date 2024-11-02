import { createBrowserRouter} from 'react-router-dom'
import Dashboard from '../Components/Dashboard/Dashboard'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "overview",
        element: <h2 className='text-3xl'> this is Overview</h2>
      },
      {
        path: "inventory",
        element: <h2 className='text-3xl'> this is inventory</h2>
      },
      {
        path: "sales",
        element: <h2 className='text-3xl'> this is sales</h2>
      },
    ]
  },
  
])


export default router