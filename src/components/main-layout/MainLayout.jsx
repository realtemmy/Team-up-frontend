import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import { AppSidebar } from "../ui/app-sidebar";

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import Navigation from "../navigation/Navigation";

const MainLayout = () => {
  const [crumbs, setCrumbs] = useState([]);
  const location = useLocation();
  useEffect(() => {
    setCrumbs(location.pathname.split("/")?.filter(Boolean));
    
  }, [location]);
  return (
    <SidebarProvider>
      <AppSidebar />
      <div>
        <div className="flex items-center">
          <SidebarTrigger />

          <Breadcrumb className="flex">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </BreadcrumbList>
            {crumbs.map((crumb, index) => {
              return (
                <BreadcrumbList key={index}>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to={`/${crumb}`}>{crumb}</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                </BreadcrumbList>
              );
            })}
          </Breadcrumb>
        </div>

        <Navigation />
      </div>
    </SidebarProvider>
  );
};

export default MainLayout;
