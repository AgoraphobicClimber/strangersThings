import { useEffect, useState } from "react";
import { fetchPosts } from "../api/auth";
import CreateNewPost from "../components/Createpost";
import { useNavigate } from "react-router-dom";
import styles from "../ComponentCss/Post.module.css"

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    async function loadPosts() {
      const result = await fetchPosts();
      setPosts(result.data.posts);
    }

    loadPosts();
  }, []);
  function postMatches(post, text) {
    return post.title.toLowerCase().includes(text);
  }
  const filteredPosts = posts.filter(post => postMatches(post, searchTerm));
  const postsToDisplay = searchTerm.length ? filteredPosts : posts;
  return (
    <div key={posts._id}>
      <h5 className={styles.searchbar}>Please search in lowercase!</h5>
      <input className={styles.searchbarr}
        type="text"
        value={searchTerm}
        placeHolder="Search"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <CreateNewPost />
      {postsToDisplay.map((post) => {
        return (
          <div className={styles.postlist} key={post.title}>


            <div />
            <h3>{post.title}</h3>
            <h4>{post.price}</h4>

            <button
              onClick={() => {
                navigate(`/posts/${post._id}`);
              }}
            >
              See Details
            </button>


          </div>
        );

      })}
    </div >
  );
}

