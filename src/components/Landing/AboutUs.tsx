"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="relative h-[600px] flex items-center justify-center">
          <Image
            src="/hero.jpg"
            alt="Sustainable project in action"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-transparent to-zinc-900 opacity-75"></div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center z-10 text-white"
          >
            <h2 className="text-6xl font-extrabold mb-6">Net Zero Solutions</h2>
            <p className="text-2xl max-w-2xl mx-auto">
              Leading the global transition towards sustainability with
              innovative Net Zero strategies and cutting-edge technologies.
            </p>
          </motion.div>
        </div>

        {/* Split Screen Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-4xl font-bold text-zinc-900 mb-6">
              Our Mission
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              To accelerate the adoption of sustainable practices by providing
              world-class Net Zero solutions that empower organizations to
              reduce emissions, offset carbon, and contribute positively to the
              environment. We transform sustainability goals into measurable
              outcomes, ensuring a healthier planet for future generations.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button    className="bg-green-500 text-white hover:bg-green-600 font-semibold text-lg px-8 py-4 rounded-lg">
                Discover Opportunities <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-xl"
          >
            <Image
              src="/sustainable-project.jpg"
              alt="Sustainable project in action"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-xl"
            />
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <h3 className="text-4xl font-bold mb-12 text-zinc-900">
              Our Impact
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  title: "Projects Funded",
                  value: "200+",
                  icon: "📊",
                },
                {
                  title: "CO₂ Reduced",
                  value: "1M+ tons",
                  icon: "🌍",
                },
                {
                  title: "Communities Impacted",
                  value: "500+",
                  icon: "🤝",
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="bg-white border border-gray-200 p-8 rounded-lg shadow-lg"
                >
                  <div className="text-5xl mb-4">{stat.icon}</div>
                  <h4 className="text-4xl font-extrabold text-green-500 mb-2">
                    {stat.value}
                  </h4>
                  <p className="text-gray-600">{stat.title}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
