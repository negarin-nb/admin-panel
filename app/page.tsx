import Link from "next/link";

export default function Home() {
  return (
    <div className="py-8">
      <Link className="font-bold p-10" href={"/admin"}>
        Go to Admin Panel
      </Link>
    </div>
  );
}
