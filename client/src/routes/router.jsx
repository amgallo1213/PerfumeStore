import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Home from "../pages/home/Home"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/", element: <Home/>
            },
            {
                path: "/about", element: <h1>About</h1>
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
                path: "/learn", element: <h1>Learn</h1>
            }
        ]
    }
])


export default router