import { childern } from "react";
import { Navigate } from "react-router-dom"
import { useAuthStore } from "../store/auth";

const PrivateRoute = ({childern}) => {
    const loggedIn = useAuthStore((state) => state.isLoggedIn)();

    return loggedIn ? <>{childern}</> : <Navigate to = "/Login/" />;
}

export default PrivateRoute;

