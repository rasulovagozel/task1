import { createBrowserRouter } from "react-router-dom";
import Layout from "./src/features/Layout";
import Home from "./src/pages/Home";
import About from "./src/pages/About";
import Blog from "./src/pages/Blog";
import Contact from "./src/pages/Contact";
import Listing from "./src/pages/Listing";

export const routers=createBrowserRouter([
    {
        element:<Layout />,
        children:[
            {
                element:<Home />,
                path:"/"
            },
            {
                element:<About />,
                path:"/about"
            },
            {
                element:<Blog />,
                path:"/blog"
            },
            {
                element:<Contact/>,
                path:"/contact"
            },
            {
                element:<Listing />,
                path:"/listing"
            }
        ]
    }
])