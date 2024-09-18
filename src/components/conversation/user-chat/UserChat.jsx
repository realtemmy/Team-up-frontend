import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

import { toggleDM } from "@/redux/chat-redux/chatSlice";

const users = [
  {
    name: "david",
    message: "How far, shey class dey? Cause I no sure say I dey go today o",
  },
  {
    name: "course rep",
    message: "Omo class dey today o",
    createdAt: "",
  },
  {
    name: "babe",
    message: "missed my period",
    createdAt: "",
  },
  {
    name: "dumbor",
    message: "Okay sure",
    createdAt: "",
  },
];

const UserChat = () => {
  const dispatch = useDispatch();
  // const { user } = useSelector((state) => state.chat);
  // console.log("user: ", user);
  const [activeUser, setActiveUser] = useState("");

  const handleClick = (user, idx) => {
    setActiveUser(idx);
    // dispatch(setUser(user))
    dispatch(toggleDM(true));
  };
  return (
    <>
      {users.map((user, idx) => (
        <div
          key={idx}
          className={` w-full grid grid-cols-5 items-center shadow-md border px-2 py-1 mb-2 rounded cursor-pointer hover:-translate-y-1 hover:opacity-90 ease-in transition-all ${
            activeUser === idx && "bg-slate-600 text-white"
          }`}
          onClick={() => handleClick(user, idx)}
        >
          <div className="col-span-1">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback className="uppercase">
                {user.name[0]}
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="col-span-3 mb-2">
            <p
              className={`font-bold text-slate-700 capitalize ${
                activeUser === idx && "text-white"
              }`}
            >
              {user.name}
            </p>
            <p className="overflow-hidden truncate text-sm">{user.message}</p>
          </div>
          <div className="col-span-1 flex flex-col items-center">
            <div
              style={{
                fontSize: "10px",
              }}
              className="gradient-color font-semibold"
            >
              3:14 PM
            </div>
            <div
              style={{
                fontSize: "10px",
              }}
              className="text-sm"
            >
              <Badge className="w-">0</Badge>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default UserChat;
