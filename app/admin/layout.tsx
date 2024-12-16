import React, { ReactNode } from "react";
import Sidebar from "./sidebar";

interface Props {
  children: ReactNode;
}

export default function AdminLayout({ children }: Props) {
  return (
    <div className="flex h-screen">
      <div className="w-1/5">
        <Sidebar />
      </div>

      <div className="w-4/5 p-12">{children}</div>
    </div>
  );
}
