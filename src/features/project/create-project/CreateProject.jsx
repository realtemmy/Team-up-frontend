import { useState } from "react";
import { ArrowLeft, Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel, 
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { addProjectId } from "@/redux/user/userSlice";

import axiosService from "@/axios";

const CreateProject = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [fields, setFields] = useState({
    name: "",
    repoUrl: "",
    liveUrl: "",
    summary: "",
    desc: "",
    type: "",
    skillLevel: "",
    skills: [],
    contributors: [],
  });
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [skill, setSkill] = useState("");

  const skillsList = ["react", "nodejs", "mongodb", "express", "postgres"];

  const [inputs, setInputs] = useState([]);
  const addInputField = () => {
    setInputs([...inputs, ""]);
  };

  const handleCollaborator = (index, event) => {
    const newInputs = [...inputs];
    newInputs[index] = event.target.value;
    setInputs(newInputs);
  };
  const removeInputField = (index) => {
    setInputs(inputs.filter((_, i) => i !== index));
  };

  const { name, url, summary, desc } = fields;
  const handleSelectedSkills = (skill) => {
    if (!selectedSkills.includes(skill)) {
      setSelectedSkills((prevEl) => [...prevEl, skill]);
    }
    setOpen(false);
    setSkill("");
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFields({ ...fields, [name]: value });
  };

  const handleSubmit = async () => {
    console.log(fields, selectedSkills, inputs);

    const res = await axiosService.post("/project", {
      ...fields,
      skills: selectedSkills,
      collaborators: inputs,
    });
    dispatch(addProjectId(res.data));
    console.log(res);
    toast.success("Project created successfully");
  };
  return (
    <div className="flex justify-center items-center mt-10">
      <Card className="min-w-[300px] w-[400px]">
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-2">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Name of your project"
                value={name}
                name="name"
                onChange={handleInputChange}
                required
              />
            </div>

            <div>
              <Label htmlFor="summary">Project summary</Label>
              <Input
                id="summary"
                value={summary}
                onChange={handleInputChange}
                type="text"
                name="summary"
                placeholder="A brief summary of the project in less than 50 words"
                maxLength="50"
                required
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="projectType">Project Type</Label>
              <Select
                onValueChange={(value) => setFields({ ...fields, type: value })}
              >
                <SelectTrigger id="projectType">
                  <SelectValue placeholder="Select level" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="web dev">Web dev</SelectItem>
                  <SelectItem value="mobile">Mobile app</SelectItem>
                  <SelectItem value="data-science">Data science</SelectItem>
                  <SelectItem value="ml">Machine learning</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="skillLevel">Skill level</Label>
              <Select
                onValueChange={(value) =>
                  setFields({ ...fields, skillLevel: value })
                }
              >
                <SelectTrigger id="skillLevel">
                  <SelectValue placeholder="Select level" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="all">All levels</SelectItem>
                  <SelectItem value="beginners">Beginners</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="repoRrl">Repo Url</Label>
              <Input
                id="repoUrl"
                value={url}
                onChange={handleInputChange}
                type="url"
                name="repoUrl"
                required
              />
            </div>
            <div>
              <Label htmlFor="liveUrl">Live Url</Label>
              <Input
                id="liveUrl"
                value={url}
                onChange={handleInputChange}
                type="url"
                name="liveUrl"
                required
              />
            </div>
            <div>
              <Label htmlFor="desc">Description</Label>
              <Textarea
                id="desc"
                value={desc}
                onChange={handleInputChange}
                name="desc"
              />
            </div>
            <div className="flex justify-between items-center">
              <Label htmlFor="skills">Skills</Label>
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between"
                  >
                    <p>Select Skill</p>
                    {/* <BoxSelect className="ml-2 h-4 w-4 shrink-0 opacity-50" /> */}
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
                          onClick={() => handleSelectedSkills(skill)}
                        >
                          Add skill
                        </Button>
                      </CommandEmpty>
                      <CommandGroup>
                        {skillsList.map((skill, idx) => (
                          <CommandItem
                            key={idx}
                            value={skill}
                            onSelect={handleSelectedSkills}
                          >
                            {skill}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
            <div className="flex gap-3 flex-wrap">
              {selectedSkills.map((el, index) => (
                <div
                  className="bg-slate-500 px-1 rounded-sm text-white relative"
                  key={index}
                >
                  {el}
                  <sup
                    className="cursor-pointer text-white place-content-center font-semibold absolute px-1 h-3 bg-slate-600 rounded-sm"
                    onClick={() =>
                      setSelectedSkills((prevSkills) =>
                        prevSkills.filter((_, idx) => idx !== index)
                      )
                    }
                  >
                    X
                  </sup>
                </div>
              ))}
            </div>
            <div>
              {inputs.map((input, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="font-semibold">{index + 1}</span>
                  <Input
                    key={index}
                    type="text"
                    value={input}
                    onChange={(event) => handleCollaborator(index, event)}
                    // placeholder={`Input ${index + 1}`}
                    className="my-2"
                  />
                  <span>
                    <Trash2
                      color="red"
                      onClick={() => removeInputField(index)}
                    />
                  </span>
                </div>
              ))}
              <Button size="sm" type="button" onClick={addInputField}>
                Add collaborator
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">
            <ArrowLeft /> Back
          </Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CreateProject;
