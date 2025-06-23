import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function HomePage() {
    const { auth } = useAuth();
    console.log(auth);

    return (
        <>
            <p>{auth?.user ? `User Logged In: ${auth.user.email}` : "User Logged Out"}</p>
            <h1>Home Page</h1>
            <Link to="/me">Go to Profile Page</Link>
        </>
    );
}