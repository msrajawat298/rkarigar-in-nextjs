import Intro from '@/components/Intro'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <div className='w-full h-screen  bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black'>
      <Navbar />
      <Intro />
    </div>
  )
}

//