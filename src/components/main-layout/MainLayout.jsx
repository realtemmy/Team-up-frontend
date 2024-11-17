import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

import { SidebarProvider, SidebarTrigger, SidebarInset } from "../ui/sidebar";
import AppSidebar from "../ui/app-sidebar";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import Navigation from "../navigation/Navigation";
import { Separator } from "../ui/separator";

const MainLayout = () => {
  const [crumbs, setCrumbs] = useState([]);
  const location = useLocation();

  useEffect(() => {
    setCrumbs(location.pathname.split("/").filter(Boolean));
  }, [location]);

  return (
    <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header >
            {/* Breadcrumb and Navigation */}
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
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
            <Navigation />
          </header>
        </SidebarInset>
    

    </SidebarProvider>
  );
};

export default MainLayout;
