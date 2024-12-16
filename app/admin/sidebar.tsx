import React from "react";
import Links from "./links";

export default function Sidebar() {
  return (
    <aside className="bg-slate-200 p-12 flex flex-col content-center space-y-2 h-screen">
      <h1 className="text-lg font-semibold pb-8">Admin Panel</h1>
      <Links />
    </aside>
  );
}
