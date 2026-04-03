import Image from "next/image";

export default function ProjectCard({ project }: any) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white shadow-sm">
      <Image
        src={project.image}
        alt={project.title}
        width={600}
        height={750}
        className="h-[420px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/60 opacity-0 transition group-hover:opacity-100" />

      {/* Info */}
      <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
        <p className="text-xs">{project.location}</p>
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="text-sm opacity-90">{project.size}</p>
      </div>
    </div>
  );
}
