import './App.css'
import {RouterProvider,createBrowserRouter} from 'react-router'
import Form from './to do list/form'
import Home from './Home'
import Root from './components/root'

function App(){

        const router1 =createBrowserRouter([
            { path:'/', 
              element:<Root/>,
              children:[ { path:'/' , element:<Home/>},
                        { path:'/form', element:<Form/>}
                    ] 
            }
            
        ])
    return<>
    <RouterProvider router={router1}/>
    </>
}


export default App
