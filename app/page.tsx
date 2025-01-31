import type { NextPage } from 'next'
import WhatsNew from './components/WhatsNew'
import Hero from './components/Hero'
import FAQ from './components/FAQ'
import NftSection from './components/NftSection'
import Squad from './components/Squad'

const Home: NextPage = () => {
  return (
    <main className="relative">
      <div 
              className="absolute top-0 left-0 right-0 h-full bg-cover z-100 mt-[30vh]"
              style={{
                backgroundImage: 'url("/particles_new.webp")'
              }}
            />
      <Hero />
      <NftSection />
      <Squad />
      <WhatsNew />
    </main>
  )
}

export default Home
