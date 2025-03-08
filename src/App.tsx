import { lazy, Suspense } from 'react'
import Hero from './components/Hero'
import VideoSection from './components/VideoSection'
import ProblemSolution from './components/ProblemSolution'
import NfcDemo from './components/NfcDemo'
import FeaturesGrid from './components/FeaturesGrid'
import TeamSection from './components/TeamSection'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const MobileAppDemo = lazy(() => import('./components/MobileAppDemo'))

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className='w-full overflow-hidden'>
        <Hero />
        <VideoSection />
        <ProblemSolution />
        <NfcDemo />
        <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
          <MobileAppDemo />
        </Suspense>
        <FeaturesGrid />
        <TeamSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
