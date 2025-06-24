import { useState } from "react";
import CommentIcon from "../../assets/icons/comment.svg";
import LikeIcon from "../../assets/icons/like.svg";
import LikeFilledIcon from "../../assets/icons/like-filled.svg";
import ShareIcon from "../../assets/icons/share.svg";
import { useAuth } from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";

export default function PostAction({ post, commentCount, onClickComment }) {
    const { auth } = useAuth();
    const [liked, setLiked] = useState(post?.likes?.includes(auth?.user?.id));
    const { api } = useAxios();

    const handleLike = async () => {
        try {
            const response = await api.patch(
                `${import.meta.env.VITE_SERVER_BASE_URL}/posts/${post.id}/like`
            );

            if (response.status === 200) {
                setLiked((prev) => !prev);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="flex items-center justify-between py-6 lg:px-10 lg:py-8">
            <button
                className="cursor-pointer flex-center gap-2 text-xs font-bold text-[#B8BBBF] hover:text-white lg:text-sm"
                onClick={handleLike}
            >
                <img
                    className="w-6"
                    src={liked ? LikeFilledIcon : LikeIcon}
                    alt="Like"
                />
                <span>{liked ? "Liked" : "Like"}</span>
            </button>

            <button
                onClick={onClickComment}
                className="flex items-center gap-2 px-6 py-3 text-xs lg:px-12 lg:text-sm cursor-pointer text-[#B8BBBF] hover:text-white"
            >
                <img src={CommentIcon} alt="Comment" />
                <span>
                    {commentCount > 0 ? `Comment (${commentCount})` : "Comment"}
                </span>
            </button>

            <button className="flex items-center gap-2 text-xs font-bold text-[#B8BBBF] hover:text-white lg:text-sm cursor-pointer">
                <img src={ShareIcon} alt="Share" />
                <span>Share</span>
            </button>
        </div>
    );
}
