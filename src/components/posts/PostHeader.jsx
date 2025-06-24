import { useState } from "react";
import ThreeDotsIcon from "../../assets/icons/3dots.svg";
import DeleteIcon from "../../assets/icons/delete.svg";
import EditIcon from "../../assets/icons/edit.svg";
import TimeIcon from "../../assets/icons/time.svg";
import { useAvatar } from "../../hooks/useAvatar";
import { getDateDifferenceFromNow } from "../../utils";

export default function PostHeader({ post }) {
    const [showAction, setShowAction] = useState(false);
    const { avatarUrl } = useAvatar(post);

    function toggleAction() {
        setShowAction(!showAction);
    }
    return (
        <header className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
                <img
                    className="max-w-10 max-h-10 rounded-full lg:max-h-[58px] lg:max-w-[58px]"
                    src={avatarUrl}
                    alt="avatar"
                />
                <div>
                    <h6 className="text-lg lg:text-xl">{post?.author?.name}</h6>
                    <div className="flex items-center gap-1.5">
                        <img src={TimeIcon} alt="time" />
                        <span className="text-sm text-gray-400 lg:text-base">{`${getDateDifferenceFromNow(
                            post?.createAt
                        )} ago`}</span>
                        <span className="text-sm text-gray-400 lg:text-base"></span>
                    </div>
                </div>
            </div>

            <div className="relative">
                <button onClick={toggleAction} className="cursor-pointer">
                    <img src={ThreeDotsIcon} alt="3dots of Action" />
                </button>

                {showAction && (
                    <div
                        className="absolute right-0 mt-2 w-40 rounded-md shadow-lg border"
                        style={{ backgroundColor: '#17181C', borderColor: '#2E2F33' }}
                    >
                        <button
                            className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-200 w-full text-left rounded-t-md cursor-pointer"
                            type="button"
                        >
                            <img src={EditIcon} alt="Edit" className="w-5 h-5" />
                            <span>Edit</span>
                        </button>
                        <button
                            className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-200 w-full text-left rounded-b-md cursor-pointer"
                            type="button"
                        >
                            <img src={DeleteIcon} alt="Delete" className="w-5 h-5" />
                            <span>Delete</span>
                        </button>
                    </div>
                )}

            </div>
        </header>
    );
};