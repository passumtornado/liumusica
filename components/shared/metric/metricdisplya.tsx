// components/MetricDisplay.tsx
import React from "react";

// Define the expected structure for the metrics data
interface MetricData {
  precision: number;
  recall: number;
  fScore: number;
  tp: number;
  fp: number;
  fn: number;
}

interface Props {
  metrics: MetricData;
}

const MetricDisplay: React.FC<Props> = ({ metrics }) => {
  const metricClasses = "text-5xl font-extrabold mb-1";
  const labelClasses = "text-gray-500 uppercase tracking-widest text-sm";

  return (
    <div className="flex flex-col items-center">
      {/* 1. Primary Metrics (Precision, Recall, F-score) */}
      <div className="grid grid-cols-3 gap-6 text-center w-full">
        {/* Precision */}
        <div className="p-6 bg-green-50 rounded-xl shadow-md border-b-4 border-green-600 transition hover:shadow-xl">
          <div className={metricClasses} style={{ color: "#059669" }}>
            {(metrics.precision * 100).toFixed(1)}%
          </div>
          <div className={labelClasses}>Precision</div>
          <p className="text-xs text-gray-400 mt-2">Accuracy of Detections</p>
        </div>

        {/* Recall */}
        <div className="p-6 bg-yellow-50 rounded-xl shadow-md border-b-4 border-yellow-600 transition hover:shadow-xl">
          <div className={metricClasses} style={{ color: "#d97706" }}>
            {(metrics.recall * 100).toFixed(1)}%
          </div>
          <div className={labelClasses}>Recall</div>
          <p className="text-xs text-gray-400 mt-2">
            Completeness of Detections
          </p>
        </div>

        {/* F-score */}
        <div
          className="p-6 bg-blue-50 rounded-xl shadow-md border-b-4 border-blue-600 transition hover:shadow-xl"
        >
          <div className={metricClasses} style={{ color: "#2563eb" }}>
            {metrics.fScore.toFixed(3)}
          </div>
          <div className={labelClasses}>F-score (F1)</div>
          <p className="text-xs text-gray-400 mt-2">
            Overall Performance Balance
          </p>
        </div>
      </div>

      {/* 2. Underlying Counts (TP, FP, FN) */}
      <div className="mt-8 p-6 bg-white rounded-xl shadow-lg w-full max-w-lg">
        <h4 className="text-xl font-bold text-gray-800 mb-4 text-center">
          Underlying Counts
        </h4>
        <div className="flex justify-around text-center">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-green-700">
              {metrics.tp}
            </span>
            <span className="text-sm text-gray-600 font-medium">
              TP (True Positives)
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-red-700">
              {metrics.fp}
            </span>
            <span className="text-sm text-gray-600 font-medium">
              FP (False Positives)
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-purple-700">
              {metrics.fn}
            </span>
            <span className="text-sm text-gray-600 font-medium">
              FN (False Negatives)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricDisplay;
