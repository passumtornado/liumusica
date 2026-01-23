import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

export default function TranscriptionResults() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto p-6"
      id="results"
    >
      <h1 className="text-3xl font-bold mb-4">
        Automatic Music Transcription – Results Summary
      </h1>

      <p className="text-base text-muted-foreground mb-6">
        This section presents the results of the automatic music transcription
        system applied to audio recorded from a Casio keyboard. The system
        performs onset detection, pitch estimation, note classification, and
        confidence analysis to convert raw audio into symbolic musical
        information.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">Key Observations</h2>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>
                A clear note onset is detected at approximately 1.6 seconds,
                followed by a natural decay envelope typical of a keyboard
                instrument.
              </li>
              <li>
                Spectral and Constant-Q analyses consistently identify a stable
                fundamental frequency around 440 Hz, corresponding to the note
                A4.
              </li>
              <li>
                The pitch contour remains stable throughout the note duration,
                indicating accurate monophonic pitch tracking without octave or
                semitone errors.
              </li>
              <li>
                The detected note duration exceeds four seconds, confirming
                correct note segmentation and sustained-note handling.
              </li>
              <li>
                Detection confidence is extremely high (near 100%), reflecting
                robust performance under clean recording conditions.
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">
              System Interpretation
            </h2>
            <p className="text-sm leading-relaxed">
              Overall, the results demonstrate that the transcription pipeline
              performs reliably for monophonic keyboard input. The agreement
              across waveform, spectrogram, YIN and Constant-Q, and pitch-contour views
              confirms both temporal and spectral accuracy. This experiment
              provides a strong baseline for generating ground-truth MIDI data
              and for extending the system toward more complex scenarios such as
              note sequences and polyphonic chords.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Visualization Output</h2>
        <p className="text-sm text-muted-foreground mb-4">
          The figures below summarize the waveform, time–frequency
          representations, pitch confidence, statistical note analysis, and
          performance metrics produced by the transcription system.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="rounded-2xl shadow-sm">
            <CardContent className="p-4">
              <img
                src="/spectrogam_a4note.png"
                alt="Casio keyboard audio transcription analysis plots"
                className="w-full rounded-xl"
              />
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-sm">
            <CardContent className="p-4">
              <img
                src="/waveforn_a4note.png"
                alt="Transcription system performance metrics and results"
                className="w-full rounded-xl"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.section>
  );
}
