// app/team/page.tsx
import TeamMemberCard from "@/components/shared/team/team-card";

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

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-10 text-center">
        Meet the Team
        </h1>
        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
          The team behind the LIU MuSiCa Transcription System. We are a group of dedicated
          individuals passionate about music and technology, working together to create an
          innovative solution for music transcription.
        </p>

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
