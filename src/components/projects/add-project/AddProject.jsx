import { BoxSelect } from "lucide-react";
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
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const AddProject = ({
  formFields,
  handleInputChange,
  handleSkillSelect,
  skills,
  setSkills,
  skillOpen,
  setSkillOpen,
  skill,
  setSkill,
}) => {
  const { name, url, desc, collaborators } = formFields;

  const skillsList = ["MongoDB", "React", "PostgreSql", "Node", "Express"];
  
  return (
    <div className="grid gap-4 px-4 md:px-0 sm:py-4">
      <div>
        <Label htmlFor="project-name" className="mb-2">
          Name
        </Label>
        <Input
          id="project-name"
          value={name}
          onChange={handleInputChange}
          name="name"
        />
      </div>

      <div>
        <Label htmlFor="url">Project Url</Label>
        <Input
          id="url"
          value={url}
          onChange={handleInputChange}
          type="url"
          name="url"
        />
      </div>
      <div className="mb-2 flex items-center justify-between">
        <Label htmlFor="skills">Skills</Label>
        <Popover open={skillOpen} onOpenChange={setSkillOpen}>
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
                  {skillsList.map((skill, idx) => (
                    <CommandItem
                      key={idx}
                      value={skill}
                      onSelect={() => handleSkillSelect(skill)}
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
      <div>
        <Label htmlFor="desc">Description</Label>
        <Textarea
          id="desc"
          value={desc}
          onChange={handleInputChange}
          name="desc"
        />
      </div>
    </div>
  );
};

export default AddProject;
