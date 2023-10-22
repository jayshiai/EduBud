import React from "react";
import Link from "next/link";
const page = () => {
  return (
    <div className="h-screen w-screen flex justify-evenly items-center m-0 p-0">
      <Link
        href="https://jayshiai.github.io/"
        className="text-2xl font-bold font-mono"
      >
        Jayvardhan Patil
      </Link>
      <div className="text-2xl font-bold font-mono">Yash Kahalkar</div>
      <div className="text-2xl font-bold font-mono">Kunaal Sharma</div>
      <div className="text-2xl font-bold font-mono">Aryan Chouhan</div>
    </div>
  );
};

export default page;
