import { useEffect, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import useAxios from '../hooks/useAxios';

export default function ProfilePage() {
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const { api } = useAxios();
    const { auth } = useAuth();

    useEffect(() => {
        setLoading(true);
        const fetchProfile = async () => {
            try {
                const response = await api.get(`${import.meta.env.VITE_SERVER_BASE_URL}/profile/${auth.user.id}`);

                setUser(response.data.user);
                setPosts(response.data.posts);
            } catch (error) {
                console.log(error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchProfile();
    }, [api, auth.user.id, setPosts, setUser]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading profile: {error.message}</div>;

    return (
        <div>
            WelCome, {user?.firstName} {user?.lastName}!
            <p>
                Email: {user?.email}
            </p>
            <p>{posts?.length}</p>
        </div>
    );
}