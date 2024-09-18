import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import Project from "@/features/project/project/project";


const Projects = () => {
  // project type - web dev, machine learning, mobile app, data science and ml
  // desc, status(ongoing, completed)
  // create project, edit and delete project, add send user invite to join project, accept invitation to join project
  // all, innovation, skill showcase, collaboration, designs
  // Search by category, skill level, technology
  return (
    <div>
      <form>
        <div className="flex flex-wrap justify-between my-2">
          <h2 className="text-2xl text-slate-700 font-semibold">
            Explore projects
          </h2>
          <div className="flex gap-4">
            <Input
              className="rounded w-fit"
              placeholder="Search projects..."
            />
            <Button>Search</Button>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Skill level" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </form>
      <Project />
    </div>
  );
};

export default Projects;
