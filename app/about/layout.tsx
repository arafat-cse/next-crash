import Link from "next/link";
import React from "react";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <nav className="mt-20 mb-6">
        {" "}
        <ul className="flex gap-6">
          <li>
            {" "}
            <Link href="">Mission</Link>
          </li>
          <li>
            {" "}
            <Link href="/vission">Visson</Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
}
