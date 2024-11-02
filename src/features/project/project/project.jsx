import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

import axiosService from "@/axios";

const Project = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const getProjects = async () => {
      const res = await axiosService.get("/project");
      console.log(res.data);
      setProjects(res.data);
    };
    getProjects();
  }, []);

  return (
    <section
      className="my-4 gap-4"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr) )",
      }}
    >
      {projects.map((project, index) => (
        <div className="shadow-md rounded border p-2" key={index}>
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="rounded object-cover"
            alt="image"
          />
          <h5 className="font-semibold">Title: {project.name}</h5>
          <div>
            Project Type: <span className="capitalize">{project.type}</span>
          </div>
          <p
            className="font-semibold my-2"
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {project.summary}
          </p>
          <div className="capitalize truncate text-ellipsis">Skills: {["react", "nodejs", "postgres"].join(", ")}.</div>
          <div className="flex justify-between items-center my-1">
            <div className="capitalize">Status: {project.status}</div>
            <Button size="sm" onClick={() => navigate(`/projects/${project._id}`)}>View</Button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Project;
