import { Separator } from "@/components/ui/separator";
import React from "react";
import { DocsSidebarNav } from "@/components/SideNavbar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const sidebarNavItems = [
    {
      title: "Dashboard",
      href: "/",
    },
    {
      title: "Profile",
      href: "/profile",
    },
    {
      title: "Account",
      href: "/account",
    },

    {
      title: "Notifications",
      href: "/notifications",
    },
    {
      title: "Display",
      href: "/display",
    },
  ];

  return (
    <div className="hidden space-y-6 p-10 pb-16 md:block">
      <div className="space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
        <p className="text-muted-foreground">
          Manage your account settings and set e-mail preferences.
        </p>
      </div>
      <Separator className="my-6" />
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="-mx-4 lg:w-1/5">
          {/* <Sidebar i  /> */}
          <DocsSidebarNav items={sidebarNavItems} pathname={null} />
        </aside>
        <div className="flex-1 lg:max-w-2xl">{children}</div>
      </div>
    </div>
  );
}
