import ProjectCard from "./ProjectCard";

export default function ProjectGrid({ title, subtitle, projects }: any) {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-semibold">{title}</h2>
          <p className="mt-2 text-gray-500">{subtitle}</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((item: any) => (
            <ProjectCard key={item.id} project={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
