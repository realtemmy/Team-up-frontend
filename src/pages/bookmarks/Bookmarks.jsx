import axiosService from "@/axios";
import React, { useEffect, useState } from "react";
import Post from "@/features/post/Post";

const Bookmarks = () => {
  const [posts, setPosts ] = useState([]);
  // Get all bookmarked posts
  useEffect(() => {
    const getBookMarks = async () => {
      const { data } = await axiosService.get("/posts/bookmarks");
      setPosts(data);
      console.log(data);
    };
    getBookMarks();
  }, []);
  return (
    <div className="border">
      {
        <div className="space-y-4 max-w-2xl col-span-4">
          {posts.map((post, idx) => (
            <Post key={idx} post={post} />
          ))}
        </div>
      }
    
    </div>
  );
};

export default Bookmarks;
