import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

const ChatMessage = ({ message }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { sender, timestamp, text, images, type, status } = message;

  const renderImages = (images) => {
    const MAX_DISPLAY = 4; // Max images to display in the grid
    const visibleImages = images.slice(0, MAX_DISPLAY);
    const remainingImages = images.length - MAX_DISPLAY;

    return (
      <div className="grid gap-4 grid-cols-2 my-2.5">
        {visibleImages.map((img, index) => (
          <div key={index} className="group relative">
            <div className="absolute w-full h-full bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
              <button
                className="inline-flex items-center justify-center rounded-full h-8 w-8 bg-white/30 hover:bg-white/50 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50"
                aria-label="Download image"
              >
                <svg
                  className="w-4 h-4 text-white"
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
              </button>
            </div>
            <img
              src={img}
              alt={`Attachment ${index + 1}`}
              className="rounded-lg"
            />
          </div>
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
    <ScrollArea className="h-[calc(100vh)] px-2">
      <div className="flex items-start gap-2.5">
        {/* Profile Picture */}
        <img
          className="w-8 h-8 rounded-full"
          src={sender.profilePicture}
          alt={`${sender.name}'s profile`}
        />

        {/* Message Content */}
        <div className="flex gap-1">
          <div className="flex flex-col w-full max-w-[326px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
            {/* Header */}
            <div className="flex items-center space-x-2 rtl:space-x-reverse mb-2">
              <span className="text-sm font-semibold text-gray-900 dark:text-white">
                {sender.name}
              </span>
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                {timestamp}
              </span>
            </div>

            {/* Message Body */}
            {type.includes("text") && text && (
              <p className="text-sm font-normal text-gray-900 dark:text-white mb-2">
                {text}
              </p>
            )}
            {type.includes("images") && images && renderImages(images)}

            {/* Footer */}
            <div className="flex justify-between items-center mt-2">
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                {status}
              </span>
              {type.includes("images") && (
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
          {/* Dropdown */}
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-600"
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
          </button>

          {dropdownOpen && (
            <div className="z-10 absolute right-0 bottom-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-700 dark:divide-gray-600">
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                <li>
                  <button className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Reply
                  </button>
                </li>
                <li>
                  <button className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Forward
                  </button>
                </li>
                <li>
                  <button className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Copy
                  </button>
                </li>
                <li>
                  <button className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Report
                  </button>
                </li>
                <li>
                  <button className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Delete
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </ScrollArea>
  );
};

export default ChatMessage;
