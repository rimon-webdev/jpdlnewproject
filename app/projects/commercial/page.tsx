import ProjectGrid from "@/components/projects/ProjectGrid";
import { commercialProjects } from "@/lib/projects";

export default function CommercialPage() {
  return (
    <ProjectGrid
      title="Commercial Projects"
      subtitle="Modern spaces designed for business excellence"
      projects={commercialProjects}
    />
  );
}
