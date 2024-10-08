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
          <div className="flex items-center capitalize gap-2 mb-1">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback className="uppercase">CN</AvatarFallback>
            </Avatar>

            <div className="text-slate-700 font-semibold">realtemmy</div>
          </div>
          <hr />
          <div className="my-1">
            <span className="text-slate-700 font-semibold capitalize">
              Team Up:
            </span>
            <span> A web development project.</span>
          </div>
          <hr className="my-1" />
          <div
            className="text-sm"
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 4,
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            "Needing a frontend developer for an amazing project that focuses
            majorly on healthcare"
          </div>
        </section>
        <section className="border rounded-lg shadow p-2">
          <div className="flex items-center capitalize gap-2 mb-1">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback className="uppercase">CN</AvatarFallback>
            </Avatar>

            <div className="text-slate-700 font-semibold">realtemmy</div>
          </div>
          <hr />
          <div className="my-1">
            <span className="text-slate-700 font-semibold capitalize">
              Team Up:
            </span>
            <span> A web development project.</span>
          </div>
          <hr className="my-1" />
          <div
            className="text-sm"
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 4,
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            "Needing a frontend developer for an amazing project that focuses on
            healthcare"
          </div>
        </section>
      </div>
    </>
  );
};

export default LatestProjects;
