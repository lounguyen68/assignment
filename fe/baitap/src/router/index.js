import { createBrowserRouter } from "react-router-dom";
import Home from "../component/Home/Home";
import UserProfile from "../component/UserProfile/UserProfile";
import Form from "../component/Form/Form";

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
]);

export default router;