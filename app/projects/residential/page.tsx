import ProjectGrid from "@/components/projects/ProjectGrid";
import { residentialProjects } from "@/lib/projects";

export default function ResidentialPage() {
  return (
    <ProjectGrid
      title="Residential Projects"
      subtitle="Explore our premium residential developments"
      projects={residentialProjects}
    />
  );
}
