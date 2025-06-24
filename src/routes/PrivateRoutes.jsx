import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/sections/Header";
import { useAuth } from "../hooks/useAuth";
import ProfileProvider from "../providers/ProfileProvider";

export default function PrivateRoutes() {
    const { auth } = useAuth();

    return (
        <>
            {auth?.authToken ? (
                <ProfileProvider>
                    <Header />
                    <main className="mx-auto max-w-3xl py-8">
                        <div className="container">
                            <Outlet />
                        </div>
                    </main>
                </ProfileProvider>
            ) : (
                <Navigate to="/login" />
            )}
        </>
    );
}