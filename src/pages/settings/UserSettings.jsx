import { useState } from "react";
import { CameraIcon } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { setUser, setProfilePhoto } from "@/redux/user/userSlice";

import Loader from "@/components/Loader/Loader";
import defaultProfileImage from "./../../assets/default profile.jpg";
import axiosService from "@/axios";

import { toast  } from "sonner";

const UserSettings = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [loader, setLoader] = useState(false);
  const [preview, setPreview] = useState("");
  const [photo, setPhoto] = useState({});
  const [open, setOpen] = useState(false);


  const [fields, setFields] = useState({
    password: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const [profileFields, SetProfileFields] = useState({
    name: user.name,
    phone: user.phone,
    bio: user.bio,
  });

  // ========= Input change =============
  const handleImageChange = (event) => {
    setOpen(true);
    setPhoto(event.target.files[0]);
    setPreview(URL.createObjectURL(event.target.files[0]));
  };
  const handleProfileChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    SetProfileFields({ ...profileFields, [name]: value });
  };

  const handlePasswordChange = (event) => {
    const { name, value } = event.target;
    setFields({ ...fields, [name]: value });
  };

  // =========== Submit logic ============
  const handleSubmitPhoto = async () => {
    const formData = new FormData();
    formData.append("photo", photo);
    setLoader(true);
    try {
      const res = await axiosService.patch(
        "/user/change-profile-photo",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log("New image:", res);
      dispatch(setProfilePhoto(res.data));
      setOpen(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };

  const handleProfileSubmit = async (event) => {
    event.preventDefault();
    setLoader(true);
    const res = await axiosService.patch("/user/me", profileFields);
    console.log(res);
    dispatch(setUser(res.data));
    setLoader(false);
  };

  const handlePasswordSubmit = async (event) => {
    event.preventDefault();
    console.log(fields);
    setLoader(true);
    const res = await axiosService.post("/user/update-password", fields);
    console.log(res);
    setLoader(false);
  };

  const handleDeletePhoto = async () => {
    if (!user.photo) return;
    // else delete logged in user's profile photo
    console.log("Profile photo updated");
    setLoader(true);
    const res = await axiosService.delete("/user/delete-profile-photo");
    console.log(res);
  };

  // change picture, change passwords, profession, email(disabled)
  return (
    <div className="mt-2 p-2">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Change profile picture</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center">
            <Avatar className="w-32 h-32 border-2 ">
              <AvatarImage src={preview} alt="@shadcn" />
              <AvatarFallback className="uppercase">SH</AvatarFallback>
            </Avatar>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={handleSubmitPhoto}>
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <div className="grid grid-cols-2 gap-4">
        {loader && <Loader />}
        <Button
          onClick={() => {
            toast("Event has been created", {
              description: "Sunday, December 03, 2023 at 9:00 AM",
              action: {
                label: "Undo",
                onClick: () => console.log("Undo"),
              },
            });
          }}
        >
          Show Toast
        </Button>
        <div className="col-span-2 flex flex-col md:flex-row items-center gap-4 mb-4">
          <div className="relative">
            <Avatar className="w-32 h-32 rounded-full border-2">
              <AvatarImage
                src={user.photo || defaultProfileImage}
                alt="@shadcn"
              />
              <AvatarFallback className="uppercase">SH</AvatarFallback>
            </Avatar>
            <span className="absolute bottom-4 right-0 text-white bg-slate-900 rounded-full p-1">
              <CameraIcon />
            </span>
          </div>
          <div className="flex gap-4 items-center col-span-3">
            <div className="relative">
              <Button type="button" onClick={() => setOpen(true)}>
                Change picture
              </Button>
              <Input
                type="file"
                accept="image/*"
                className="absolute top-0 w-32 opacity-0 cursor-pointer"
                onChange={handleImageChange}
              />
            </div>
            <Button variant="destructive" onClick={handleDeletePhoto}>
              Delete photo
            </Button>
          </div>
        </div>
        {/* Profile update */}
        <form
          className="col-span-2 md:col-span-1 "
          onSubmit={handleProfileSubmit}
        >
          <h4 className="font-semibold text-2xl">Profile</h4>
          <div className="mb-2 col-span-2 lg:col-span-1">
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              value={profileFields.name}
              name="name"
              onChange={handleProfileChange}
            />
          </div>
          <div className="mb-2 col-span-2 lg:col-span-1">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              placeholder="johndoe@mail.com"
              className="font-semibold"
              value={user.email}
              disabled
            />
          </div>
          <div className="mb-2 col-span-2 lg:col-span-1">
            <Label htmlFor="number">Mobile Number</Label>
            <Input
              type="text"
              value={profileFields.phone}
              name="phone"
              onChange={handleProfileChange}
            />
          </div>
          <div className="mb-2 col-span-2 lg:col-span-1">
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
            <Label htmlFor="bio">Bio</Label>
            <Textarea
              placeholder="Software engineer"
              id="bio"
              name="bio"
              onChange={handleProfileChange}
              value={profileFields.bio}
            />
          </div>
          <Button className="bg-slate-700">Save Changes</Button>
        </form>

        {/* Password change */}
        <form
          className="col-span-2 md:col-span-1"
          onSubmit={handlePasswordSubmit}
        >
          <h4 className="font-semibold text-2xl">Security</h4>
          <div className="mb-2">
            <Label htmlFor="password">Current Password</Label>
            <Input
              type="password"
              placeholder="Enter current password"
              id="password"
              name="password"
              value={fields.password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="mb-2">
            <Label htmlFor="newPassword">New Password</Label>
            <Input
              type="password"
              placeholder="New password"
              id="newPassword"
              name="newPassword"
              value={fields.newPassword}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="confirmNewPassword">Confirm New Password</Label>
            <Input
              type="password"
              placeholder="New password"
              id="confirmNewPassword"
              name="confirmNewPassword"
              value={fields.confirmNewPassword}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="text-right">
            <Button className="bg-teal-900">Change password</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserSettings;
