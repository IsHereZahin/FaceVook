import { useAuth } from "../hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

export default function PublicRoutes(){
    const { auth } = useAuth();

    return (
        <>{!auth?.user ? <Outlet /> : <Navigate to="/" />}</>
    );
}