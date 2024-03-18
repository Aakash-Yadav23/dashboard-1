import Sidebar from "@/components/Sidebar/Sidebar";
import Image from "next/image";
import { ProfileForm } from "./pages/account/profile";
import { DocsSidebarNav } from "@/components/SideNavbar";
import { Separator } from "@/components/ui/separator";


export default function Home() {
  
const sidebarNavItems = [
  {
    title: "Profile",
    href: "/acoount/profile",
  },
  {
    title: "Account",
    href: "/appearance/account",
  },
  {
    title: "Appearance",
    // href: "/examples/forms/appearance",
  },
  {
    title: "Notifications",
    // href: "/examples/forms/notifications",
  },
  {
    title: "Display",
    // href: "/examples/forms/display",
  },
]

  return (
    // <div className="">
    //   <div className="space-y-4">
    //     <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
    //     <p className="text-muted-foreground">
    //       Manage your account settings and set e-mail preferences.
    //     </p>
    //   </div>
    //   <Separator/>

    //   <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-4 ">
    //     <aside className="md:w-mx-4 lg:w-1/5">
    //       {/* <Sidebar /> */}
    //       <DocsSidebarNav items={sidebarNavItems} />

    //     </aside>
    //     <div className="flex lg:max-w-2xl">
    //       <ProfileForm />
    //     </div>
    //   </div>
    // </div>


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
       {/* <Sidebar /> */}
   <DocsSidebarNav items={sidebarNavItems} />


  </aside>
  <div className="flex-1 lg:max-w-2xl">
       <ProfileForm />
    
  </div>
</div>
</div>
  );
}






