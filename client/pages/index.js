import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <h2>Sidebar</h2>
      <h2>Feed</h2>
      <h2>Widgets</h2>
    </div>
  )
}
