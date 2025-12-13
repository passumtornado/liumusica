// components/project/ResultsSection.tsx
import React from "react";
import MetricDisplay from "@/components/shared/metric/metricdisplya";

// Dummy data for presentation
const demoMetrics = {
  precision: 0.89,
  recall: 0.85,
  fScore: 0.87,
  tp: 170,
  fp: 21,
  fn: 30,
};

export default function ResultsSection() {
  return (
    <section id="results" className="mb-16 pt-8 border-b border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        4. Results and Evaluation Metrics
      </h2>
      <p className="text-lg text-gray-700 mb-6">
        The system's performance is rigorously assessed against a **Ground Truth
        (GT)** MIDI file using standard Music Information Retrieval (MIR)
        metrics.
      </p>

      <h3 className="text-xl font-semibold text-green-700 mb-4">
        Core Metrics: F1-score, Precision, and Recall
      </h3>
      <p className="text-md text-gray-700 mb-4">
        These metrics provide a balanced measure of transcription quality by
        quantifying True Positives (TP), False Positives (FP), and False
        Negatives (FN).
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-500">
            <h4 className="font-bold text-xl text-green-700">Precision</h4>
            <p className="text-gray-700 text-sm">
              Measures the **accuracy** of the notes detected. (TP / (TP + FP))
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-yellow-500">
            <h4 className="font-bold text-xl text-yellow-700">Recall</h4>
            <p className="text-gray-700 text-sm">
              Measures the **completeness** in finding all actual notes. (TP /
              (TP + FN))
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500">
            <h4 className="font-bold text-xl text-blue-700">F1-score</h4>
            <p className="text-gray-700 text-sm">
              The harmonic mean of Precision and Recall, providing the overall
              balanced score.
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-2xl font-semibold text-gray-800 mb-3 text-center">
            Final System Performance
          </h4>
          <MetricDisplay metrics={demoMetrics} />
        </div>
      </div>
    </section>
  );
}
