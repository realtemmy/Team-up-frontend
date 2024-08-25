import { useState, useEffect } from "react";
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
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
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
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";

import useWindowSize from "@/hooks/windowSize";
import { cn } from "@/lib/utils";

import axiosService from "@/axios";

const AddExperience = () => {
  // Form handling logic can be moved here
  return <div>Add Experience Component</div>;
};

const UserExperience = () => {
  const defaultFields = {
    name: "",
    url: "",
    desc: "",
    skills: [],
    collaborators: [],
  };

  // On page load, fetch all available users
  // useEffect(() => {
  //   async function fetchUsers() {
  //     const res = await axiosService.get("/user/other-users");
  //     setUsers(res.data)
  //     console.log(res);
  //   }
  //   fetchUsers();
  // }, []);

  const [formFields, setFormFields] = useState(defaultFields);
  const [edit, setEdit] = useState(false);
  const skillss = ["MongoDB", "React", "PostgreSql", "Node", "Express"];
  const [skillOpen, SetSkillOpen] = useState(false);
  const [skill, setSkill] = useState("");
  const [value, setValue] = useState("");
  const [skills, setSkills] = useState([]);
  const [users, setUsers] = useState([]);
  const [width] = useWindowSize();

  const handleSkillSelect = (selectedSkill) => {
    if (!skills.includes(selectedSkill)) {
      setSkills((prevEl) => [...prevEl, selectedSkill]);
    }
    setValue(selectedSkill === value ? "" : selectedSkill);
    setSkill("");
    SetSkillOpen(false);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormFields((prevFields) => ({ ...prevFields, [id]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="sm:grid sm:grid-cols-2 bg-white my-2 shadow-sm rounded p-2 w-full">
      {(edit && width >= 768) || (edit && width < 768) ? (
        <div>
          {/* Use Dialog for larger screens and Drawer for smaller screens */}
          {width >= 768 ? (
            <Dialog open={edit} onOpenChange={setEdit}>
              <DialogContent className="sm:max-w-[425px]">
                <ScrollArea>
                  <DialogHeader>
                    <DialogTitle>Add new experience</DialogTitle>
                    <DialogDescription>
                      Add new experience here
                    </DialogDescription>
                  </DialogHeader>
                  <form className="grid gap-4 py-4" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="project-name">Name</Label>
                      <Input
                        id="project-name"
                        value={formFields.name}
                        onChange={handleInputChange}
                        className="col-span-3"
                      />
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="url">Project Url</Label>
                      <Input
                        id="url"
                        value={formFields.url}
                        onChange={handleInputChange}
                        type="url"
                        className="col-span-3"
                      />
                    </div>
                    <div className="mb-2 flex items-center justify-between">
                      <Label htmlFor="skills">Skills</Label>
                      <Popover open={skillOpen} onOpenChange={SetSkillOpen}>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={skillOpen}
                            className="w-[200px] justify-between"
                          >
                            <p>Select Skill</p>
                            <BoxSelect className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[300px] p-0 me-4">
                          <Command>
                            <CommandInput
                              placeholder="Search skill..."
                              className="h-9"
                              onValueChange={(event) => setSkill(event)}
                              value={skill}
                            />
                            <CommandList>
                              <CommandEmpty className="flex items-center justify-center py-4 gap-4">
                                <p>No skill found</p>
                                <Button
                                  variant="outline"
                                  onClick={() => handleSkillSelect(skill)}
                                >
                                  Add skill
                                </Button>
                              </CommandEmpty>
                              <CommandGroup>
                                {skillss.map((skill, idx) => (
                                  <CommandItem
                                    key={idx}
                                    value={skill}
                                    onSelect={() => handleSkillSelect(skill)}
                                  >
                                    {skill}
                                    <CheckIcon
                                      className={cn(
                                        "ml-auto h-4 w-4",
                                        value === skill
                                          ? "opacity-100"
                                          : "opacity-0"
                                      )}
                                    />
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div className="flex gap-3">
                      {skills.map((el, index) => (
                        <div
                          className="bg-slate-500 px-1 rounded-sm text-white relative"
                          key={index}
                        >
                          {el}
                          <sup
                            className="cursor-pointer text-white place-content-center font-semibold absolute px-1 h-3 bg-slate-600 rounded-sm"
                            onClick={() =>
                              setSkills((prevSkills) =>
                                prevSkills.filter((_, idx) => idx !== index)
                              )
                            }
                          >
                            X
                          </sup>
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="desc">Description</Label>
                      <Textarea
                        id="desc"
                        value={formFields.desc}
                        onChange={handleInputChange}
                        className="col-span-3"
                      />
                    </div>
                  </form>
                  <DialogFooter>
                    <Button type="submit">Save changes</Button>
                  </DialogFooter>
                </ScrollArea>
              </DialogContent>
            </Dialog>
          ) : (
            <Drawer open={edit} onOpenChange={setEdit}>
              <DrawerContent>
                <ScrollArea className="overflow-auto h-[calc(100vh-50px)]">
                  <DrawerHeader className="text-left">
                    <DrawerTitle>Edit profile</DrawerTitle>
                    <DrawerDescription>
                      Make changes to your profile here. Click save when you're
                      done.
                    </DrawerDescription>
                  </DrawerHeader>
                  {/* The same form content as above */}
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
                        />
                      </div>
                      <div>
                        <Label htmlFor="url" className="mb-2 inline-block">
                          Url
                        </Label>
                        <Input
                          id="url"
                          value={formFields.url}
                          onChange={handleInputChange}
                          type="url"
                          className="col-span-3"
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="skills">Skills</Label>
                        <Popover open={skillOpen} onOpenChange={SetSkillOpen}>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              role="combobox"
                              aria-expanded={skillOpen}
                              className="w-[200px] justify-between"
                            >
                              <p>Select Skill</p>
                              <BoxSelect className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-[300px] p-0 me-4">
                            <Command>
                              <CommandInput
                                placeholder="Search skill..."
                                className="h-9"
                                onValueChange={(event) => setSkill(event)}
                                value={skill}
                              />
                              <CommandList>
                                <CommandEmpty className="flex items-center justify-center py-4 gap-4">
                                  <p>No skill found</p>
                                  <Button
                                    variant="outline"
                                    onClick={() => handleSkillSelect(skill)}
                                  >
                                    Add skill
                                  </Button>
                                </CommandEmpty>
                                <CommandGroup>
                                  {skillss.map((skill, idx) => (
                                    <CommandItem
                                      key={idx}
                                      value={skill}
                                      onSelect={() => handleSkillSelect(skill)}
                                    >
                                      {skill}
                                      <CheckIcon
                                        className={cn(
                                          "ml-auto h-4 w-4",
                                          value === skill
                                            ? "opacity-100"
                                            : "opacity-0"
                                        )}
                                      />
                                    </CommandItem>
                                  ))}
                                </CommandGroup>
                              </CommandList>
                            </Command>
                          </PopoverContent>
                        </Popover>
                      </div>
                      <div className="flex gap-3 flex-wrap">
                        {skills.map((el, index) => (
                          <div
                            className="bg-slate-500 px-1 rounded-sm text-white relative"
                            key={index}
                          >
                            {el}
                            <sup
                              className="cursor-pointer text-white place-content-center font-semibold absolute px-1 h-3 bg-slate-600 rounded-sm"
                              onClick={() =>
                                setSkills((prevSkills) =>
                                  prevSkills.filter((_, idx) => idx !== index)
                                )
                              }
                            >
                              X
                            </sup>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <DrawerFooter className="pt-2">
                    <Button type="submit">Submit</Button>
                    <DrawerClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </ScrollArea>
              </DrawerContent>
            </Drawer>
          )}
        </div>
      ) : (
        <div className="my-2 col-span-2 flex justify-between">
          <h6 className="font-semibold text-xl">Experience</h6>
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
        <div className="text-slate-600">Project Name:</div>
        <p className="font-semibold">Team up</p>
      </div>
      <div>
        <div className="text-slate-600">Project Url:</div>
        <p className="font-semibold">localhost:5137</p>
      </div>
      <div>
        <div className="text-slate-600">Skills:</div>
        <p className="font-semibold">Reactjs, MongoDB, Node and Express.</p>
      </div>
      <div>
        <div className="text-slate-600">Contributors: </div>
        <p className="font-semibold">
          temiloluwaOgunti8@gmail.com, temmy4jamb@gmail.com
        </p>
      </div>
    </div>
  );
};

export default UserExperience;
