import { createBrowserRouter } from "react-router-dom";
import Home from "../component/Home/Home";
import UserProfile from "../component/UserProfile/UserProfile";
import Form from "../component/Form/Form";
import Counter from "../component/Counter/Counter";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
        path: "/user",
        element: <UserProfile/>
    },
    {
        path: "/form",
        element: <Form/>
    },
    {
        path: "/counter",
        element: <Counter/>
    }
]);

export default router;