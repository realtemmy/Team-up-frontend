import { useState } from "react";
import { BoxSelect, CheckIcon, PlusIcon } from "lucide-react";
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

const UserCertification = () => {
  const defaultFields = {
    name: "",
    url: "",
    skills: [],
    collaborators: [],
  };
  const [formFields, setFormFields] = useState(defaultFields);
  const [width] = useWindowSize();
  const [edit, setEdit] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormFields((prevFields) => ({ ...prevFields, [id]: value }));
  };
  return (
    <section className="sm:grid sm:grid-cols-2 bg-white my-2 shadow-sm rounded p-2">
      {(edit && width >= 768) || (edit && width < 768) ? (
        <div>
          {/* Use Dialog for larger screens and Drawer for smaller screens */}
          {width >= 768 ? (
            <Dialog open={edit} onOpenChange={setEdit}>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Add certificate</DialogTitle>
                  <DialogDescription>
                    Add link of hosted certificate/certifications here
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div>
                    <Label htmlFor="name" className="mb-2 inline-block">
                      Name
                    </Label>
                    <Input
                      id="name"
                      //   value={formFields.name}
                      //   onChange={handleInputChange}
                      className="col-span-3"
                    />
                  </div>
                  <div>
                    <Label htmlFor="url" className="mb-2 inline-block">
                      Certificate Url
                    </Label>
                    <Input
                      id="url"
                      //   value={formFields.url}
                      //   onChange={handleInputChange}
                      type="url"
                      className="col-span-3"
                    />
                  </div>
                  <div>
                    <Label htmlFor="url">Issuing Organization</Label>
                    <Input
                      id="url"
                      value={formFields.url}
                      onChange={handleInputChange}
                      type="text"
                      className="col-span-3"
                    />
                  </div>
                  <div>
                    <Label htmlFor="url">Date issued:</Label>
                    <Input
                      id="url"
                      value={formFields.url}
                      onChange={handleInputChange}
                      type="date"
                      className="col-span-3"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          ) : (
            <Drawer open={edit} onOpenChange={setEdit}>
              <DrawerContent>
                <ScrollArea className="overflow-auto h-[calc(100vh-50px)]">
                  <DrawerHeader className="text-left">
                    <DrawerTitle>New certificate</DrawerTitle>
                    <DrawerDescription>
                      Add a new certificate to show your people or something.
                    </DrawerDescription>
                  </DrawerHeader>
                  <div className="grid gap-4 py-4 mx-2 md:mx-0">
                    <div className="grid gap-4 py-4">
                      <div>
                        <Label htmlFor="name" className="mb-2 inline-block">
                          Name
                        </Label>
                        <Input
                          id="name"
                          value={formFields.name}
                          onChange={handleInputChange}
                          className="col-span-3"
                        />
                      </div>
                      <div>
                        <Label htmlFor="url" className="mb-2 inline-block">
                          Certificate Url
                        </Label>
                        <Input
                          id="url"
                          value={formFields.url}
                          onChange={handleInputChange}
                          type="url"
                          className="col-span-3"
                        />
                      </div>
                      <div>
                        <Label htmlFor="url">Issuing Organization</Label>
                        <Input
                          id="url"
                          value={formFields.url}
                          onChange={handleInputChange}
                          type="text"
                          className="col-span-3"
                        />
                      </div>
                      <div>
                        <Label htmlFor="url">Date issued:</Label>
                        <Input
                          id="url"
                          value={formFields.url}
                          onChange={handleInputChange}
                          type="date"
                          className="col-span-3"
                        />
                      </div>
                    </div>
                  </div>
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
