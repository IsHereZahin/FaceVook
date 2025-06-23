import Header from "../components/sections/Header";
import { useAuth } from "../hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoutes() {
    const { auth } = useAuth();

    return (
        <>
            {auth?.user ? (
                <main className="mx-auto max-w-3xl py-8">
                    <div className="container">
                        <Header />
                        <Outlet />
                    </div>
                </main>
            ): (
                    <Navigate to = "/login" />
            )}
        </>
    );
}