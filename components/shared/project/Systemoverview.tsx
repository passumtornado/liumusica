// components/project/AlgorithmSection.tsx
import React from "react";
import Image from "next/image";

export default function SystemOverview() {
  return (
    <section id="system-description" className="py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1  gap-8 items-center">
          {/* Text column */}
          <div>
            <h3 className="text-sm text-slate-600 tracking-widest mb-4">
              S Y S T E M &nbsp; D E S C R I P T I O N
            </h3>

            <p className="text-lg font-medium mb-4">
              The Music Transcription System automates the conversion of
              acoustic audio into structured musical information, capturing
              pitch, onset time, duration and note identity for each detected
              event. It supports both file–based and real–time inputs, applies
              preprocessing, onset/offset detection and pitch estimation, and
              stores the resulting transcription together with metadata.
            </p>

            <ul className="list-disc ml-5 space-y-2 mb-4 text-gray-700">
              <li>
                <strong>Input sources:</strong> file upload (WAV, MP3, FLAC,
                OGG) and real–time recording via microphone or USB–MIDI
                keyboard.
              </li>
              <li>
                <strong>Preprocessing:</strong> peak normalization and high–pass
                filtering to remove low-frequency rumble.
              </li>
              <li>
                <strong>Core engine:</strong> onset detection based on Librosa’s
                onset strength envelope and tuned peak picking, and pitch
                detection based on the YIN algorithm applied to short,
                high-energy segments.
              </li>
              <li>
                <strong>Output:</strong> waveform and spectrogram visualisation,
                note listings, and TXT exports; all transcriptions are stored in
                an SQLite database for later retrieval.
              </li>
              <li>
                <strong>GUI:</strong> a tabbed PyQt5 interface providing modes
                for file processing, real–time recording, results inspection and
                history management.
              </li>
            </ul>

            <p className="text-sm text-gray-600">
              The system targets 61–key keyboard input (C2–C7) and uses a fixed
              sampling rate of 40 960 Hz to provide sufficient frequency
              resolution for piano fundamentals and overtones.
            </p>
          </div>

          {/* Image column */}
          <div className="w-full h-72 md:h-96 rounded-lg overflow-hidden bg-gray-50 flex items-center justify-center">
            <Image
              src="/assets/designSystem.jpg"
              alt="System diagram showing inputs, preprocessing, core engine and outputs"
              width={900}
              height={600}
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
