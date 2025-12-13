// components/project/CodebaseSection.tsx
import React from "react";

export default function CodebaseSection() {
  return (
    <section id="codebase" className="mb-16 pt-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        5. Codebase: Key Implementation Snippets
      </h2>
      <p className="text-lg text-gray-700 mb-6">
        The system is primarily implemented in Python, leveraging the{" "}
        <code className="bg-gray-200 p-1 rounded">librosa</code> library for
        signal processing and{" "}
        <code className="bg-gray-200 p-1 rounded">PyQt</code> for the graphical
        user interface.
      </p>

      <h3 className="text-xl font-semibold text-purple-700 mb-4">
        a) CQT Feature Extraction
      </h3>
      <p className="text-md text-gray-700 mb-2">
        Generating the Constant-Q Transform Spectrogram for polyphonic analysis.
      </p>
      <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto text-sm">
        <code>{`
import librosa
import numpy as np

# Load audio signal
y, sr = librosa.load(audio_path, sr=40960)

# Apply Constant-Q Transform
# n_bins: total number of frequency bins (e.g., 84 for 7 octaves)
# bins_per_octave: determines frequency resolution (12 for semitones)
CQT = librosa.cqt(y, sr=sr, fmin=librosa.note_to_hz('C1'),
                  n_bins=84, bins_per_octave=12)

# Convert to magnitude (absolute value)
CQT_magnitude = np.abs(CQT)

# Log-scale magnitude for visualization and pitch detection
CQT_features = librosa.power_to_db(CQT_magnitude**2, ref=np.max)
        `}</code>
      </pre>

      <h3 className="text-xl font-semibold text-purple-700 mt-8 mb-4">
        b) pYIN Pitch Tracking
      </h3>
      <p className="text-md text-gray-700 mb-2">
        Using librosa's implementation of pYIN for monophonic pitch estimation.
      </p>
      <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto text-sm">
        <code>{`
# Use pYIN to track pitch (f0)
f0, voiced_flag, voiced_prob = librosa.pyin(
    y,
    fmin=librosa.note_to_hz('C2'),
    fmax=librosa.note_to_hz('C8'),
    sr=sr,
    frame_length=2048 # large window for better F0 estimation
)

# Convert tracked frequency to MIDI note numbers
midi_notes = librosa.hz_to_midi(f0)
        `}</code>
      </pre>

      <h3 className="text-xl font-semibold text-purple-700 mt-8 mb-4">
        c) Performance Evaluation Logic
      </h3>
      <p className="text-md text-gray-700 mb-2">
        Conceptual step for matching detected notes against ground truth notes.
      </p>
      <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto text-sm">
        <code>{`
# Pseudo-code for evaluation
def evaluate_transcription(detected_notes, ground_truth_notes, tolerance):
    TP, FP, FN = 0, 0, 0
    
    # 1. Compare each detected note against GT
    for det_note in detected_notes:
        match_found = False
        for gt_note in ground_truth_notes:
            if (abs(det_note.pitch - gt_note.pitch) <= tolerance) and \\
               (temporal_overlap(det_note, gt_note) > 0.5):
                TP += 1
                match_found = True
                break # Mark GT note as matched
        if not match_found:
            FP += 1

    # 2. Count unmatched GT notes as False Negatives
    # (Requires tracking which GT notes were matched in step 1)
    FN = len(ground_truth_notes) - TP 
    
    precision = TP / (TP + FP) if (TP + FP) > 0 else 0
    recall = TP / (TP + FN) if (TP + FN) > 0 else 0
    f1_score = 2 * (precision * recall) / (precision + recall) if (precision + recall) > 0 else 0
    
    return precision, recall, f1_score
        `}</code>
      </pre>
    </section>
  );
}
