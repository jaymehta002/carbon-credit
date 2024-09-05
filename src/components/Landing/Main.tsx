import React from "react";
import Image from "next/image";
import { ArrowRight, Menu } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import AboutUs from "./AboutUs";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

export default function Component() {
  return (
    <div className="bg-black text-white min-h-screen">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Image
          src="/placeholder.svg"
          alt="Boncap Logo"
          width={100}
          height={40}
          className="w-24"
        />
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="hover:text-green-400">
            Our Proposition
          </a>
          <a href="#" className="hover:text-green-400">
            Investors
          </a>
          <a href="#" className="hover:text-green-400">
            Solutions
          </a>
          <a href="#" className="hover:text-green-400">
            About Us
          </a>
          <a href="#" className="hover:text-green-400">
            Contact
          </a>
          <SignedIn>
          <Link className={buttonVariants({ variant: "default" })} href={"/dashboard"}>Dashboard</Link>  
          </SignedIn>
          <SignedOut>
          <Link className={buttonVariants({ variant: "default" })} href={"sign-up"}>Log In</Link>
          </SignedOut>
        </nav>

        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </header>

      <main>
        <section className="relative h-screen">
          <Image
            src="/hero.jpg"
            alt="Aerial view of a forest and river"
            layout="fill"
            objectFit="cover"
            className="brightness-50"
          />
          <div className="absolute inset-0 flex flex-col justify-center container mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Driving <span className="text-green-400">Sustainable</span>
              <br />
              Change
            </h1>
            <p className="text-xl mb-8 max-w-2xl">
              We are a pioneering catalyst driving sustainable change. Our
              mission is to empower developers of high-quality carbon projects,
              creating a positive ripple effect.
            </p>
            <Button className="bg-green-400 text-black hover:bg-green-500 w-fit">
              Get Started
            </Button>
          </div>
        </section>

        <AboutUs />

        <section className="bg-black py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div>
                <div className="mb-8">
                  <h3 className="text-4xl font-bold mb-2">$45M</h3>
                  <p className="text-green-400">Carbon credits</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold mb-2">5.2M</h3>
                  <p className="text-green-400">Trees planted</p>
                </div>
              </div>
              <div className="relative h-64 md:h-auto">
                <Image
                  src="/hero.jpg"
                  alt="Aerial view of coastline"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-8">
                Empower Carbon Pioneers
              </h2>
              <ul className="space-y-4 text-lg">
                <li>Global Carbon Mitigation</li>
                <li>Eco-Conscious Reforestation</li>
                <li>Clean Energy Solutions</li>
                <li>Environmental Empowerment</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-zinc-900 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-6xl md:text-8xl font-bold mb-16">
              Global <span className="text-green-400">Impact</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <p className="text-xl mb-8">
                  With 58 million metric tons of carbon mitigated, we are making
                  a significant contribution to combating climate change on a
                  global scale. Our commitment extends to the environment with
                  5.2 million trees planted to date.
                </p>
                <Button className="bg-green-400 text-black hover:bg-green-500">
                  Get Started
                </Button>
              </div>
              <div className="relative h-64 md:h-auto">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Hand holding a small plant"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-black py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Renewable Energy Ventures",
                  description:
                    "Investing in clean energy solutions for a sustainable future.",
                  image: "/renewable.jpg",
                },
                {
                  title: "Rainforest Preservation Project",
                  description:
                    "Protecting vital ecosystems and biodiversity hotspots.",
                  image: "/rainforest.jpg",
                },
                {
                  title: "Suatainable Transportation",
                  description:
                    "Implementing efficient transportation methods to reduce emissions.",
                  image: "/transportation.jpg",
                },
                {
                  title: "Urban Green Spaces",
                  description:
                    "Creating sustainable urban environments for healthier cities.",
                  image: "/urbangreen.jpg",
                },
              ].map((project, index) => (
                <div key={index} className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <Button variant="link" className="text-green-400 p-0">
                    See Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-24">
          {/* Background Image */}
          <Image
            src="/footer.jpg"
            alt="Forest canopy with sunlight"
            layout="fill"
            objectFit="cover"
            className="brightness-50"
          />

          {/* Blur Layer */}
          <div className="absolute inset-0 backdrop-blur-md"></div>

          {/* Content */}
          <div className="relative container mx-auto px-4 text-left text-white">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Become a<br />
              BonCap Partner
            </h2>
            <Button className="bg-green-400 text-black hover:bg-green-500">
              Get Started
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-zinc-900 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Image
                src="/placeholder.svg"
                alt="Boncap Logo"
                width={100}
                height={40}
                className="w-24 mb-4"
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
