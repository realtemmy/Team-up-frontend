import { useState } from "react";
import {
  Heart,
  Ellipsis,
  Edit,
  Trash2,
  MessageCircle,
  SendHorizonal,
  Redo2,
  Bookmark,
  Smile,
  MoveLeft,
  MoveRight,
  Copy,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

import useTimeAgo from "@/hooks/use-timeago";
import Comments from "../comments/Comments";
import EmojiPicker from "emoji-picker-react";

import defaultImage from "./../../assets/default profile.jpg";
import axiosService from "@/axios";

const Post = ({ post }) => {
  // Emoji display is dynamic, not just bottom but based on where space dey
  const [showComment, setShowComment] = useState(false);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  // Fetch comments from postId
  const handleCommentsDisplay = async () => {
    // Add skeleton before comment arrives
    const { data } = await axiosService.get(`/posts/${post._id}/comments`);
    setComments(data);
    console.log(data);

    setShowComment(!showComment);
  };

  const handleEmojiClick = (emojiData) => {
    setComment((prevComment) => prevComment + emojiData.emoji);
    setShowEmojiPicker(false); // Hide the picker after selection
  };

  const handlePostLike = async () => {
    const { status } = await axiosService.patch(`/posts/${post._id}/like`);
    if (status === "success") {
      toast.success("Post liked successfully!");
    }
  };

  const handleCommentToPost = async (event) => {
    event.preventDefault();
    const { data } = await axiosService.post(`/posts/${post._id}/comments`, {
      comment,
    });
    console.log(data);
    setComment("");
    toast.success("Comment added successfully.");
  };
  const handleNextImage = () => {
    setPhotoIndex(photoIndex + 1);
  };
  const handlePrevImage = () => {
    setPhotoIndex(photoIndex - 1);
  };

  return (
    <Card className="border shadow-lg rounded-lg">
      <CardHeader className="flex space-x-4 p-4">
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage
                src={post.userId.photo || defaultImage}
                alt="@shadcn"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold">{post.userId.name}</h3>
              <p className="text-sm text-gray-500">
                {useTimeAgo(post.createdAt)}
              </p>
            </div>
          </div>
          <Popover>
            <PopoverTrigger>
              <Ellipsis />
            </PopoverTrigger>
            <PopoverContent className="w-40">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <Button
                    className="flex items-center gap-1 font-medium w-full text-start"
                    variant="outline"
                  >
                    <Edit size={20} color="orange" /> Edit
                  </Button>
                  <Button
                    className="flex items-center gap-1 font-medium w-full"
                    variant="outline"
                  >
                    <Trash2 size={20} color="red" /> Delete
                  </Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <p>{post.post}</p>
        <ScrollArea className="w-full">
          {post.images.length > 0 && (
            <div className="grid grid-flow-col auto-cols-[minmax(200px,_1fr)] w-full gap-2 p-4 overflow-x-auto">
              {post.images.map((image, index) => (
                <Dialog key={index} className="w-96">
                  <DialogTrigger>
                    <img
                      src={image}
                      onClick={() => setPhotoIndex(index)}
                      alt={`Post image ${index + 1}`}
                      className="object-cover max-h-56 flex-grow basis-0 w-full min-w-48 aspect-[3/4] rounded"
                      loading="lazy"
                    />
                  </DialogTrigger>
                  <DialogContent className="p-0">
                    <div className="relative">
                      <div
                        className={
                          photoIndex > 0
                            ? "absolute -left-8 cursor-pointer bottom-1/2"
                            : "hidden"
                        }
                      >
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <MoveLeft
                                color="white"
                                onClick={handlePrevImage}
                              />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Prev Image</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <img
                        src={post.images[photoIndex]}
                        alt={`Post image ${index + 1}`}
                        className="object-cover  rounded"
                        loading="lazy"
                      />
                      <div
                        className={
                          photoIndex !== post.images.length - 1
                            ? "absolute -right-8 cursor-pointer bottom-1/2"
                            : "hidden"
                        }
                      >
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <MoveRight
                                color="white"
                                onClick={handleNextImage}
                              />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Next Image</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
              {/* If image is not loading due to maybe no internet etc, display skeleton */}
              {/* <Skeleton /> */}
            </div>
          )}

          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </CardContent>
      <CardFooter className="block">
        <section className="border-y py-2 flex justify-between">
          <div className="flex gap-4">
            <div className="cursor-pointer">
              <Heart onClick={handlePostLike} />
            </div>
            <div className="cursor-pointer">
              <MessageCircle onClick={handleCommentsDisplay} />
            </div>

            <Dialog>
              <DialogTrigger asChild>
                <SendHorizonal className="cursor-pointer" />
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Share link</DialogTitle>
                  <DialogDescription>
                    Anyone who has this link will be able to view this.
                  </DialogDescription>
                </DialogHeader>
                <div className="flex items-center space-x-2">
                  <div className="grid flex-1 gap-2">
                    <Label htmlFor="link" className="sr-only">
                      Link
                    </Label>
                    <Input
                      id="link"
                      defaultValue={`https://teamup.com/feed/${post._id}`}
                      readOnly
                    />
                  </div>
                  <Button type="submit" size="sm" className="px-3">
                    <span className="sr-only">Copy</span>
                    <Copy />
                  </Button>
                </div>
                <DialogFooter className="sm:justify-start">
                  <DialogClose asChild>
                    <Button type="button" variant="secondary">
                      Close
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>

          </div>
          <div className="flex gap-4">
            <div className="cursor-pointer">
              <Redo2 />
            </div>
            <div className="cursor-pointer">
              <Bookmark />
            </div>
          </div>
        </section>
        <section className="my-2 text-sm md:text-base flex justify-between items-center">
          <div className="font-medium">{post.likesCount} likes</div>
          <div className="flex gap-2">
            <span>{post.comments.length} comments &#183; </span>
            <span>0 reposts</span>
          </div>
        </section>
        <form className="flex gap-1 relative" onSubmit={handleCommentToPost}>
          <div className="w-full relative">
            <Input
              placeholder="Add a comment..."
              value={comment}
              onChange={(event) => setComment(event.target.value)}
            />
            <Smile
              className="absolute right-2 top-2 cursor-pointer"
              onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            />
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

          <Button>Send</Button>
        </form>
      </CardFooter>
      {showComment && <Comments comments={comments} />}
    </Card>
  );
};

export default Post;
