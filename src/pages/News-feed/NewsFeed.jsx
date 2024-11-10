import { useEffect, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

import Loader from "@/components/Loader/Loader";
import Post from "@/features/post/Post";
import axiosService from "@/axios";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const NewsFeed = () => {
  const [posts, setPosts] = useState([]);
    const [post, setPost] = useState("");
  const [loader, setLoader] = useState(false);

  const handlePostSubmit = async () => {
    const res = await axiosService.post("/posts", {
      post,
    });
    setPost("");
    console.log(res);
  };
  useEffect(() => {
    const getAllPosts = async () => {
      setLoader(true)
      const { data } = await axiosService.get("/posts");
      console.log(data);
      
      setPosts(data);
      setLoader(false);
    };
    getAllPosts();
  }, []);
  return (
    <div>
      <nav className="flex justify-between my-4">
        <h4>This is the post page</h4>
        <Dialog>
          <DialogTrigger>
            <Button size="sm">
              <PlusIcon />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create Post</DialogTitle>
            </DialogHeader>
            <ScrollArea>
              <div>
                <Textarea
                  placeholder="What's happening?"
                  value={post}
                  onChange={(event) => setPost(event.target.value)}
                />
              </div>
            </ScrollArea>

            <DialogFooter>
              <Button type="submit" onClick={handlePostSubmit}>
                Post
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </nav>
      <div className="space-y-4 max-w-2xl mx-auto">
        {posts.map((post, idx) => (
          <Post key={idx} post={post} />
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;
