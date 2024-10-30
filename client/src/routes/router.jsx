import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Home from "../pages/home/Home"
import Products from "../pages/products/Products"
import About from "../pages/about/About"
import Learn from "../pages/learn/Learn"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/", element: <Home/>
            },
            {
                path: "/products", element: <Products />
            },
            {
                path: "/about", element: <About />
            },
            {
                path: "/contact", element: <h1>Contact</h1>
            },
            {
                path: "/login", element: <h1>Login</h1>
            },
            {
                path: "/register", element: <h1>Register</h1>
            },
            {
                path: "/learn", element: <Learn />
            }
        ]
    }
])


export default router