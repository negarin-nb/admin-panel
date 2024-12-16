"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";

const getList = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users?_limit=6"
  );
  if (!res.ok) {
    throw new Error("Somthing is Wrong!");
  }
  return res.json();
};

interface ListItemType {
  id: string;
  name: string;
  username: string;
  email: string;
  phone: string;
}

export default function ListPage() {
  const { data, isLoading, error } = useQuery({
    queryFn: getList,
    queryKey: ["list"],
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className="w-full">
      <h2 className="font-semibold capitalize">List</h2>
      <table className="w-full table-auto  ">
        <thead className="text-left">
          <tr>
            <th className="py-5 border-b-2">Name</th>
            <th className="py-5 border-b-2">User Name</th>
            <th className="py-5 border-b-2">Email</th>
            <th className="py-5 border-b-2">Phone</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((listItem: ListItemType) => (
            <tr key={listItem.id}>
              <td className="py-5 border-b-2 text-md font-semibold">
                {listItem.name}
              </td>
              <td className="py-5 border-b-2 text-sm font-semibold text-[#667085]">
                {listItem.username}
              </td>

              <td className="py-5 border-b-2 text-sm  text-[#6941C6] ">
                {listItem.email}
              </td>
              <td className="py-5 border-b-2 text-sm text-[#667085]">
                {listItem.phone}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
