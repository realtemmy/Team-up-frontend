import { useParams } from "react-router-dom";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import defaultImage from "../../../assets/default profile.jpg";

const ProjectPage = () => {
  const { projectId } = useParams();
  return (
    <div className="grid grid-cols-2">
      <h4 className="font-semibold text-xl col-span-2 text-center">
        Team up: A web dev project
      </h4>
      <div className="col-span-2 grid gap-2 mt-4 grid-cols-2">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="project image"
          className="col-span-1"
        />
        <div className="col-span-1">
          <h5 className="font-semibold">Project description</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae culpa
            obcaecati voluptas necessitatibus, quos ipsum quibusdam non magnam
            inventore qui adipisci consequuntur laboriosam sit, error voluptate
            reprehenderit nisi corporis! Accusamus, repudiandae quaerat? Itaque
            id deleniti quis laboriosam, quae velit perferendis aliquam, quos
            eligendi et doloremque obcaecati harum. Magnam, quod enim!
          </p>
        </div>
      </div>
      <div className="col-span-2 grid grid-cols-2">
        <p>
          Skills:{" "}
          <span>
            Reactjs, Nodejs, MongoDB, axios, Git and github, Backend
            architecture.
          </span>
        </p>
        <div>
          <p className="font-medium">Links: </p>
          <div>
            <Label htmlFor="github">Github</Label>
            <Input type="url" />
          </div>
          <div>
            <Label htmlFor="liveUrl">Live url</Label>
            <Input type="url" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
