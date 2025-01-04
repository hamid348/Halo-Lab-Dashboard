import { Avatar, Button } from "flowbite-react";
import {
  Bell,
  CommandIcon,
  LayoutDashboardIcon,
  LightbulbIcon,
  Music,
  Thermometer,
  ShieldCheck,
  Settings,
  Menu,
} from "lucide-react";
import React, { useState } from "react";

function SideBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative">
      {/* Burger Menu for Mobile */}
      <div className="flex items-center justify-between p-3 md:hidden">
        <Menu
          className="w-8 h-8 cursor-pointer"
          onClick={toggleSidebar}
        />
      </div>

      {/* Sidebar */}
      <div
        className= {`flex flex-col justify-between items-center top-0 left-0 h-full z-50 p-1 pt-4 transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:relative md:flex md:flex-col md:justify-between md:w-64 `}
      >
        {/* Top Section */}
        
          <div className="">
            <CommandIcon className="size-10" />
          </div>

        
        
      
              <div className=" space-y-4 divide-y-2 divide-gray-600">
                <Button
                  color="gray"
                  size="sm"
                  className="py-2 bg-gray-300 border-0 rounded-2xl focus:ring-0 focus:outline-none"
                >
                  <LayoutDashboardIcon className="text-black size-5" />
                </Button>
                <Button
                  color="gray"
                  size="sm"
                  className="py-2 border-none rounded-2xl focus:ring-0 focus:bg-gray-300"
                >
                  <LightbulbIcon className="text-black size-5" />
                </Button>
                <Button
                  color="gray"
                  size="sm"
                  className="py-2 border-none rounded-2xl focus:ring-0 focus:bg-gray-300"
                >
                  <Music className="text-black size-5" />
                </Button>
                <Button
                  color="gray"
                  size="sm"
                  className="py-2 border-none rounded-2xl focus:ring-0 focus:bg-gray-300"
                >
                  <Thermometer className="text-black size-5" />
                </Button>
                <Button
                  color="gray"
                  size="sm"
                  className="py-2 border-none rounded-2xl focus:ring-0 focus:bg-gray-300"
                >
                  <ShieldCheck className="text-black size-5" />
                </Button>
                <Button
                  color="gray"
                  size="sm"
                  className="py-2 border-none rounded-2xl focus:ring-0 focus:bg-gray-300"
                >
                  <Bell className="text-black size-5" />
                </Button>
              </div>
            

        {/* Bottom Section */}
        <div className="flex flex-col items-center gap-2 mb-5">
          <Button
            color="gray"
            size="sm"
            className="py-2 border-none rounded-2xl focus:ring-0 focus:bg-gray-300"
          >
            <Settings className="text-black size-5" />
          </Button>
          <Avatar
            img="/logo192.png"
            size="md"
            className="border rounded-full size-14"
          />
        </div>
      </div>

      {/* Overlay for Mobile */}
      {isSidebarOpen && (
        <div
          className=" inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
}

export default SideBar;
