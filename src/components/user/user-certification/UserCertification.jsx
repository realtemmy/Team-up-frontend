import { useState } from "react";
import { PlusIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";

import useWindowSize from "@/hooks/windowSize";
import axiosService from "@/axios";

const AddCertification = ({ formFields, handleInputChange }) => {
  const { name, url, organization, date } = formFields;

  return (
    <div className="grid gap-4 py-4 mx-2 md:mx-0">
      <div>
        <Label htmlFor="certificate-name" className="mb-2 inline-block">
          Name
        </Label>
        <Input
          name="name"
          value={name}
          onChange={handleInputChange}
          className="col-span-3"
        />
      </div>
      <div>
        <Label htmlFor="certificate-url" className="mb-2 inline-block">
          Certificate Url
        </Label>
        <Input
          name="url"
          value={url}
          onChange={handleInputChange}
          type="url"
          className="col-span-3"
        />
      </div>
      <div>
        <Label htmlFor="organization">Issuing Organization</Label>
        <Input
          name="organization"
          value={organization}
          onChange={handleInputChange}
          type="url"
          className="col-span-3"
        />
      </div>
      <div>
        <Label htmlFor="date">Date issued:</Label>
        <Input
          name="date"
          value={date}
          onChange={handleInputChange}
          type="date"
          className="col-span-3"
        />
      </div>
    </div>
  );
};

const UserCertification = () => {
  const defaultFields = {
    name: "",
    url: "",
    skills: [],
    organization: "",
    date: "",
  };
  const [width] = useWindowSize();
  const [edit, setEdit] = useState(false);
  const [formFields, setFormFields] = useState(defaultFields);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormFields((prevFields) => ({ ...prevFields, [name]: value }));
  };

  const handleSubmit = async () => {
    const res = await axiosService.post("/certificate", {
      name: formFields.name,
      url: formFields.url,
      issuingOrganization: formFields.organization,
      issuedDate: formFields.date,
    });
    console.log(res);
  };

  return (
    <section className="sm:grid sm:grid-cols-2 bg-white my-2 shadow-sm rounded p-2">
      {(edit && width >= 768) || (edit && width < 768) ? (
        <div>
          {/* Use Dialog for larger screens and Drawer for smaller screens */}
          {width >= 768 ? (
            <Dialog open={edit} onOpenChange={setEdit}>
              <DialogContent className="sm:max-w-[425px]">
                <ScrollArea className="overflow-auto h-[calc(100vh-100px)] px-2">
                  <DialogHeader>
                    <DialogTitle className="text-2xl">
                      Add new certificate
                    </DialogTitle>
                    <DialogDescription>
                      Add link of hosted certificate/certifications here
                    </DialogDescription>
                  </DialogHeader>
                  <AddCertification
                    formFields={formFields}
                    handleInputChange={handleInputChange}
                  />
                  <DialogFooter>
                    <Button type="submit" onClick={handleSubmit}>
                      Save changes
                    </Button>
                  </DialogFooter>
                </ScrollArea>
              </DialogContent>
            </Dialog>
          ) : (
            <Drawer open={edit} onOpenChange={setEdit}>
              <DrawerContent>
                <ScrollArea className="overflow-auto h-[calc(100vh-50px)]">
                  <DrawerHeader className="text-left">
                    <DrawerTitle>Add new certificate</DrawerTitle>
                    <DrawerDescription>
                      Add a new certificate to show your people or something.
                    </DrawerDescription>
                  </DrawerHeader>
                  <AddCertification />
                  <DrawerFooter className="pt-2">
                    <DrawerClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                    <Button type="submit">Submit</Button>
                  </DrawerFooter>
                </ScrollArea>
              </DrawerContent>
            </Drawer>
          )}
        </div>
      ) : (
        <div className="my-2 col-span-2 flex justify-between">
          <h6 className="font-semibold text-xl">Certificates</h6>
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
                <p>Add new project</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      )}
      <div>
        <div className="text-slate-600">Name:</div>
        <p className="font-semibold">GDSC Unilag</p>
      </div>
      <div>
        <div className="text-slate-600">Certificate Url:</div>
        <p className="font-semibold">google.com</p>
      </div>
      <div>
        <div className="text-slate-600">Issuing Organization</div>
        <p className="font-semibold">Google</p>
      </div>
      <div>
        <div className="text-slate-600">Date issued: </div>
        <p className="font-semibold">22nd of August, 2023</p>
      </div>
    </section>
  );
};

export default UserCertification;
