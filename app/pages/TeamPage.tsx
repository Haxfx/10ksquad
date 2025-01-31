import type { NextPage } from 'next'
import Image from 'next/image'

const TeamPage: NextPage = () => {
  return (
    <div className="pt-20 px-8">
      <h1 className="text-4xl font-bold text-center mb-12">The 10k Squad</h1>
      <div className="grid grid-cols-6 gap-6 max-w-7xl mx-auto">
        {Array.from({ length: 48 }).map((_, index) => (
          <div key={index} className="aspect-square rounded-lg overflow-hidden">
            <Image 
              src={`/team-member-${index + 1}.png`} 
              alt={`Team Member ${index + 1}`}
              width="100"
              height="100"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TeamPage
