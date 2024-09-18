import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

import { Textarea } from "@/components/ui/textarea";



const EditProfile = ({ handleInputChange, formFields }) => {
    const { name, email, phone, bio } = formFields;
  return (
    <ScrollArea className="h-[calc(60vh)] w-full border-t">
      <form className="mx-4 sm:grid sm:grid-cols-2 sm:gap-4">
        <h4 className="font-semibold mb-2 text-xl col-span-2">Personal Information</h4>
        <div className="mb-2 col-span-2">
          <Label htmlFor="username">Username</Label>
          <Input
            placeholder="Username"
            type="text"
            name="name"
            id="username"
            value={name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-2">
          <Label htmlFor="email">Email</Label>
          <Input
            placeholder="Johndoe@mail.io"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            disabled
          />
        </div>
        <div className="mb-2">
          <Label htmlFor="phone">Phone number</Label>
          <Input
            placeholder="08066771553"
            type="text"
            id="address"
            name="phone"
            value={phone}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-2 col-span-2">
          <Label htmlFor="bio">Bio</Label>
          <Textarea
            placeholder="Enter Bio..."
            name="bio"
            id="bio"
            value={bio}
            onChange={handleInputChange}
          />
        </div>
      </form>
    </ScrollArea>
  );
};

export default EditProfile;
