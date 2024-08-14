import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { CheckIcon, BoxSelect } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const EditProfile = () => {
  const defaultFields = {
    username: "",
    email: "",
    address: "",
    projectName: "",
    skills: [],
    projectUrl: "",
    contributors: [],
    certificationName: "",
    certificateUrl: "",
    certificateDateIssued: "",
  };
  const [open, setOpen] = useState(false);
  const [skillOpen, SetSkillOpen] = useState(false);
  const [value, setValue] = useState("");
  const [skill, setSkill] = useState("");
  const [collaborators, setCollaborators] = useState([]);
  const [skills, setSkills] = useState([]);
  const [contributor, setContributor] = useState("");
  const [formFields, setFormFields] = useState(defaultFields);

  const skillss = ["MongoDB", "React", "PostgreSql", "Node", "Express"];
  const frameworks = [
    // will contain email and id
    {
      value: "Next.js",
      label: "temiloluwaOgunti8@gmail.com",
    },
    {
      value: "SvelteKit",
      label: "temmy4jamb@gmail.com",
    },
    {
      value: "Nuxt.js",
      label: "officialtemi@gmail.com",
    },
    {
      value: "Remix",
      label: "test@mail.com",
    },
    {
      value: "Astro",
      label: "astro@mail.com",
    },
  ];

  const handleRemoveElement = (index) => {
    setCollaborators((prevEl) => {
      return prevEl.filter((_, idx) => idx !== index);
    });
  };

  const handleChange = (event) => {
    setSkill(event);
  };

  return (
    <ScrollArea className="h-[calc(70vh)] w-full border-t">
      <form className="mx-4 sm:grid sm:grid-cols-2 sm:gap-4">
        <section>
          <h4 className="font-semibold mb-2 text-xl">Personal Information</h4>
          <div className="mb-2">
            <Label htmlFor="username">Username</Label>
            <Input placeholder="Username" type="text" id="username" />
          </div>
          <div className="mb-2">
            <Label htmlFor="email">Email</Label>
            <Input placeholder="Johndoe@mail.io" type="email" id="email" />
          </div>
          <div className="mb-2">
            <Label htmlFor="address">Address</Label>
            <Input placeholder="Lagos, Nigeria" type="text" id="address" />
          </div>
          <div className="mb-2">
            <Label htmlFor="address">Bio</Label>
            <Textarea placeholder="Enter Bio..." />
          </div>
        </section>

        {/* Edit Projects */}
        <section>
          <h4 className="font-semibold mb-2 text-xl">Experience</h4>
          <div className="mb-2">
            <Label htmlFor="projectName">Project Name</Label>
            <Input placeholder="" type="text" />
          </div>
          <div className="mb-2">
            <Label htmlFor="projectDescription">Project description</Label>
            <Input
              type="text"
              id="projectDescription"
              placeholder="Enter project's description"
            />
          </div>
          <div className="mb-2">
            <Label htmlFor="email">Project Url</Label>
            <Input placeholder="Link to project" type="text" />
          </div>

          {/* Skills */}
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
                    placeholder="Search user..."
                    className="h-9"
                    onValueChange={(event) => setSkill(event)}
                    value={skill}
                  />
                  <CommandList>
                    <CommandEmpty className="flex items-center justify-center py-4 gap-4">
                      <p>No skill found</p>
                      <Button
                        variant="outline"
                        onClick={() => {
                          setSkills((prevEl) => [...prevEl, skill]);
                          setSkill("");
                        }}
                      >
                        Add skill
                      </Button>
                    </CommandEmpty>
                    <CommandGroup>
                      {/* Using skills for now, will replace with skill when I connect to server */}
                      {skillss.map((skill, idx) => (
                        <CommandItem
                          key={idx}
                          value={skill}
                          onSelect={(currentValue) => {
                            setValue(
                              currentValue === value ? "" : currentValue
                            );
                            setSkills((prevEl) => [...prevEl, currentValue]);
                            SetSkillOpen(false);
                          }}
                        >
                          {skill}
                          <CheckIcon
                            className={cn(
                              "ml-auto h-4 w-4",
                              value === skill ? "opacity-100" : "opacity-0"
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
                    setSkills((prevSkills) => {
                      return prevSkills.filter((_, idx) => idx !== index);
                    })
                  }
                >
                  X
                </sup>
              </div>
            ))}
          </div>

          {/* Contributors */}
          <div className="mb-2 flex items-center justify-between">
            <Label htmlFor="contributors">Contributors</Label>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className="w-[200px] justify-between"
                >
                  <p>Select User</p>
                  <BoxSelect className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[300px] p-0 me-4">
                <Command>
                  <CommandInput
                    placeholder="Search user by email..."
                    className="h-9"
                    onValueChange={(value) => setContributor(value)}
                    value={contributor}
                  />
                  <CommandList>
                    <CommandEmpty className="flex items-center justify-center py-4 gap-4">
                      <p>No user found</p>
                      <Button
                        variant=""
                        onClick={() => {
                          setCollaborators((prevEl) => [...prevEl, contributor]);
                          setContributor("");
                        }}
                      >
                        Add skill
                      </Button>
                    </CommandEmpty>
                    <CommandGroup>
                      {frameworks.map((framework) => (
                        <CommandItem
                          key={framework.value}
                          value={framework.value}
                          onSelect={(currentValue) => {
                            setValue(
                              currentValue === value ? "" : currentValue
                            );
                            setCollaborators((prevEl) => [
                              ...prevEl,
                              currentValue,
                            ]);

                            setOpen(false);
                          }}
                        >
                          {framework.label}
                          <CheckIcon
                            className={cn(
                              "ml-auto h-4 w-4",
                              value === framework.value
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
            {collaborators.map((el, index) => (
              <div
                className="bg-slate-500 px-1 rounded-sm text-white relative"
                key={index}
              >
                {el}
                <sup
                  className="cursor-pointer text-white place-content-center font-semibold absolute px-1 h-3 bg-slate-600 rounded-sm"
                  onClick={() => handleRemoveElement(index)}
                >
                  X
                </sup>
              </div>
            ))}
          </div>
        </section>

        {/* Edit Certifications */}
        <section>
          <h4 className="font-semibold mb-2 text-xl">Certifications</h4>
          <div className="mb-2">
            <Label htmlFor="certificateName">Certification Name</Label>
            <Input placeholder="Certificate name" type="text" />
          </div>
          <div className="mb-2">
            <Label htmlFor="certificateUrl">Certificate Url</Label>
            <Input
              placeholder="Link to certificate"
              type="text"
              id="certificateUrl"
            />
          </div>
          <div className="mb-2">
            <Label htmlFor="issuingOrganization">Issuing Organization</Label>
            <Input placeholder="Lagos, Nigeria" id="issuingOrganization" />
          </div>
        </section>
      </form>
    </ScrollArea>
  );
};

export default EditProfile;
