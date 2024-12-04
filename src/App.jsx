import './App.css'
import {RouterProvider,createBrowserRouter} from 'react-router'
import Form from './to do list/form'
import Home from './Home'
import Root from './components/root'
import Todo from './todo'

function App(){

        const router1 =createBrowserRouter([
            { path:'/', 
              element:<Root/>,
              children:[ { path:'/' , element:<Home/>},
                        { path:'/form', element:<Form/>},
                        {path:'/todo', element:<Todo/>}
                    ] 
            }
            
        ])
    return<>
    <RouterProvider router={router1}/>
    </>
}


export default App
