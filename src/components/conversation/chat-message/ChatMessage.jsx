import { useEffect, useRef, useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MoveLeft, MoveRight } from "lucide-react";
import { formatTime } from "@/lib/utils";

const ChatMessage = ({ message, receiver }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const { createdAt, message: text, images, status, variant } = message;

  const handleNextImage = () => {
    setImageIndex(imageIndex + 1);
  };
  const handlePrevImage = () => {
    setImageIndex(imageIndex - 1);
  };

  const renderImages = (images) => {
    const MAX_DISPLAY = 4; // Max images to display in the grid
    const visibleImages = images.slice(0, MAX_DISPLAY);
    const remainingImages = images.length - MAX_DISPLAY;

    return (
      <div className="grid gap-4 grid-cols-2 my-2.5">
        {visibleImages.map((img, index) => (
          <Dialog key={index}>
            <DialogTrigger>
              <img
                key={index}
                src={img}
                alt={`Attachment ${index + 1}`}
                onClick={() => setImageIndex(index)}
                className="rounded-lg"
              />
            </DialogTrigger>
            <DialogContent className="p-0 my-2">
              <div className="relative flex items-center justify-center w-full h-full">
                <MoveLeft
                  // className="absolute left-0 w-6 h-6 text-white cursor-pointer"
                  onClick={handlePrevImage}
                  className={
                    imageIndex > 0
                      ? "absolute -left-8 cursor-pointer bottom-1/2 w-6 h-6 text-white"
                      : "hidden"
                  }
                />
                <img
                  src={images[imageIndex]}
                  className="object-cover rounded w-full h-full max-h-dvh"
                  loading="lazy"
                  alt="preview images"
                />
                <MoveRight
                  className={
                    imageIndex !== images.length - 1
                      ? "absolute -right-8 cursor-pointer bottom-1/2 h-6 text-white"
                      : "hidden"
                  }
                  onClick={handleNextImage}
                />
              </div>
            </DialogContent>
          </Dialog>
        ))}
        {remainingImages > 0 && (
          <div className="group relative">
            <button className="absolute w-full h-full bg-gray-900/90 hover:bg-gray-900/50 transition-all duration-300 rounded-lg flex items-center justify-center">
              <span className="text-xl font-medium text-white">
                +{remainingImages}
              </span>
            </button>
            <img
              src={images[MAX_DISPLAY]}
              alt="Extra images"
              className="rounded-lg"
            />
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="mb-4 mx-2">
      {/* Message Content */}
      <div className=" relative">
        <div
          className={`flex flex-col rounded-xl ${
            receiver ? "rounded-tl-none" : "rounded-tr-none"
          } w-fit max-w-[326px] leading-1.5 p-4 border-gray-200 bg-gray-100 dark:bg-gray-700`}
        >
          {/* Header */}

          {/* <span className="text-sm font-normal text-gray-500 dark:text-gray-400 text-right">
            {formatTime(createdAt)}
          </span> */}

          {/* Message Body */}
          {text && (
            <p className="text-sm font-normal text-gray-900 dark:text-white ">
              {text}
            </p>
          )}
          {images && images.length > 0 && renderImages(images)}

          {/* Footer */}
          <div className="flex justify-between items-center">
            <span className="text-xs ml-auto mr-0 font-normal text-gray-500 dark:text-gray-400 ">
              {status}
            </span>
            {images && images.length > 0 && (
              <button className="text-sm text-blue-700 dark:text-blue-500 font-medium inline-flex items-center hover:underline">
                <svg
                  className="w-3 h-3 mr-1.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"
                  />
                </svg>
                Save all
              </button>
            )}
          </div>
        </div>
        {/* <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="inline-flex order-1 self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-600"
          type="button"
        >
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 4 15"
          >
            <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
          </svg>
        </button> */}

        {dropdownOpen && (
          <div
            ref={dropdownRef}
            className={`z-10 absolute ${
              variant === "sent" ? "-left-1/3" : "-right-1/3"
            } top-1/2 bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-700 dark:divide-gray-600`}
          >
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
              <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">
                Reply
              </li>

              <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">
                Forward
              </li>

              <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">
                Copy
              </li>
              <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">
                Report
              </li>
              <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">
                Delete
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
