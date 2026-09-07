import SkillCard from "@/components/SkillCard";

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg text-gray-700">
        I am currently a student at Brigham Young University-Idaho, pursuing a degree in Applied Technology. I have a passion for creating user-friendly and visually appealing web and software applications. My goal is to continuously improve my skills and contribute to the field of web and software development.
      </p>

      <SkillCard
        title="Frontend Development"
        description="I have experience with HTML, CSS, JavaScript, and various frontend frameworks like React and Next.js. I enjoy creating responsive and interactive user interfaces."
      />
      <SkillCard
        title="Backend Development"
        description="I have experience with Node.js, Express, PostgreSQL, and REST APIs. I enjoy building scalable and efficient server-side applications."
      />
    </main>
  );
}
