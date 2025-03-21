"use client";

import { usePostStore } from "@/store/usePostStore";

export default function Home() {
  const { posts, addPost } = usePostStore();

  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-screen p-4">
      <button
        onClick={() =>
          addPost({ id: Date.now(), title: "New Post", content: "This is a new post." })
        }
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Post
      </button>

      {posts.map((post) => (
        <div key={post.id} className="border p-4 rounded-md w-80">
          <h2 className="text-xl font-bold">{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}
