import { useState } from "react";
import { PlusIcon } from "lucide-react";
import { Edit3Icon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import useWindowSize from "@/hooks/windowSize";
import EditProfile from "./edit-profile/EditProfile";
import UserExperience from "./user-experience/UserExperience";
import UserCertification from "./user-certification/UserCertification";

const User = () => {
  const [edit, setEdit] = useState(false);
  const [width] = useWindowSize();

  // Settings - profile, password, team
  // personal information(email, name, photo, phone no, socials), experience, projects
  return (
    <div className="p-4 bg-gray-100">
      <div className="flex items-center justify-between">
        <h4 className="font-bold text-slate-700 text-xl">My profile</h4>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <div
                className="shadow border px-3 py-2 rounded cursor-pointer"
                onClick={() => setEdit(true)}
              >
                <Edit3Icon />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Edit profile</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      {edit && width >= 768 ? (
        <Dialog open={edit} onOpenChange={setEdit}>
          <DialogContent className="max-w-screen h-[calc(100vh-110px ">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <EditProfile />
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      ) : edit && width < 768 ? (
        <Drawer open={edit} onOpenChange={setEdit}>
          <DrawerContent>
            <DrawerHeader className="text-left">
              <DrawerTitle>Edit profile</DrawerTitle>
              <DrawerDescription>
                Make changes to your profile here. Click save when you're done.
              </DrawerDescription>
            </DrawerHeader>
            <EditProfile />
            <DrawerFooter className="pt-2">
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      ) : (
        ""
      )}

      <section className="shadow-sm rounded bg-white p-2 my-2 flex flex-col sm:flex-row gap-2 items-center">
        <Avatar className="w-24 h-24">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback className="uppercase">SH</AvatarFallback>
        </Avatar>
        <div>
          <div className="font-semibold">Realtemmy</div>
          <p>
            Bio: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aperiam nam voluptate minima at inventore hic ratione exercitationem
            asperiores, autem odio!
          </p>
        </div>
      </section>
      {/* Personal Informations */}
      <section className="sm:grid sm:grid-cols-2 bg-white my-2 shadow-sm rounded p-2">
        <div className="my-2 col-span-2 flex justify-between">
          <h6 className="font-semibold text-xl">Personal Information</h6>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <div
                  className="shadow border px-3 py-2 rounded cursor-pointer"
                  onClick={() => setEdit(true)}
                >
                  <PlusIcon />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Add Information</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <div>
          <div className="text-slate-600">Name:</div>
          <p className="font-semibold">Temiloluwa</p>
        </div>
        <div>
          <div className="text-slate-600">Address</div>
          <p className="font-semibold">Lagos, Nigeria</p>
        </div>
        <div>
          <div className="text-slate-600">Email:</div>
          <p className="font-semibold">temiloluwaOgunti8@gmail.com</p>
        </div>
      </section>

      {/* Experience */}
      <UserExperience />
      {/* Certifications */}
      <UserCertification />
    </div>
  );
};

export default User;
