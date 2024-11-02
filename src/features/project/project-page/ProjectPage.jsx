import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  CircleCheck,
  CircleEllipsis,
  CirclePause,
  CircleX,
  Edit,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import axiosService from "@/axios";
const ProjectPage = () => {
  const { projectId } = useParams();
  const user = useSelector((state) => state.user.user._id);
  const [project, setProject] = useState(null); // Initialize as null
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const { data } = await axiosService.get(`/project/${projectId}`);
        // console.log(data);
        setProject(data);
      } catch (error) {
        console.error("Failed to fetch project:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [projectId]);

  const handleEditProject = () => {};
  const handleRequestToJoin = () => {};

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    <div className="grid grid-cols-2">
      <div className="col-span-2 flex items-center justify-between">
        <h3 className="font-semibold text-2xl col-span-2 text-center">
          {project.name}
        </h3>
        <div>
          Project type:
          <span className="font-medium capitalize">{project.type}</span>
        </div>
      </div>

      <div className="col-span-2 grid gap-2 mt-4 grid-cols-2">
        <center className="col-span-2 md:col-span-1">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="project image"
            className="rounded-sm"
          />
        </center>

        <div className="col-span-2 md:col-span-1">
          <div>
            <h5 className="font-semibold">Project description/About</h5>
            <p>{project.desc || "Description not available."}</p>
          </div>
          <div>
            <h5 className="font-semibold">Project Summary</h5>
            <p>{project.summary || "Summary not available."}</p>
          </div>
          <div>
            <div className="font-medium">Contributors:</div>
            <ul className="list-disc">
              {(project.contributors || [""]).map((contributor, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage
                      src={contributor.avatarUrl || ""}
                      alt={contributor.name}
                    />
                    <AvatarFallback>{contributor.initials}</AvatarFallback>
                  </Avatar>
                  <div>{contributor.email}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="col-span-2 grid grid-cols-2 mt-2">
        <div>
          <p className="font-medium">Skills:</p>
          <p className="inline-block capitalize">
            {project.skills?.join(", ") || "Not specified"}
          </p>
          <div className="mt-2 capitalize">
            <span className="font-medium">Skill level:</span>{" "}
            {project.skillLevel || "Not specified"}
          </div>
        </div>
        <div>
          <p className="font-medium">Links:</p>
          <div className="my-1">
            Github:
            {project.links?.repoUrl ? (
              <a
                href={project.links.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline ms-2"
              >
                {project.links.repoUrl}
              </a>
            ) : (
              " Not available"
            )}
          </div>
          <div>
            Live URL:
            {project.links?.liveUrl ? (
              <a
                href={project.links.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline ms-2"
              >
                {project.links.liveUrl}
              </a>
            ) : (
              " Not available"
            )}
          </div>
        </div>
      </div>

      <div className="col-span-2 flex justify-between mt-6">
        <div className="capitalize flex gap-2">
          <span className="font-medium">Status:</span> {project.status}
          {project.status === "ongoing" ? (
            <CircleEllipsis color="blue" />
          ) : project.status === "completed" ? (
            <CircleCheck color="green" />
          ) : project.status === "paused" ? (
            <CirclePause color="orange" />
          ) : (
            <CircleX color="red" />
          )}
        </div>
        {!project.user === user ? (
          <AlertDialog>
            <AlertDialogTrigger>
              <Button onClick={handleRequestToJoin}>Request to join</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        ) : (
          <Dialog>
            <DialogTrigger asChild>
              <Button
                className="bg-orange-500 hover:bg-orange-500/90"
                onClick={handleEditProject}
              >
                <Edit /> Edit
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit project</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you're
                  done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    value="Pedro Duarte"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    Username
                  </Label>
                  <Input
                    id="username"
                    value="@peduarte"
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </div>
  );
};

export default ProjectPage;
