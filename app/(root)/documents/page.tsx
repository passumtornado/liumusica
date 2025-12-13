"use client";

import React from "react";
import Image from "next/image";
import { Download } from "lucide-react";

const DOCS = [
  {
    name: "System Requirements",
    file: "system-requirements.pdf",
    desc: "Hardware and software requirements for installing and running the system.",
  },
  {
    name: "Design Specification",
    file: "design-specification.pdf",
    desc: "High-level and detailed design decisions, architecture diagrams and interfaces.",
  },
  {
    name: "Technical Documentation",
    file: "technical-documentation.pdf",
    desc: "Algorithms, signal processing details and implementation notes.",
  },
  {
    name: "User Manual",
    file: "user-manual.pdf",
    desc: "Step-by-step guide for end users and walkthroughs of the GUI.",
  },
  {
    name: "Poster",
    file: "poster.pdf",
    desc: "Project poster summarising goals, methods and results.",
  },
];

export default function Documents() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Banner */}
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
            Download Project Documents
          </h1>
          <p className="text-sm text-white/90 mt-2 max-w-xl">
            Find system requirements, design docs, technical notes, user manual
            and the project poster.
          </p>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 pb-12 flex-1">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold">Available Documents</h2>
            <p className="text-sm text-gray-600 mt-1">
              Click the download icon to download each document.
            </p>
          </div>

          <div className="p-4 overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="text-left text-sm text-slate-600">
                  <th className="py-3 px-4">Document</th>
                  <th className="py-3 px-4">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {DOCS.map((doc) => (
                  <tr key={doc.file} className="hover:bg-gray-50">
                    <td className="py-4 px-4 align-middle">
                      <div className="flex items-center gap-3">
                        <span className="font-medium">{doc.name}</span>
                        <a
                          href={`/assets/docs/${doc.file}`}
                          download
                          className="ml-auto inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 transition"
                          aria-label={`Download ${doc.name}`}
                        >
                          <Download size={16} />
                          <span className="hidden sm:inline">Download</span>
                        </a>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-700">
                      {doc.desc}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Small screen card fallback */}
            <div className="mt-6 grid gap-4 md:hidden">
              {DOCS.map((doc) => (
                <div
                  key={doc.file}
                  className="bg-gray-50 p-4 rounded-md shadow-sm"
                >
                  <div className="flex items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium">{doc.name}</h3>
                        <a
                          href={`/assets/docs/${doc.file}`}
                          download
                          className="ml-auto inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 transition"
                          aria-label={`Download ${doc.name}`}
                        >
                          <Download size={16} />
                          <span>Download</span>
                        </a>
                      </div>
                      <p className="text-sm text-gray-700 mt-2">{doc.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
