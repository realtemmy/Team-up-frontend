import { Button } from "@/components/ui/button";
import { Code2, Laptop2, Users, Network } from "lucide-react";
import LatestProjects from "@/components/projects/latest-project/LatestProjects";
import { Link } from "react-router-dom";

const Home = () => {
  // https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
  return (
    <div>
      <section className="grid grid-cols-5 py-10 px-5 rounded shadow-sm border">
        <div className="col-span-3">
          <h1 className="text-3xl font-bold">
            Join a community of project enthusiasts. Create. Collaborate
          </h1>
          <p>
            Join our community of innovators and creators to find inspiration,
            collaborate on projects, and participate in exciting hackathons.
          </p>
        </div>
      </section>
      {/* Categories */}
      <section className="my-4">
        <h4 className="text-xl font-semibold my-2">Categories</h4>
        <div className="flex gap-2 items-center justify-between flex-wrap">
          <Button variant="outline">
            <Code2 /> <span className="ps-2">Coding</span>
          </Button>

          <Button variant="outline">
            <Users /> <span className="ps-2">Community</span>
          </Button>

          <Button variant="outline">
            <Network />
            <span className="ps-2">Networking</span>
          </Button>

          <Button variant="outline">
            <Laptop2 />
            <span className="ps-2">Tech projects</span>
          </Button>
        </div>
      </section>
      <section className="px-">
        <LatestProjects />
      </section>
      <Link
        to="/"
        className="font-semibold text-slate-600 border p-1 rounded shadow"
      >
        Explore products
      </Link>
      {/* Sliding images */}
      {/* Testimonies */}
      {/* footer */}
    </div>
  );
};

export default Home;
