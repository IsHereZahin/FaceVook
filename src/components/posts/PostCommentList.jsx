export default function PostCommentList({ comments }) {
    return (
        <div className="pl-2 lg:pl-3">
            {comments?.length ? (
                <div className="space-y-4 divide-y divide-[#2a2a2a]">
                    {comments.map((comment) => (
                        <div
                            key={comment.id}
                            className="flex items-start gap-3 pt-4"
                        >
                            <img
                                src={`${import.meta.env.VITE_SERVER_BASE_URL}/${comment?.author?.avatar}`}
                                alt="avatar"
                                className="h-8 w-8 rounded-full object-cover"
                            />
                            <div>
                                <p className="text-sm lg:text-base leading-snug text-gray-300">
                                    <span className="font-semibold text-white">
                                        {comment?.author?.name}
                                    </span>{" "}
                                    <span className="text-gray-400">
                                        {comment.comment}
                                    </span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="py-4 text-sm text-gray-500 italic">
                    No comments yet.
                </p>
            )}
        </div>
    );
}
