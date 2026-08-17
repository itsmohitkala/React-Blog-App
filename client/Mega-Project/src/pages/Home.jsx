import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Navigate } from "react-router";
import { useDispatch } from "react-redux";
import authService from "../appwrite/Auth";
import configure from "../appwrite/Configure";
import { Container, PostCard } from "../components";
import { useSelector } from "react-redux";

function Home() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const [showCreateFirstPost, setShowCreateFirstPost] = useState(false);
  const isUserLoggedin = useSelector((state) => state.auth.status);


  

  useEffect(() => {
    try {
      configure.getDocuments().then((post) => {
        if (post) {
          setPosts(post.documents);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    try {
      if (posts.length === 0) {
        console.log("length is 0");
        
        setShowCreateFirstPost(true);
      } else {
        console.log("length is not 0");
        
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }, []);

    console.log(showCreateFirstPost);
  return posts.length===0 ? (
    <div className="mx-auto flex max-w-3xl flex-col items-center justify-center rounded-xl border border-[var(--color-border)] bg-white px-6 py-16 text-center shadow-sm">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gray-100">
        <span className="text-2xl">📄</span>
      </div>

      <h2 className="mb-2 text-xl font-semibold text-[var(--color-ink)]">
        Post not found
      </h2>

      {isUserLoggedin && (
        <Container>
        <p>create your first post</p>
        <button onClick={()=>{
            navigate('/add-post')
        }}>Add post</button>
        </Container>

      )}
    </div>
  ) : (
    <Container>
        {posts.map((post)=>{
            <PostCard />
        })}
    </Container>
  )


}

export default Home;
