"use client";
import React, { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut } from "@clerk/clerk-react"; // Assuming you're using Clerk for authentication
import { buttonVariants } from "@/components/ui/button"; // Assuming this is how you're importing your button styles

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 0);
    });
  }, [scrollY]);

  return (
    <motion.header
      className="fixed w-full px-4 py-6 flex justify-between items-center z-[999] transition-colors duration-300"
      initial={false}
      animate={{ opacity: 1 }}
      style={{
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(10px)' : 'none' // Ensures cross-browser support
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link href='/'>
        <Image
          src="/logo.png"
          alt="Boncap Logo"
          width={40}
          height={40}
          className="w-12"
          />
          </Link>
      </motion.div>

      <nav className="hidden md:flex items-center space-x-6">
        {[
          {title:"About Us", link:"#"},
          {title:"Our Vision",  link:"#"},
          {title:"What we do",  link:"#"},
          {title:"Contact us", link:"contact"}
        ].map(
          (item, index) => (
            <motion.a
              key={item.title}
              href={item.link}
              className="hover:text-green-400"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {item.title}
            </motion.a>
          )
        )}
        <SignedIn>
          <Link className={buttonVariants({ variant: "default" })} href="/dashboard">
            Dashboard
          </Link>
        </SignedIn>
        <SignedOut>
          <Link className={buttonVariants({ variant: "default" })} href="/sign-up">
            Log In
          </Link>
        </SignedOut>
      </nav>

      <Button variant="ghost" size="icon" className="md:hidden">
        <Menu className="h-6 w-6" />
      </Button>
    </motion.header>
  );
};

export default Navbar;
