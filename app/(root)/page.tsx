import FeaturesGrid from '@/components/featuresGrid'
import Hero from '@/components/shared/hero/herosection'
import React from 'react'

const Homepage = () => {
  return (
    <div className="wrapper">
      <Hero />
      {/* Features Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Musicians & Developers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From real-time polyphonic detection to comprehensive audio analysis,
            our transcription system provides professional-grade tools for all
            your music processing needs.
          </p>
        </div>
        <FeaturesGrid limit={4} />
      </section>
    </div>
  );
}

export default Homepage
