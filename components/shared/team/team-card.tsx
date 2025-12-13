// components/TeamMemberCard.tsx
import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
interface MemberProps {
  name: string;
  role: string;
  email: string;
  linkedinUrl: string;
  githubUrl: string;
  imageUrl: string;
}

export default function TeamMemberCard({
  name,
  role,
  email,
  linkedinUrl,
  githubUrl,
  imageUrl,
}: MemberProps) {
  return (
    <div className="relative group bg-white rounded-xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden">
      {/* Card Content */}

      <Card>
        <CardHeader className="flex flex-col p-0 justify-center items-center">
          <Image
            src={imageUrl}
            alt={`${name}'s profile picture`}
            width={250}
            height={250}
            priority={true}
          />
        </CardHeader>
        <CardContent className="flex flex-col items-center text-center space-y-1 p-4">
          <h2 className="text-lg font-bold text-slate-900 mb-1">{name}</h2>
          <p className="text-md font-semibold text-slate-500">{role}</p>
          <p className="text-sm text-indigo-600 mt-3">{email}</p>
        </CardContent>
      </Card>
      {/*       
      <div className="p-6">
        <div className="text-3xl mb-4">👤</div>
        <h2 className="text-2xl font-bold text-blue-800 mb-1">{name}</h2>
        <p className="text-md font-semibold text-gray-700">{role}</p>
        <p className="text-sm text-indigo-600 mt-3">{email}</p>
      </div> */}

      {/* Overlay for Social Links with transition animation */}
      <div
        className="absolute inset-0 bg-slate-900/90 flex flex-col items-center justify-center 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                      transform translate-y-full group-hover:translate-y-0 cursor-pointer"
      >
        <h3 className="text-white text-xl font-bold mb-4">Connect</h3>
        <div className="flex space-x-4">
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-slate-700 p-3 rounded-full hover:bg-gray-200 transition"
            aria-label={`LinkedIn profile for ${name}`}
          >
            {/* Placeholder for LinkedIn Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-200 transition"
            aria-label={`GitHub profile for ${name}`}
          >
            {/* Placeholder for GitHub Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3-0.5 6-1.5 6-6.5a5.4 5.4 0 0 0-1.2-3.8 5 5 0 0 0 0-4.8c0.2-1.2 0.7-3 0.7-3S17 2 16 3.5c-1.3-0.4-2.7-0.6-4-0.6s-2.7 0.2-4 0.6c-1 1.5-1 1.5-1 1.5S7 6.2 7 7.2c0 2.2-0.5 4-1.2 4.8-1 0.8-1.8 1.8-1.8 2.8 0 1 0.8 2 1.8 2.8C5.5 18 6 18.2 6.5 18.5a4.8 4.8 0 0 0 1 3.5v4" />
              <path d="M12 2v-2" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
