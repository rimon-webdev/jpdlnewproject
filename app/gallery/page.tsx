"use client";

import Image from "next/image";
import { residentialProjects, commercialProjects } from "../data/projects"; // make sure the path is correct

export default function GalleryPage() {
  // Combine all projects into one array
  const allProjects = [...residentialProjects, ...commercialProjects];

  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center mb-12">Recent Projects</h1>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allProjects.map((project) => (
            <div
              key={project.id + project.title} // unique key
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              {/* Image */}
              <div className="relative w-full h-60 flex items-center justify-center overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* Project Info */}
              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg">{project.title}</h3>
                <p className="text-gray-500 text-sm">{project.location}</p>
                <p className="text-gray-400 text-sm mt-1">{project.size}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}