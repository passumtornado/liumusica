// components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Play, Download, BookOpen } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-secondary-50 py-6 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Convert Audio to{" "}
              <span className="gradient-text">Musical Notation</span>
            </h1>
            <p className="text-md text-gray-600 mb-8 max-w-2xl">
              This project accurately converts polyphonic piano audio into
              structured note events. Leveraging state-of-the-art algorithms
              like pYIN for monophonic pitch tracking and Constant-Q Transform
              (CQT) for chord detection, the system provides MIDI-compliant
              output validated by professional-grade Precision, Recall, and
              F-score metrics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/download"
                className="btn-primary flex items-center justify-center space-x-2"
              >
                <Download className="h-5 w-5" />
                <span>Get Started</span>
              </Link>
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              {/* Code Preview */}
              <div className="bg-gray-900 rounded-lg p-6 font-mono text-sm">
                <div className="text-gray-400 mb-4">
                  <span className="text-purple-400">def</span>{" "}
                  <span className="text-green-400">transcribe_audio</span>(
                  <span className="text-yellow-300">audio_data</span>):
                </div>
                <div className="text-gray-400 ml-4 mb-2">
                  <span className="text-blue-400"># Multi-pitch detection</span>
                </div>
                <div className="text-gray-400 ml-4 mb-2">
                  <span className="text-purple-400">pitches</span> =
                  <span className="text-green-400">
                    {" "}
                    detect_multiple_pitches
                  </span>
                  (<span className="text-yellow-300">audio_data</span>)
                </div>
                <div className="text-gray-400 ml-4">
                  <span className="text-purple-400">return</span>{" "}
                  <span className="text-green-400">convert_to_notes</span>(
                  <span className="text-yellow-300">pitches</span>)
                </div>
              </div>

              {/* Feature Tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {[
                  "Polyphonic",
                  "Real-time",
                  "100% Accuracy",
                  "Multi-format",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -left-4 bg-primary-500 text-white px-3 py-2 rounded-lg shadow-lg"
            >
              🎹 Piano Support
            </motion.div>
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-4 -right-4 bg-secondary-500 text-white px-3 py-2 rounded-lg shadow-lg"
            >
              🎸 Guitar Ready
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
