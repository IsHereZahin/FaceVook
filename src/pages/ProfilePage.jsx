import { useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import useAxios from '../hooks/useAxios';
import { useProfile } from '../hooks/useProfile';
import { actions } from '../actions';
import ProfileInfo from '../components/profile/ProfileInfo';
import MyPosts from '../components/profile/myPosts';

export default function ProfilePage() {
    const {state, dispatch} = useProfile();
    const { api } = useAxios();
    const { auth } = useAuth();

    useEffect(() => {
        dispatch({type: actions.profile.DATA_FETCHING});
        const fetchProfile = async () => {
            try {
                const response = await api.get(`${import.meta.env.VITE_SERVER_BASE_URL}/profile/${auth.user.id}`);

                if (response.status === 200) {
                    dispatch({
                        type: actions.profile.DATA_FETCHED,
                        data: response.data,
                    });
                }
            } catch (error) {
                console.log(error);
                dispatch({
                    type: actions.profile.DATA_FETCH_ERROR,
                    error: error.message || 'An error occurred while fetching profile data.',
                });
            }
        };
        fetchProfile();
    }, [api, auth.user.id, dispatch]);

    if (state?.loading) return <div>Loading...</div>;
    if (state?.error) return <div>Error loading profile: {state?.error.message}</div>;

    return (
        <>
            <ProfileInfo />
            <MyPosts />
        </>
    );
}