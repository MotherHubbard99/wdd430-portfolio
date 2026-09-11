//defines the expected props for the SkillCard component
interface SkillCardProps {
  title: string;
  description: string;
}
        
export default function SkillCard({title, description}: SkillCardProps) {
  return (
    <article className="p-4 m-4 border-l-4 border-[#C67FAE] bg-[#e8f2d9] rounded">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-white-700 mb-3">{description}</p>
    </article>
  );
}   
     