"use client";
import {
  Sidebar,
  SidebarBody,
  SidebarLink,
} from "@/components/Dashboard/sidebar";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import { motion } from "framer-motion";
import { CircleDollarSign, LayoutDashboard, Plus, User, Wallet } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: (
      <LayoutDashboard className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "Add Project",
    href: "/dashboard/addproject",
    icon: (
      <Plus className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "Wallet",
    href: "/dashboard/wallet",
    icon: (
      <Wallet className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "Profile",
    href: "/dashboard/profile",
    icon: (
      <User className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "Exchange",
    href: "/dashboard/exchange",
    icon: (
      <CircleDollarSign className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
];

const Logo = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <Image src="/logo.png" alt="logo" width={24} height={24} />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        Net Zero
      </motion.span>
    </Link>
  );
};

const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <Image src="/logo.png" alt="logo" width={24} height={24} />
    </Link>
  );
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row dark:bg-neutral-800 w-full flex-1 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-screen" // for your use case, use `h-screen` instead of `h-[60vh]`
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between gap-2">
            <UserButton />
          </div>
        </SidebarBody>
      </Sidebar>
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  );
}
