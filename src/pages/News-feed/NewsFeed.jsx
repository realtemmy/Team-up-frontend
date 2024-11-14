import { useEffect, useState } from "react";
import { Image, MapPin, PlusIcon, Smile } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import EmojiPicker from "emoji-picker-react";

import Loader from "@/components/Loader/Loader";
import Post from "@/features/post/Post";
import axiosService from "@/axios";

const NewsFeed = () => {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState("");
  const [images, setImages] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);
  const [loader, setLoader] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

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

  const handleEmojiClick = (emojiData) => {
    setPost((prevPost) => prevPost + emojiData.emoji);
    setShowEmojiPicker(false); // Hide the picker after selection
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
          <DialogContent className="relative">
            <DialogHeader>
              <DialogTitle>Create Post</DialogTitle>
            </DialogHeader>
            <ScrollArea className="-z-50">
              <div className="relative">
                <Textarea
                  placeholder="What's happening?"
                  value={post}
                  required
                  onChange={(event) => setPost(event.target.value)}
                />
                <Smile
                  className="absolute top-2 right-2 cursor-pointer"
                  onClick={() => setShowEmojiPicker((prev) => !prev)}
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
            {showEmojiPicker && (
              <div
                style={{
                  zIndex: 50000,
                  position: "absolute",
                }}
                className="top-0 right-0"
              >
                <EmojiPicker
                  onEmojiClick={handleEmojiClick}
                  rows={4}
                  perRow={8}
                  emojiSize={32}
                />
              </div>
            )}

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
