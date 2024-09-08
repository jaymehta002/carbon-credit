"use client"
import React, { ReactNode } from "react";
import Image from "next/image";
import { ArrowRight, Menu } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import AboutUs from "./AboutUs";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import Navbar from "./Navbar";

const AnimatedSection = ({ children }:{children:ReactNode}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

export default function Component() {
  return (
    <div className="bg-black w-full text-white min-h-screen">
      <Navbar/>

      <main>
        <section className="relative h-screen">
          <Image
            src="/hero.jpg"
            alt="Aerial view of a forest and river"
            layout="fill"
            objectFit="cover"
            className="brightness-50"
          />
          <motion.div
            className="absolute inset-0 flex flex-col justify-center container mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Driving <span className="text-green-400">Sustainable</span>
              <br />
              Change
            </h1>
            <p className="text-xl mb-8 max-w-2xl">
              We are a pioneering catalyst driving sustainable change. Our mission is to empower developers of high-quality carbon projects, creating a positive ripple effect.
            </p>
            <Button className="bg-green-400 text-black hover:bg-green-500 w-fit">
              Get Started
            </Button>
          </motion.div>
        </section>

        <AboutUs />

        <AnimatedSection>
        <section className="bg-black py-16">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid md:grid-cols-2 gap-8 items-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-white">
            <h2 className="text-2xl font-semibold mb-4 text-[#C5E72D]">OUR VISION</h2>
            <p className="text-xl mb-8">
              To pioneer a future where financial prosperity seamlessly intertwines with ecological health,
              creating a world where sustainable initiatives thrive, and communities prosper.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-4xl font-bold mb-2 text-[#C5E72D]">$45M</h3>
                <p className="text-sm text-gray-400">Financing for sustainability</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold mb-2 text-[#C5E72D]">58M</h3>
                <p className="text-sm text-gray-400">Tons of carbon mitigated</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold mb-2 text-[#C5E72D]">5.2M</h3>
                <p className="text-sm text-gray-400">Trees planted</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold mb-2 text-[#C5E72D]">1.2M</h3>
                <p className="text-sm text-gray-400">Clean energy</p>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[500px]">
            <Image
              src="/hero.jpg"
              alt="Aerial view of coastline"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="bg-black py-16">
            <div className="container mx-auto px-4">
              <motion.h2
                className="text-6xl md:text-8xl font-bold mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Global <span className="text-green-400">Impact</span>
              </motion.h2>
              <motion.div
                className="grid md:grid-cols-3 gap-8 items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="md:col-span-2">
                  <p className="text-xl mb-8">
                    With 58 million metric tons of carbon mitigated, we are making a significant contribution to combating climate change on a global scale. Our commitment extends to the environment with 5.2 million trees planted to date.
                  </p>
                  <Button className="bg-green-400 text-black hover:bg-green-500">
                    Get Started
                  </Button>
                </div>
                <div className="relative h-64 md:h-auto">
                  <Image
                    src="/logo.png"
                    alt="Hand holding a small plant"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
              </motion.div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="bg-black py-16">
            <div className="container mx-auto px-4">
              <motion.div
                className="grid md:grid-cols-2 gap-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {[
                  {
                    title: "Renewable Energy Ventures",
                    description: "Investing in clean energy solutions for a sustainable future.",
                    image: "/renewable.jpg",
                  },
                  {
                    title: "Rainforest Preservation Project",
                    description: "Protecting vital ecosystems and biodiversity hotspots.",
                    image: "/rainforest.jpg",
                  },
                  {
                    title: "Sustainable Transportation",
                    description: "Implementing efficient transportation methods to reduce emissions.",
                    image: "/transportation.jpg",
                  },
                  {
                    title: "Urban Green Spaces",
                    description: "Creating sustainable urban environments for healthier cities.",
                    image: "/urbangreen.jpg",
                  },
                ].map((project, index) => (
                  <AnimatedSection key={index}>
                    <div className="relative">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={400}
                        height={300}
                        className="rounded-lg mb-4"
                      />
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-gray-400 mb-4">{project.description}</p>
                      <Button variant="link" className="text-green-400 p-0">
                        See Project <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </AnimatedSection>
                ))}
              </motion.div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="relative py-24">
            <Image
              src="/footer.jpg"
              alt="Forest canopy with sunlight"
              layout="fill"
              objectFit="cover"
              className="brightness-50"
            />
            <div className="absolute inset-0 backdrop-blur-md"></div>
            <motion.div
              className="relative container mx-auto px-4 text-left text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-8">
                Become a<br />
                BonCap Partner
              </h2>
              <Button className="bg-green-400 text-black hover:bg-green-500">
                Get Started
              </Button>
            </motion.div>
          </section>
        </AnimatedSection>
      </main>

      <footer className="bg-black py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Image
                src="/logo.png"
                alt="Boncap Logo"
                width={100}
                height={40}
                className="w-12 mb-4"
              />
              <p className="text-sm text-gray-400">
                &copy; 2023 BonCap. All rights reserved.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Projects</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Renewable Energy</li>
                <li>Reforestation</li>
                <li>Clean Cooking</li>
                <li>Urban Greening</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Our Partnership</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Investors</li>
                <li>Project Developers</li>
                <li>Corporate Partners</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>LinkedIn</li>
                <li>Twitter</li>
                <li>Instagram</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
