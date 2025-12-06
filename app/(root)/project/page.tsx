// app/features/page.tsx

// import MetricDisplay from '@/components/MetricDisplay'; 
import MetricDisplay from '@/components/shared/metric/metricdisplya';

// Dummy data for presentation
const demoMetrics = {
  precision: 0.89,
  recall: 0.85,
  fScore: 0.87,
  tp: 170,
  fp: 21,
  fn: 30,
};

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      
      <main className="container mx-auto px-4 py-12">
        <h2 className="max-w-20 text-3xl font-extrabold text-gray-800 mb-4 text-center">System Features: Audio Processing & Evaluation</h2>
        <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-12">
          A deep technical breakdown of the architecture, algorithms, and validation methods that define the **LIU MuSiCa** transcription system.
        </p>

       
        
      </main>
      
    </div>
  );
}