import { useState, useEffect } from "react";
import { Ellipsis, Heart, MessageCircle, PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import axiosService from "@/axios";

const Posts = () => {
  const [post, setPost] = useState("");

  // useEffect(() => {
  //   const getAllPosts = async () => {
  //     const res = await axiosService.get("/posts");
  //     console.log(res);
  //   };
  //   getAllPosts();
  // }, []);

  const handlePostSubmit = async () => {
    const res = await axiosService.post("/posts", {
      post,
    });
    setPost("");
    console.log(res);
  };
  return (
    <div>
      <div className="flex justify-between items-center">
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
      </div>
      <section className="my-2">
        <div className="max-w-full sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl mx-auto">
          <div className=" shadow rounded p-2 flex justify-between">
            <div className="mx-2 flex gap-2 items-center">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">Realtemmy</div>
                <div className="text-sm text-slate-500">
                  Obafemi Owode, Nigeria
                </div>
              </div>
            </div>
            <Ellipsis />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore a
            laudantium dolore aspernatur pariatur necessitatibus velit, corporis
            omnis aut sapiente? Sapiente velit vero hic voluptates odio libero
            magni perferendis provident beatae explicabo quos iste mollitia,
            unde possimus dolore porro! Nostrum nesciunt alias amet, ab maxime
            autem assumenda ullam error aperiam?
          </p>
          {/* Horizontal scrollarea */}
          <ScrollArea>
            <img src="" alt="image" />
          </ScrollArea>
          <div className="border-t border-b flex gap-4 py-2">
            <span>
              <Heart />
            </span>
            <span>
              <MessageCircle />
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold text-sm">925 likes</span>
            <div className="flex gap-4">
              <span>23 comments &middot;</span>
              <span>4 reposts</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Posts;
