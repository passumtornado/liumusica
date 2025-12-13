// app/project/page.tsx
"use client"; // Required for scroll event listeners and state management

import React, { useRef, useState, useEffect } from "react";
import SignalProcessingSection from "@/components/shared/project/SignalProcessingSection";
import AlgorithmSection from "@/components/shared/project/Systemoverview";
import ResultsSection from "@/components/shared/project/ResultsSection";
import CodebaseSection from "@/components/shared/project/CodebaseSection";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import SystemOverview from "@/components/shared/project/Systemoverview";

// Define the navigation items and corresponding section IDs
const NAV_ITEMS = [
  { name: "System Overview", id: "system-description" },
  { name: "Processing Engine", id: "signal-processing" },
  { name: "Results", id: "results" },
  { name: "Codebase", id: "codebase" },
];

// Helper function to handle smooth scrolling
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    // Scroll to section with offset to account for fixed header
    window.scrollTo({
      top: element.offsetTop - 80,
      behavior: "smooth",
    });
  }
};

export default function ProjectPage() {
  const [activeSection, setActiveSection] = useState(NAV_ITEMS[0].id);
  const sectionsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    // Collect all section elements for observation
    sectionsRef.current = NAV_ITEMS.map((item) =>
      document.getElementById(item.id)
    ) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Highlight the section when it enters the viewport from the top
          if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-30% 0px -70% 0px", // Adjusted margin to trigger highlight in the upper third of the viewport
        threshold: 0.2,
      }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main className="container mx-auto px-4 py-12 flex-1">
        <div className="relative w-full h-64 md:h-96 mb-12 rounded-lg overflow-hidden shadow-md">
          <Image
            src="/assets/banner.jpg"
            alt="Project Banner"
            fill
            className="object-cover"
            priority={true}
          />
          <div className="absolute inset-0 bg-black/45 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              The CDIO Project in Communication Systems:
              <span className="block">Music Transcrition</span>
            </h1>
            <Button
              variant="default"
              onClick={() => scrollToSection("input-handling")}
            >
              Project Details
            </Button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left Sidebar Navigation */}
          <nav className="md:w-1/4 sticky top-24 md:block hidden">
            <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">
              Project Sections
            </h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    aria-current={
                      activeSection === item.id ? "true" : undefined
                    }
                    className={`block w-full text-left py-2 px-4 rounded-lg transition-all duration-200 
                      ${
                        activeSection === item.id
                          ? "text-blue-600 font-semibold"
                          : "text-gray-700 hover:text-blue-600 hover:bg-gray-200"
                      } focus:outline-none focus:ring-2 focus:ring-blue-300`}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Main Content Area */}
          <div className="md:w-3/4">
            <div className="flex flex-col flex-start space-y-4">
              <h2 className="text-3xl font-extrabold ">
                Introduction
              </h2>
              <p>
                The Music Transcription project develops a system that converts
                keyboard performances into a sequence of notes or a note sheet.
                Using a Casio CTK-3500 keyboard and a Streamplify MIC ARM
                microphone, along with the appropriate USB cabling, the system
                will capture audio from live playing or pre-recorded input. It
                must detect the onset and offset of each note, identify the
                fundamental frequency and harmonics, estimate the note duration,
                and map these measurements to the correct pitch. The system will
                support both microphone-based recording and MIDI input; a MIDI
                file obtained via the cable can serve as a reference signal.
                Signal-processing techniques and machine-learning algorithms
                will be combined to implement pitch detection, onset/offset
                detection, and automatic transcription, producing an output such
                as “C4 C4 A5” or a visual note sheet.
              </p>

              <SystemOverview />
              <SignalProcessingSection />
            </div>
            
          </div>
        </div>
      </main>
    </div>
  );
}
