import Link from 'next/link';
import React from 'react';
import { RiApps2Fill, RiNotification4Line } from 'react-icons/ri';
import { Button } from './button';
import { Menu } from './menu';

const Sidebar = () => {
  return (
    <aside className="hidden border-r bg-white md:block ">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <img
              src="/icons/icon-512x512.png"
              className="p-1 w-11 rounded-lg shadow-lg border border-gray-200 bg-white"
              alt="Logo"
            />
            {/* <RiApps2Fill className="h-6 w-6" /> */}
            <span className="">Top Apps</span>
          </Link>
          <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
            <RiNotification4Line className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>
        <div className="flex-1">
          <Menu isOpen />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
