import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/sections/Header";
import { useAuth } from "../hooks/useAuth";

export default function PrivateRoutes() {
    const { auth } = useAuth();

    return (
        <>
            {auth?.user ? (
                <>
                    <Header />
                    <main className="mx-auto max-w-3xl py-8">
                        <div className="container">
                            <Outlet />
                        </div>
                    </main>
                </>
            ) : (
                <Navigate to="/login" />
            )}
        </>
    );
}