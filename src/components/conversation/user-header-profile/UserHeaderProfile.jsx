/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { toggleDM, toggleProfile } from "@/redux/chat-redux/chatSlice";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Video, Phone } from "lucide-react";

const UserHeaderProfile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.chat);

  const handleOpen = () => {
    dispatch(toggleProfile(true));
  };
  const handleClose = () => {
    dispatch(toggleDM(false));
  };

  // console.log("User: ", user);
  return (
    <div
      style={{
        height: "50px",
      }}
      className="border shadow-lg flex justify-between px-2 m-0"
    >
      <div className="flex gap-4">
        <div className="col-span-1 flex items-center gap-1">
          <span className="cursor-pointer" onClick={handleClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z"
                clipRule="evenodd"
              />
            </svg>
          </span>

          <Avatar
            onClick={handleOpen}
            className="cursor-pointer hidden lg:block"
          >
            <AvatarImage src={"https://github.com/shadcn.png"} alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Avatar className="cursor-pointer">
                <AvatarImage
                  src={"https://github.com/shadcn.png"}
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </SheetTrigger>
            <SheetContent>
              <ScrollArea className="h-screen w-full relative">
                <div className="flex flex-col items-center px-1 py-2">
                  <Avatar className="w-28 h-28">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="user photo"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <p>{user?.name || "Guest"}</p>
                  <p>Bio: Lorem ipsum dolor sit amet.</p>
                  <div>Groups in common</div>
                </div>
              </ScrollArea>
            </SheetContent>
          </Sheet>
        </div>
        <div className="col-span-4">
          <div className="font-semibold  text-slate-700 capitalize">{user?.name || "Guest"}</div>
          <p className="text-slate-400 text-sm">Online</p>
        </div>
      </div>

      <div className="flex gap-4 items-center me-4">
        <div className="mx-2">
          <Phone />
        </div>
        <div>
          <Video />
        </div>
      </div>
    </div>
  );
};

export default UserHeaderProfile;
