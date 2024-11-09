import {
  Heart,
  MessageSquare,
  Ellipsis,
  Edit,
  Trash,
  Trash2,
  MessageCircle,
  SendHorizonal,
  Redo2,
  Bookmark,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
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
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";

const Post = ({ post }) => {
  return (
    <Card className="border shadow-lg rounded-lg">
      <CardHeader className="flex space-x-4 p-4">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <Avatar>
              <AvatarImage src={post.user.avatar} alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold">{post.user.name}</h3>
              <p className="text-sm text-gray-500">{post.createdAt}</p>
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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet impedit
          cum explicabo architecto voluptates harum? Cumque laborum explicabo
          magni provident? Dolor distinctio et nobis, quam dicta odio, aliquam
          iusto, minus ipsa sit recusandae. Fuga porro quisquam qui fugit
          quibusdam, aut est odio in accusantium dolore quo possimus, provident
          iste voluptatem?
        </p>
        <ScrollArea className="w-full">
          <div className="grid grid-flow-col auto-cols-[minmax(200px,_1fr)] w-full gap-2 p-4 overflow-x-auto">
            <img
              src="https://images.unsplash.com/photo-1508030358362-c071fa056233?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Scenic landscape"
              className="object-cover max-h-56 flex-grow basis-0 w-full min-w-48 aspect-[3/4] rounded"
              loading="lazy"
            />
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Mountain landscape"
              className="object-cover max-h-56 flex-grow basis-0 w-full min-w-48 aspect-[3/4] rounded"
              loading="lazy"
            />

            {/* Additional images */}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </CardContent>
      <CardFooter className="block">
        <section className="border-y py-2 flex justify-between">
          <div className="flex gap-4">
            <div className="cursor-pointer">
              <Heart />
            </div>
            <div className="cursor-pointer">
              <MessageCircle />
            </div>
            <div className="cursor-pointer">
              <SendHorizonal />
            </div>
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
          <div className="font-medium">{post.likes} likes</div>
          <div className="flex gap-2">
            <span>{post.comments.length} comments &#183; </span>
            <span>4 reposts</span>
          </div>
        </section>
        <div>
          <Input placeholder="Add a comment..." />
        </div>
      </CardFooter>
      {/* <Comments comments={post.comments} /> */}
    </Card>
  );
};

export default Post;
