import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
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
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

import { setUser } from "@/redux/user/userSlice";

import defaultImage from "./../../assets/default profile.jpg"
import axiosService from "@/axios";
import useWindowSize from "@/hooks/windowSize";

import EditProfile from "./edit-profile/EditProfile";
import UserExperience from "./user-experience/UserExperience";
import UserCertification from "./user-certification/UserCertification";

const User = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [edit, setEdit] = useState(false);
  const [width] = useWindowSize();

  const defaultFields = {
    name: user.name,
    email: user.email,
    phone: user.phone,
    bio: user.bio,
  };

  const [formFields, setFormFields] = useState(defaultFields);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async () => {
    const { data } = await axiosService.patch("/user/me", formFields);
    dispatch(setUser(data));
    console.log(data);
  };

  const { name, email, phone, photo } = user;

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

      {edit &&
        (width < 768 ? (
          <Drawer open={edit} onOpenChange={setEdit}>
            <DrawerContent>
              <DrawerHeader className="text-left">
                <DrawerTitle>Edit profile</DrawerTitle>
              </DrawerHeader>
              <EditProfile
                handleInputChange={handleInputChange}
                formFields={formFields}
              />
              <DrawerFooter className="pt-2">
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
                <Button onClick={handleSubmit}>Submit</Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        ) : (
          <Dialog open={edit} onOpenChange={setEdit}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you're
                  done.
                </DialogDescription>
              </DialogHeader>
              <EditProfile
                handleInputChange={handleInputChange}
                formFields={formFields}
              />
              <DialogFooter>
                <Button type="submit" onClick={handleSubmit}>
                  Save changes
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        ))}

      <section className="shadow-sm rounded bg-white p-2 my-2 flex flex-col sm:flex-row gap-2 items-center">
        <Avatar className="w-24 h-24">
          <AvatarImage src={photo || defaultFields} alt="@shadcn" />
          <AvatarFallback className="uppercase">SH</AvatarFallback>
        </Avatar>
        <div className="flex flex-col space-y-2 text-center sm:text-left">
          <div className="font-semibold capitalize">{name}</div>
          <p className="font-semibold text-sm">
            Bio: Software engineer at google
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
          <p className="font-semibold capitalize">{name}</p>
        </div>
        <div>
          <div className="text-slate-600">Address</div>
          <p className="font-semibold">Lagos, Nigeria</p>
        </div>

        <div>
          <div className="text-slate-600">Email:</div>
          <p className="font-semibold">{email}</p>
        </div>
        <div>
          <div className="text-slate-600">Phone Number</div>
          <p className="font-semibold">{phone}</p>
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
