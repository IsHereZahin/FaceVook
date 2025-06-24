import CommentIcon from "../../assets/icons/comment.svg";
import LikeIcon from "../../assets/icons/like.svg";
import ShareIcon from "../../assets/icons/share.svg";

export default function PostAction({ commentCount, onClickComment }) {
    return (
        <div className="flex items-center justify-between py-6 lg:px-10 lg:py-8">
            <button className="flex items-center gap-2 text-xs font-bold text-[#B8BBBF] hover:text-white lg:text-sm cursor-pointer">
                <img src={LikeIcon} alt="Like" />
                <span>Like</span>
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
