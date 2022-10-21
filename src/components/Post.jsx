import { useEffect, useState } from "react";
import { fetchPosts } from "../api/auth";
import CreateNewPost from "../components/Createpost";
import { deletePost } from "../api/auth";
import useAuth from "../Hooks/Authhook";
import { useNavigate } from "react-router-dom";
import SearchBar from "./Searchbar";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const { token } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    async function loadPosts() {
      const result = await fetchPosts();
      setPosts(result.data.posts);
    }

    loadPosts();
  }, []);
  return (
    <div key={posts._id}>
      <SearchBar />

      <CreateNewPost />
      {posts.map((post) => {
        return (
          <div key={post.title}>
            <h3>{post.title}</h3>
            <h3>{post.description}</h3>
            <h4>{post.price}</h4>

            <button
              onClick={() => {
                navigate(`/posts/${post._id}`);
              }}
            >
              See Details
            </button>

            <button
              onClick={async () => {
                const deletedPost = await deletePost(token, post._id);
                console.log(deletedPost);
                // filter over the posts in state, and remove the post you just deleted
                // resset your posts in state with the new filtered posts
                if (deletedPost.success) {
                  const currentPost = posts.filter((singlePost) => {
                    console.log("post", post);
                    console.log("deletepost", deletedPost);
                    return singlePost._id !== post._id;
                  });

                  setPosts(currentPost);
                }
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}
