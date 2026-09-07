//defines the expected props for the ProjectList component
import ProjectCard from './ProjectCard';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

interface ProjectListProps {
  projects: Project[];
}
//defines the expected structure of the projects array
export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <section className="grid gap-4 md:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </section>
  );
}