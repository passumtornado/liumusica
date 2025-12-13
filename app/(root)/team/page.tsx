// app/team/page.tsx
import TeamMemberCard from "@/components/shared/team/team-card";
import Image from "next/image";
// Include placeholder social links for the new component
const teamMembers = [
  {
    name: "Ahmed Fawaizat Oyindamola",
    role: "Team Lead",
    email: "fawah595@student.liu.se",
    linkedin: "https://linkedin.com/in/ahmed-fawaizat",
    github: "https://github.com/ahmed-f",
    imageUrl: "/team/fawaizat_1.jpg",
  },
  {
    name: "Abdul Gaffar Abubakar Passum",
    role: "Design Lead",
    email: "abuab954@student.liu.se",
    linkedin: "https://linkedin.com/in/abdul-passum",
    github: "https://github.com/abdul-p",
    imageUrl: "/team/gaf.jpg",
  },
  {
    name: "Varun Gurupurandar",
    role: "Test Lead",
    email: "vargu125@student.liu.se",
    linkedin: "https://linkedin.com/in/varun-g",
    github: "https://github.com/varun-g",
    imageUrl: "/team/varun.jpg",
  },
  {
    name: "Mehran Mamivand",
    role: "Documentation Lead",
    email: "mehma172@student.liu.se",
    linkedin: "https://linkedin.com/in/mehran-m",
    github: "https://github.com/mehran-m",
    imageUrl: "/team/mehran.jpg",
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="relative w-full h-56 md:h-72 mb-8">
        <Image
          src="/assets/banner.jpg"
          alt="Download Project Documents"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/45 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white">
            Meet the Team
          </h1>
          <p className="text-sm text-white/90 mt-2 max-w-xl">
            The team behind the LIU MuSiCa Transcription System.
          </p>
        </div>
      </header>
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <TeamMemberCard
              key={member.email}
              name={member.name}
              role={member.role}
              email={member.email}
              linkedinUrl={member.linkedin}
              githubUrl={member.github}
              imageUrl={member.imageUrl}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
