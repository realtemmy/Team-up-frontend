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
import { Image, MapPin, PlusIcon } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const NewsFeed = () => {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState("");
  const [images, setImages] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const getAllPosts = async () => {
      setLoader(true);
      const { data } = await axiosService.get("/posts");
      // console.log(data);

      setPosts(data);
      setLoader(false);
    };
    getAllPosts();
  }, []);

  const handleImageChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setImages(selectedFiles);

    const urls = selectedFiles.map((file) => URL.createObjectURL(file));
    setPreviewUrls(urls);
  };

  const handlePostSubmit = async () => {
    if (!post || post === "") {
      return;
    }
    try {
      setLoader(true);
      const formData = new FormData();

      images.forEach((image) => {
        formData.append("images", image);
      });
      formData.append("post", post);
      const res = await axiosService.post("/posts", formData, {
        headers: {
          "Content-Type": "multipart/formdata",
        },
      });

      setPost("");
      toast.success("Post uploaded successfully!");
      console.log(res);
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };

  return (
    <div>
      {loader && <Loader />}
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
                  required
                  onChange={(event) => setPost(event.target.value)}
                />
              </div>
            </ScrollArea>
            <div className="flex gap-2">
              {previewUrls.map((url, index) => (
                <img
                  src={url}
                  key={index}
                  alt="preview"
                  width={50}
                  className="rounded-lg"
                />
              ))}
            </div>

            <DialogFooter>
              <div className="flex border-t pt-2 items-center justify-between w-full">
                <div className="flex items-center space-x-4">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="relative">
                        <Image />
                        <Input
                          type="file"
                          accept="image/*"
                          className="absolute top-0 opacity-0"
                          multiple
                          onChange={handleImageChange}
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Upload Image</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <MapPin />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>location</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <Button type="submit" onClick={handlePostSubmit}>
                  Post
                </Button>
              </div>
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
