import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const UserChatPreview = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex gap-1 my-2">
          <Avatar className="h-10 w-10">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">Lesley Livingston</p>
            <p className="text-sm text-slate-600 truncate w-fit max-w-[200px]">
              Yes, we can do this Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Officia, rerum?.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-1 items-center justify-center">
          <div className="text-xs">18:05</div>
          <div className="rounded-full bg-blue-200 px-1 text-xs font-semibold text-blue-600">
            0
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-1 my-2">
          <Avatar className="h-10 w-10">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">Roberta Cacas</p>
            <p className="text-sm text-slate-600 truncate w-fit max-w-[200px]">
              Yes, we can do this Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Officia, rerum?.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-1 items-center justify-center">
          <div className="text-xs">18:05</div>
          <div className="rounded-full bg-blue-200 px-1 text-xs font-semibold text-blue-600">
            0
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserChatPreview;
