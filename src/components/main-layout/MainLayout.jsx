import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import AppSidebar from "../ui/app-sidebar";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import Navigation from "../navigation/Navigation";

const MainLayout = () => {
  const [crumbs, setCrumbs] = useState([]);
  const location = useLocation();

  useEffect(() => {
    setCrumbs(location.pathname.split("/").filter(Boolean));
  }, [location]);

  return (
    <SidebarProvider>
      <div className="flex">
        {/* Sidebar */}
        <AppSidebar />

        {/* Main Content */}
        <div className="flex-1 flex flex-col p-4">
          {/* Breadcrumb and Navigation */}
          <div className="flex items-center mb-4">
            <SidebarTrigger />
            <Breadcrumb className="flex ml-2">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </BreadcrumbList>
              {crumbs.map((crumb, index) => (
                <BreadcrumbList key={index}>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to={`/${crumb}`}>{crumb}</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                </BreadcrumbList>
              ))}
            </Breadcrumb>
          </div>

          {/* Navigation */}
          <Navigation />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default MainLayout;
