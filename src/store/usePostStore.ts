import { create } from 'zustand';

type Post = {
  id: number;
  title: string;
  content: string;
};

type PostState = {
  posts: Post[];
  addPost: (post: Post) => void;
};

export const usePostStore = create<PostState>((set) => ({
  posts: [],
  addPost: (post) =>
    set((state) => ({
      posts: [...state.posts, post],
    })),
}));
