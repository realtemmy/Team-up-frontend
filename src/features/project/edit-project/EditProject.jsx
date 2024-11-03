import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const EditProject = ({ project }) => {
  const [fields, setFields] = useState({
    name: project.name,
    repoUrl: project.links.repoUrl,
    liveUrl: project.links.liveUrl,
    summary: project.summary,
    desc: project.desc,
    type: project.type,
    skillLevel: project.skillLevel,
    skills: project.skills,
    contributors: project.contributors,
  });

  const handleAddSkill = (skill) => {
    if (fields.skills.contains(skill)) return;
    fields.skills.push(skill);
  };

  const removeSkill = (index) => {
    console.log(index);

    // fields.skills.filter((_, idx) => idx === index);
    setFields({
      ...fields,
      ["skills"]: fields.skills.filter((_, idx) => idx !== index),
    });
  };
  return (
    <ScrollArea className="h-[calc(65vh)] w-full border-t rounded-sm">
      <div>
        <div className="mb-2">
          <Label htmlFor="name">Name:</Label>
          <Input type="text" id="name" name="name" value={fields.name} />
        </div>
        <div className="mb-2">
          <Label htmlFor="summary">Summary:</Label>
          <Input
            type="text"
            id="summary"
            name="summary"
            value={fields.summary}
          />
        </div>
        <div className="mb-2">
          <Label htmlFor="repoUrl">Github/Repo Url</Label>
          <Input
            type="url"
            id="repoUrl"
            name="repoUrl"
            value={fields.repoUrl}
          />
        </div>
        <div className="mb-2">
          <Label htmlFor="liveUrl">Live Url:</Label>
          <Input
            type="url"
            id="liveUrl"
            name="liveUrl"
            value={fields.liveUrl}
          />
        </div>
        <div className="mb-2">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select skill level" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Levels</SelectLabel>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="beginners">Beginners</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="advanced">Advanced</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="mb-2">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select project type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Levels</SelectLabel>
                <SelectItem value="web dev">Web dev</SelectItem>
                <SelectItem value="mobile">Mobile</SelectItem>
                <SelectItem value="data-science">Data science</SelectItem>
                <SelectItem value="ml">Machine learning</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="mb-2">
          <Label htmlFor="desc">Description:</Label>
          <Textarea value={fields.desc} />
        </div>
        <div className="grid grid-cols-3 items-center gap-2 mb-2">
          <Label htmlFor="skills" className="col-span-3 mb-2">
            Skills:
          </Label>
          <Input type="text" className="col-span-2" />
          <Button size="sm" onClick={handleAddSkill} className="col-span-1">
            Add Skill
          </Button>
          <div className="col-span-3 mt-1">
            {fields.skills.map((skill, index) => (
              <>
                <Badge key={index}>{skill}</Badge>
                <sup
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-1 py-0 rounded-md cursor-pointer"
                  onClick={() => removeSkill(index)}
                >
                  x
                </sup>
              </>
            ))}
          </div>
        </div>
        <div className="mb-2 grid grid-cols-3 items-center gap-2">
          <Label htmlFor="collaborators" className="col-span-3">
            Collaborators:
          </Label>
          <Input type="email" className="col-span-2" />
          <Button size="sm">Add Collaborator</Button>
          <div className="col-span-3 mt-1 flex flex-wrap">
            {[
              "temiloluwaOgunti8@gmail.com",
              "temmy4jamb@gmail.com",
              "test@mail.com",
            ].map((skill, index) => (
              <div key={index}>
                <Badge>{skill}</Badge>
                <sup className="bg-primary text-primary-foreground hover:bg-primary/90 px-1 py-0 rounded-md cursor-pointer">
                  x
                </sup>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScrollArea>
  );
};

export default EditProject;
