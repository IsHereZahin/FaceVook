import { useAvatar } from "../../hooks/useAvatar";
import PostCommentList from "./PostCommentList";

export default function PostComments({ post }) {
    const { avatarUrl } = useAvatar(post);

    return (
        <div className="rounded-xl border border-[#2f2f2f] bg-[#1d1d1d] p-4 shadow-sm">
            {/* Comment input */}
            <div className="flex items-center gap-3 mb-4">
                <img
                    className="h-8 w-8 rounded-full object-cover lg:h-9 lg:w-9"
                    src={avatarUrl}
                    alt="avatar"
                />

                <input
                    type="text"
                    name="post"
                    id="post"
                    placeholder="Write a comment..."
                    className="flex-1 rounded-full border border-[#3a3a3a] bg-[#2a2a2a] px-4 py-2 text-sm text-gray-200 placeholder-gray-400 focus:border-gray-500 focus:outline-none"
                />
            </div>

            {/* Show all comments button */}
            <div className="mb-2 flex justify-end">
                <button className="text-sm text-gray-400 transition hover:text-gray-200">
                    Show All Comments ▾
                </button>
            </div>

            {/* Comment list */}
            <div className="mt-2 border-t border-[#3f3f3f] pt-4">
                <PostCommentList comments={post?.comments} />
            </div>
        </div>
    );
}
