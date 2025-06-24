import { useState } from "react";
import { actions } from "../../actions";
import EditIcon from "../../assets/icons/edit.svg";
import CheckIcon from "../../assets/icons/like.svg";
import useAxios from "../../hooks/useAxios";
import { useProfile } from "../../hooks/useProfile";

export default function Bio() {
    const { state, dispatch } = useProfile();
    const { api } = useAxios();
    const [bio, setBio] = useState(state?.user?.bio);
    const [editMode, setEditMode] = useState(false);

    const handleBioEdit = async (e) => {
        e?.preventDefault?.();
        dispatch({ type: actions.profile.DATA_FETCHING });

        try {
            const response = await api.patch(`${import.meta.env.VITE_SERVER_BASE_URL}/profile/${state?.user?.id}`, { bio });

            if (response.status === 200) {
                dispatch({
                    type: actions.profile.USER_DATA_EDITED,
                    payload: response.data
                });
            }

            setEditMode(false);
        } catch (error) {
            console.error("Error updating bio:", error);
            dispatch({
                type: actions.profile.DATA_FETCHING_ERROR,
                payload: error.message
            });
        }
    };

    return (
        <div className="mt-4 flex items-start gap-2 lg:mt-6">
            <div className="flex-1">
                {!editMode ? (
                    <p className="leading-[188%] text-gray-400 lg:text-lg">
                        {state?.user?.bio || "No bio available."}
                    </p>
                ) : (
                    <textarea
                        className="w-full rounded-lg border border-gray-600 bg-transparent p-2 text-gray-400 focus:border-gray-200 focus:outline-none"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        rows={3}
                    />
                )}
            </div>

            {!editMode ? (
                <button
                    className="cursor-pointer flex-center h-7 w-7 rounded-full"
                    onClick={() => setEditMode(true)}
                >
                    <img src={EditIcon} alt="Edit" />
                </button>
            ) : (
                <button
                    className="cursor-pointer flex-center h-7 w-7 rounded-full"
                    type="button"
                    onClick={handleBioEdit}
                >
                    <img src={CheckIcon} alt="Save" />
                </button>
            )}

        </div>
    );
}