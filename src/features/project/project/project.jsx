import { Button } from "@/components/ui/button";

const Project = () => {
  return (
    <section
      className="my-4 gap-4"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr) )",
      }}
    >
      <div className="shadow-md rounded border p-2">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="rounded object-cover"
          alt="image"
        />
        <h5 className="font-semibold text-xl">Web dev project</h5>
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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. At officia
          expedita saepe dicta, aspernatur sit?
        </p>
        <div className="flex justify-between items-center">
          <div>Skill level: Intermediate</div>
          <Button>Join</Button>
        </div>
      </div>
      <div className="shadow-md rounded border p-2">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="rounded object-cover"
          alt="image"
        />
        <h5 className="font-semibold text-xl">ML Project</h5>
        <p className="font-semibold my-2">
          Machine learning project using python and Tensorflow
        </p>
        <div className="flex justify-between items-center">
          <div>Skill level: Intermediate</div>
          <Button>Join</Button>
        </div>
      </div>
      <div className="shadow-md rounded border p-2">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="rounded object-cover"
          alt="image"
        />
        <h5 className="font-semibold text-xl">Web dev project</h5>
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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. At officia
          expedita saepe dicta, aspernatur sit?
        </p>
        <div className="flex justify-between items-center">
          <div>Skill level: Intermediate</div>
          <Button>Join</Button>
        </div>
      </div>
      <div className="shadow-md rounded border p-2">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="rounded object-cover"
          alt="image"
        />
        <h5 className="font-semibold text-xl">Web dev project</h5>
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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. At officia
          expedita saepe dicta, aspernatur sit?
        </p>
        <div className="flex justify-between items-center">
          <div>Skill level: Intermediate</div>
          <Button>Join</Button>
        </div>
      </div>
    </section>
  );
};

export default Project;
