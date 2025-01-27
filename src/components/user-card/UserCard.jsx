import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import defaultProfilePicture from "../../assets/default profile.jpg";


const UserCard = ({ user }) => {
  return (
    <div className="flex items-center gap-2 mb-2 cursor-pointer">
      <Avatar className="h-8 w-8">
        <AvatarImage src={user.photo || defaultProfilePicture} />
        <AvatarFallback>{user.name[0]?.toUpperCase()}</AvatarFallback>
      </Avatar>
      <div>
        <p className="font-semibold text-slate-700 capitalize">
          {user.name || "Unknown User"}
        </p>
        <p className="text-xs">{user.email || "No email provided"}</p>
      </div>
    </div>
  );
};

export default UserCard;
