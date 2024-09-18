import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const LatestProjects = () => {
  return (
    <>
      <h4 className="font-semibold text-xl my-2">Latest Projects</h4>
      <div
        className="gap-2 text-sm"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(155px, 1fr) )",
        }}
      >
        <section className="border rounded-lg shadow p-2">
          <div className="flex items-center capitalize gap-2">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback className="uppercase">CN</AvatarFallback>
            </Avatar>

            <div className="text-slate-700 font-semibold">realtemmy</div>
          </div>
          <div
            className="underline my-2"
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            <span className="text-slate-700 font-semibold capitalize">
              Team Up:
            </span>{" "}
            A web development project.
          </div>
          <div
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 4,
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
            voluptatibus nobis maiores excepturi error est, odit veritatis
            architecto itaque fugit.
          </div>
        </section>
        <section className="border rounded-lg shadow p-2">
          <div className="flex items-center capitalize gap-2">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback className="uppercase">CN</AvatarFallback>
            </Avatar>

            <div className="text-slate-700 font-semibold">realtemmy</div>
          </div>
          <div
            className="underline my-2"
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            <span className="text-slate-700 font-semibold capitalize">
              Team Up:
            </span>{" "}
            A web development project.
          </div>
          <div
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 4,
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
            voluptatibus nobis maiores excepturi error est, odit veritatis
            architecto itaque fugit.
          </div>
        </section>
      </div>
    </>
  );
};

export default LatestProjects;
