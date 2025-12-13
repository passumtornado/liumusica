import React from "react";
import Image from "next/image";

export default function SignalProcessingSection() {
  return (
    <section id="signal-processing" className="py-12">
      <div className="container mx-auto">
        <h3 className="text-sm text-slate-600 tracking-widest mb-4">
          P R O C E S S I N G &nbsp; P I P E L I N E
        </h3>

        <p className="mb-4 text-lg font-medium">
          The pipeline operates on a one–dimensional mono waveform y[n] sampled
          at fs = 40 960 Hz:
        </p>

        <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4 mb-6">
          <li>Onset strength computation using Librosa’s onset envelope.</li>
          <li>Peak picking with tuned parameters to determine onset times.</li>
          <li>
            Offset estimation from the next onset or end of file, with a minimum
            note duration.
          </li>
          <li>Pitch estimation on short, high-energy segments using YIN.</li>
          <li>Note mapping from frequency (Hz) to MIDI and note name.</li>
          <li>
            Event post-processing (removal of very short notes and merging of
            nearly contiguous identical notes).
          </li>
        </ol>

        <div className="w-full mt-6">
          <div className="w-full h-auto rounded-lg overflow-hidden bg-gray-50 flex items-center justify-center">
            <Image
              src="/assets/processingflow.jpg"
              alt="Processing flow diagram showing onset detection, peak picking, pitch estimation, mapping and post-processing"
              width={1200}
              height={700}
              className="object-cover rounded-md shadow-sm"
              priority
            />
          </div>
          <p className="text-sm text-gray-500 mt-3 text-center">
            Figure: Processing flow — onset detection, peak picking, pitch
            estimation, mapping and event post-processing.
          </p>
        </div>
      </div>
    </section>
  );
}
