import Add from "../pages/Admin/Add/Add";
import AdminRoot from "../pages/Admin/AdminRoot";
import Dashboard from "../pages/Admin/Dashboard/Dashboard";
import Favorite from "../pages/User/Favorite/Favorite";
import Home from "../pages/User/Home/Home";
import UserRoot from "../pages/User/UserRoot";
import {createBrowserRouter} from "react-router-dom"
const routes =createBrowserRouter([
    {
        path: '',
        element:<UserRoot/>,
        children:[
            {
                path: '',
                element: <Home/>
            },
            {
                path:"fav",
                element:<Favorite/>
                
            }

        ]
        
    },
    {
        path:"/admin",
        element:<AdminRoot/>,
        children:[
            {
                path: '',
                element:<Dashboard/>


            },
            {
                path: 'add',
                element: <Add/>
            }
            
        ]
    }

])

export default routes