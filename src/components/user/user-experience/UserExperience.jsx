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

import { toast } from "react-toastify";
import axiosService from "@/axios";

import AddProject from "@/components/projects/add-project/AddProject";

const UserExperience = () => {
  // On page load, fetch all available users
  // useEffect(() => {
  //   async function fetchUsers() {
  //     const res = await axiosService.get("/user/other-users");
  //     setUsers(res.data)
  //     console.log(res);
  //   }
  //   fetchUsers();
  // }, []);

  const [width] = useWindowSize();
  const [edit, setEdit] = useState(false);

  const defaultFields = {
    name: "",
    url: "",
    desc: "",
    skills: [],
    collaborators: [], //add collaborators
  };
  const [value, setValue] = useState("");
  const [skills, setSkills] = useState([]);
  const [skillOpen, setSkillOpen] = useState(false);
  const [skill, setSkill] = useState("");
  // const [users, setUsers] = useState([]);

  const [formFields, setFormFields] = useState(defaultFields);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormFields((prevFields) => ({ ...prevFields, [name]: value }));
  };
  const handleSkillSelect = (selectedSkill) => {
    if (!skills.includes(selectedSkill)) {
      setSkills((prevEl) => [...prevEl, selectedSkill]);
    }
    setValue(selectedSkill === value ? "" : selectedSkill);
    setSkill("");
    setSkillOpen(false);
  };

  const handleSubmit = async () => {
    const res = await axiosService.post("/project", { ...formFields, skills });
    toast.success("Project was successfully created");
    //update user's projects in localstorage with response id
    console.log(res);
  };

  return (
    <div className="sm:grid sm:grid-cols-2 bg-white my-2 shadow-sm rounded p-2 w-full">
      {edit ? (
        width < 768 ? (
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
                <AddProject
                  formFields={formFields}
                  handleInputChange={handleInputChange}
                  handleSkillSelect={handleSkillSelect}
                  skills={skills}
                  setSkills={setSkills}
                  skillOpen={skillOpen}
                  skill={skill}
                  setSkill={setSkill}
                  setSkillOpen={setSkillOpen}
                />
                <DrawerFooter className="pt-2">
                  <DrawerClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DrawerClose>
                  <Button type="submit" onClick={handleSubmit}>
                    Submit
                  </Button>
                </DrawerFooter>
              </ScrollArea>
            </DrawerContent>
          </Drawer>
        ) : (
          <Dialog open={edit} onOpenChange={setEdit}>
            <DialogContent className="sm:max-w-[425px]">
              <ScrollArea>
                <DialogHeader>
                  <DialogTitle>Add new experience</DialogTitle>
                  <DialogDescription>Add new experience here</DialogDescription>
                </DialogHeader>
                <AddProject
                  formFields={formFields}
                  handleInputChange={handleInputChange}
                  handleSkillSelect={handleSkillSelect}
                  skills={skills}
                  setSkills={setSkills}
                  skillOpen={skillOpen}
                  skill={skill}
                  setSkill={setSkill}
                  setSkillOpen={setSkillOpen}
                />
                <DialogFooter>
                  <Button type="submit" onClick={handleSubmit}>
                    Save changes
                  </Button>
                </DialogFooter>
              </ScrollArea>
            </DialogContent>
          </Dialog>
        )
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
