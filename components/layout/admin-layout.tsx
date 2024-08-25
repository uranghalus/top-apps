'use client';
import { ChildrenProps } from '@/types/childrenprops';
import React from 'react';
import Sidebar from '@/components/ui/sidebar';
import Navbar from '@/components/ui/navbar';
import { useStore } from '@/store/useStore';
import { useSidebarToggle } from '@/store/useSidebarToggle';
import { cn } from '@/lib/utils';
import { Footer } from '@/components/ui/footer';
const AdminLayouts: React.FC<ChildrenProps> = ({ children }) => {
  const sidebar = useStore(useSidebarToggle, (state) => state);

  if (!sidebar) return null;
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />
      {children}
    </div>
  );
};

export default AdminLayouts;
