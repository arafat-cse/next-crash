import React from "react";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <nav className="mt-6 mb-6">mission | Vission</nav>
      {children}
    </div>
  );
}
