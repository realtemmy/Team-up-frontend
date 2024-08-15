import { CameraIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const UserSettings = () => {
  // change picture, change passwords, profession, email(disabled)
  return (
    <div className="mt-2 p-2">
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 flex items-center gap-4 border mb-4">
          <div className="relative">
            <Avatar className="w-32 h-32 border-2">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback className="uppercase">SH</AvatarFallback>
            </Avatar>
            <span className="absolute bottom-4 right-0 text-white bg-slate-900 rounded-full p-1">
              <CameraIcon />
            </span>
          </div>
          <div className="flex gap-4 items-center col-span-3">
            <div className="relative">
              <Button type="button">Change picture</Button>
              <Input
                type="file"
                className="absolute top-0 w-32 opacity-0 cursor-pointer"
              />
            </div>
            <Button variant="outline">Delete photo</Button>
          </div>
        </div>
        <form className="grid grid-cols-2 gap-2">
          <div className="mb-2">
            <Label htmlFor="name">Name</Label>
            <Input type="text" />
          </div>
          <div className="mb-2">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              value="temiloluwaOgunti8@gmail.com"
              className="font-semibold"
              disabled
            />
          </div>
          <div className="mb-2">
            <Label htmlFor="number">Mobile Number</Label>
            <Input type="text" />
          </div>
          <div className="mb-2">
            <Label>Gender</Label>
            <RadioGroup className="flex">
              <Button
                variant="outline"
                type="button"
                className="flex items-center space-x-2"
              >
                <RadioGroupItem value="male" id="male" />
                <Label htmlFor="male">Male</Label>
              </Button>
              <Button
                className="flex items-center space-x-2"
                variant="outline"
                type="button"
              >
                <RadioGroupItem value="female" id="r3" />
                <Label htmlFor="r3">Female</Label>
              </Button>
            </RadioGroup>
          </div>
          <div className="col-span-2 mb-2">
            <Label htmlFor="address">Residential Address</Label>
            <Textarea placeholder="Aso-rock, Ibafo" />
          </div>
          <Button className="" type="button">
            Save Changes
          </Button>
        </form>

        {/* Password change */}
        <form>
          <div className="mb-2">
            <Label htmlFor="password">Current Password</Label>
            <Input
              type="password"
              placeholder="Enter current password"
              id="password"
            />
          </div>
          <div className="mb-2">
            <Label htmlFor="newPassword">New Password</Label>
            <Input
              type="password"
              placeholder="New password"
              id="newPassword"
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="confirmNewPassword">Confirm New Password</Label>
            <Input
              type="password"
              placeholder="New password"
              id="confirmNewPassword"
            />
          </div>
          <div className="text-right">
            <Button>Save Changes</Button>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default UserSettings;
