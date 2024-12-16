import Link from "next/link";
import React from "react";

export default function Links() {
  return (
    <div className="flex flex-col space-y-4">
      <Link href={"/admin"}>Dashboard</Link>
      <Link href={"/admin/list"}>List</Link>
      <Link href={"/admin/setting"}>Setting</Link>
    </div>
  );
}
