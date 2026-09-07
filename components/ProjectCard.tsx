//defines the expected props for the ProjectCard component
interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}
        
export default function ProjectCard({title, description, technologies, link}: ProjectCardProps) {
  return (
    <article className="p-4 border-l-8 border-[#C67FAE] bg-[#e8f2d9] rounded">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-white-700 mb-3">{description}</p>
      <p className="text-sm text-white-600">
        <strong>Technologies:</strong> {technologies.join(', ')}
      </p>
      {link && (
        <p className="mt-2">
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View Project</a>
        </p>
      )}
    </article>
  );
}