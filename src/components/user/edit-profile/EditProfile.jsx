import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
// import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { CheckIcon, BoxSelect } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const EditProfile = () => {
  const defaultFields = {
    username: "",
    email: "",
    address: "",
    projectName: "",
    skills: "",
    projectUrl: "",
    contributors: "",
    certificationName: "",
    certificateUrl: "",
    certificateDateIssued: "",
  };
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [formFields, setFormFields] = useState(defaultFields);

  const frameworks = [
    // will contain email and id
    {
      value: "Next.js",
      label: "temiloluwaOgunti8@gmail.com",
    },
    {
      value: "SvelteKit",
      label: "temmy4jamb@gmail.com",
    },
    {
      value: "Nuxt.js",
      label: "officialtemi@gmail.com",
    },
    {
      value: "Remix",
      label: "test@mail.com",
    },
    {
      value: "Astro",
      label: "astro@mail.com",
    },
  ];

  return (
    <ScrollArea className="h-[calc(70vh)] w-full border-t">
      <form className="mx-4 sm:grid sm:grid-cols-2 sm:gap-4">
        <section>
          <h4 className="font-semibold mb-2 text-xl">Personal Information</h4>
          <div className="mb-2">
            <Label htmlFor="username">Username</Label>
            <Input placeholder="Username" type="text" id="username" />
          </div>
          <div className="mb-2">
            <Label htmlFor="email">Email</Label>
            <Input placeholder="Johndoe@mail.io" type="email" id="email" />
          </div>
          <div className="mb-2">
            <Label htmlFor="address">Address</Label>
            <Input placeholder="Lagos, Nigeria" type="text" id="address" />
          </div>
        </section>

        {/* Edit Projects */}
        <section>
          <h4 className="font-semibold mb-2 text-xl">Experience</h4>
          <div className="mb-2">
            <Label htmlFor="projectName">Project Name</Label>
            <Input placeholder="" type="text" />
          </div>
          <div className="mb-2">
            <Label htmlFor="projectDescription">Project description</Label>
            <Input
              type="text"
              id="projectDescription"
              placeholder="Enter project's description"
            />
          </div>
          <div className="mb-2">
            <Label htmlFor="email">Project Url</Label>
            <Input placeholder="Link to project" type="text" />
          </div>
          <div className="mb-2">
            <Label htmlFor="skills">Skills</Label>
            <Input placeholder="Lagos, Nigeria" id="skills" />
          </div>
          <div className="mb-2 flex items-center justify-between">
            <Label htmlFor="contributors">Contributors</Label>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className="w-[200px] justify-between"
                >
                  <p>Select User</p>
                  <BoxSelect className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[300px] p-0 me-4">
                <Command>
                  <CommandInput placeholder="Search user..." className="h-9" />
                  <CommandList>
                    <CommandEmpty>No user with email found.</CommandEmpty>
                    <CommandGroup>
                      {frameworks.map((framework) => (
                        <CommandItem
                          key={framework.value}
                          value={framework.value}
                          onSelect={(currentValue) => {
                            setValue(
                              currentValue === value ? "" : currentValue
                            );
                            setOpen(false);
                          }}
                        >
                          {framework.label}
                          <CheckIcon
                            className={cn(
                              "ml-auto h-4 w-4",
                              value === framework.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
          {
            value
          }
        </section>

        {/* Edit Certifications */}
        <section>
          <h4 className="font-semibold mb-2 text-xl">Certifications</h4>
          <div className="mb-2">
            <Label htmlFor="certificateName">Certification Name</Label>
            <Input placeholder="Certificate name" type="text" />
          </div>
          <div className="mb-2">
            <Label htmlFor="certificateUrl">Certificate Url</Label>
            <Input
              placeholder="Link to certificate"
              type="text"
              id="certificateUrl"
            />
          </div>
          <div className="mb-2">
            <Label htmlFor="issuingOrganization">Issuing Organization</Label>
            <Input placeholder="Lagos, Nigeria" id="issuingOrganization" />
          </div>
        </section>
      </form>
    </ScrollArea>
  );
};

export default EditProfile;
