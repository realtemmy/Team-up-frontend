import { useNavigate } from "react-router-dom";
import { PlusIcon } from "lucide-react";
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

import { Skeleton } from "@/components/ui/skeleton";

import Project from "@/features/project/project/project";

const Projects = () => {
  const navigate = useNavigate();
  // project type - web dev, machine learning, mobile app, data science and ml
  // desc, status(ongoing, completed)
  // create project, edit and delete project, add send user invite to join project, accept invitation to join project
  // all, innovation, skill showcase, collaboration, designs
  // Search by category, skill level, technology

  const handleChange = (event) => {
    console.log(event);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-wrap justify-between my-2">
          <h2 className="text-2xl text-slate-700 font-semibold">
            Explore projects
          </h2>
          <div className="flex gap-4">
            <Input className="rounded w-fit" placeholder="Search projects..." />
            <Button>Search</Button>
          </div>
        </div>
        <div className="flex justify-between flex-wrap">
          <div className="flex flex-wrap gap-2">
            <Select onValueChange={handleChange} className="w-[100px]">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>All</SelectLabel>
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
                  <SelectLabel>All</SelectLabel>
                  <SelectItem value="apple">Beginners</SelectItem>
                  <SelectItem value="banana">Intermediate</SelectItem>
                  <SelectItem value="blueberry">Advanced</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <Button
            className="bg-teal-800"
            onClick={() => navigate("/projects/new")}
          >
            <span className="me-1">
              <PlusIcon />
            </span>
            Add project
          </Button>
        </div>
      </form>
      <Project />
    </div>
  );
};

export default Projects;
