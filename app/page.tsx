import type { NextPage } from 'next'
import WhatsNew from './components/WhatsNew'
import Hero from './components/Hero'
import FAQ from './components/FAQ'
import NftSection from './components/NftSection'
import Squad from './components/Squad'

const Home: NextPage = () => {
  return (
    <main>
      <Hero />
      <NftSection />
      <Squad />
      <WhatsNew />
    </main>
  )
}

export default Home
