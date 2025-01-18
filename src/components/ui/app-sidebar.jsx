import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  ChevronUp,
  Settings,
  TrophyIcon,
  MessagesSquare,
  MessageCircle,
  FolderKanban,
  BringToFront,
  SquarePlus,
  Bookmark,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./collapsible";
import axiosService from "@/axios";

const AppSidebar = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    const fetchTeams = async () => {
      const res = await axiosService.get("/project/user");
      setTeams(res.data);
    };
    fetchTeams();
  }, []);

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>Team up</SidebarHeader>
      <SidebarContent>
        {/* messaging */}
        <SidebarGroup>
          <SidebarGroupLabel>Messaging</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <Collapsible>
                <SidebarMenuItem>
                  <CollapsibleTrigger>
                    <SidebarMenuButton className="w-[15rem]">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <MessagesSquare />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Groups</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      Groups
                    </SidebarMenuButton>
                    <SidebarMenuBadge>7</SidebarMenuBadge>
                  </CollapsibleTrigger>

                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton>Web dev</SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton>
                          Backend architecture
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
              <Collapsible>
                <SidebarMenuItem>
                  <CollapsibleTrigger>
                    <SidebarMenuButton className="w-[15rem]">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <MessageCircle />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Chats</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      Chats
                    </SidebarMenuButton>
                    <SidebarMenuBadge>12</SidebarMenuBadge>
                  </CollapsibleTrigger>

                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton>Dumbor</SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton>David</SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
              {/* Active chats */}
              <Collapsible>
                <SidebarMenuItem>
                  <CollapsibleTrigger>
                    <SidebarMenuButton className="w-[15rem]">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <MessageCircle />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Active</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      Active  
                    </SidebarMenuButton>
                    <SidebarMenuBadge>12</SidebarMenuBadge>
                  </CollapsibleTrigger>

                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton>Dumbor</SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton>David</SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Teams */}
        <SidebarGroup>
          <SidebarGroupLabel>Teams</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {teams.map((team, idx) => (
                <SidebarMenuItem key={idx}>
                  <SidebarMenuButton asChild>
                    <Link to={`/team/${team._id}`}>
                      <BringToFront /> <span>{team.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}

              {/* <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/team/team-up-frontend">
                    <Server /> <span>Team up Server</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem> */}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Routes */}
        <Collapsible defaultOpen className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                Routes
                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link to="/projects">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <FolderKanban />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Projects</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>

                        <span>Projects</span>
                      </Link>
                    </SidebarMenuButton>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link to="/feed">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <SquarePlus />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Posts</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>

                          <span>Feed</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link to="/hackathons">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <TrophyIcon />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Hackathons</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>

                          <span>Hackathons</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link to="/user/settings">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Settings />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Settings</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>

                          <span>Settings</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link to="/bookmarks">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Bookmark />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Bookmarks</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>

                          <span>Bookmarks</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
      </SidebarContent>
      {/* Footer */}
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <Avatar className="rounded-md">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="w-8/12">
                    <p className="font-semibold text-slate-700">Realtemmy</p>
                    <p className="text-xs truncate text-ellipsis">
                      temiloluwaogunti8@gmail.com
                    </p>
                  </div>
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <div className="flex items-center text-start">
                  <Avatar className="rounded-md">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="mx-1">
                    <p className="font-semibold text-slate-700">Realtemmy</p>
                    <p className="text-xs truncate text-ellipsis">
                      temiloluwaogunti8@gmail.com
                    </p>
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuGroup></DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      Invite users
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem>Email</DropdownMenuItem>
                        <DropdownMenuItem>Message</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>More...</DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                  <DropdownMenuItem>
                    New Team
                    <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>GitHub</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuItem disabled>API</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  Log out
                  <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
