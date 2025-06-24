import PostCard from "./PostCard";

export default function PostList({ posts }) {
    return posts?.length ? (
        posts.map((post) => <PostCard key={post.id} post={post} />)
    ) : (
        <p className="text-sm text-gray-400 italic">No posts found.</p>
    );
}