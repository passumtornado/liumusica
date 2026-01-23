// components/FeaturesGrid.tsx
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Music,
  Zap,
  FileAudio,
  Download,
} from "lucide-react";

const features = [
  {
    icon: Music,
    title: "Pitch Detection",
    description:
      "Simultaneously detect up to 2 notes with advanced harmonic analysis and frequency tracking.",
    details: [
      "Monophonic pitch estimation",
      "Polyphonic pitch estimation",
      "Chord recognition",
    ],
  },
  {
    icon: Zap,
    title: "Real-time Processing",
    description:
      "Live audio transcription with minimal latency for immediate feedback and performance monitoring.",
    details: [
      "Low latency processing",
      "Live visualization",
      "Real-time feedback",
    ],
  },
  {
    icon: FileAudio,
    title: "Multi-format Support",
    description:
      "Support for all major audio formats including WAV, MP3, FLAC, M4A, and AAC files.",
    details: ["WAV/MP3/FLAC support", "Batch processing", "Format conversion"],
  },

  {
    icon: Download,
    title: "Export Functionality",
    description:
      "Export transcriptions to multiple formats including text, MIDI, and MusicXML.",
    details: ["Text export", "MIDI generation", "Excel reports"],
  },
];

export default function FeaturesGrid({ limit }: { limit?: number }) {
  const displayFeatures = limit ? features.slice(0, limit) : features;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {displayFeatures.map((feature, index) => (
        <div
          key={index}
          className="card group hover:border-primary-200 transition-all duration-300"
        >
          <Card className="">
            <CardHeader className="flex items-center space-x-4 pb-0">
              <div className="flex-shrink-0">
                <div className="p-3 bg-primary-100 rounded-xl group-hover:bg-primary-200 transition-colors duration-200">
                  <feature.icon className="h-6 w-6 text-primary-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
            </CardHeader>
            <CardContent className="flex items-start space-x-4">
              <div className="flex-1">
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-1">
                  {feature.details.map((detail, detailIndex) => (
                    <li
                      key={detailIndex}
                      className="text-sm text-gray-500 flex items-center"
                    >
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
          {/* <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="p-3 bg-primary-100 rounded-xl group-hover:bg-primary-200 transition-colors duration-200">
                <feature.icon className="h-6 w-6 text-primary-600" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <ul className="space-y-1">
                {feature.details.map((detail, detailIndex) => (
                  <li
                    key={detailIndex}
                    className="text-sm text-gray-500 flex items-center"
                  >
                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></div>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div> */}
        </div>
      ))}
    </div>
  );
}
