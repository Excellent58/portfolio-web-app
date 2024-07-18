import { useState } from 'react'
import { AlignRight, X } from 'lucide-react'


const navigation = [
    { name: 'About', href: '#about' },
    { name: 'TechStack', href: '#techstack' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
]

export default function NavBar() {
  const [MobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className='inset-x-0 top-0 z-50'>
      <nav className='nav flex items-center justify-between h-16 p-2 lg:px-8'>
        <div className=''>
          <a href="/" className='font-signature font-bold'>
            Wycliffe Musau
          </a>
        </div>

        <div className={MobileMenuOpen ? 'fixed top-16 mt-2 flex flex-col w-full h-screen' : 'space-x-10 lg:space-x-20 hidden sm:flex nav-link'}>
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={()=> setMobileMenuOpen(false)}
              className={`font-semibold text-gray-900 ${MobileMenuOpen ? 'pb-4 pl-2 border-b border-gray-900 hover:bg-gray-900 hover:text-gray-50' : ''}`}
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className='sm:hidden'>
          {MobileMenuOpen ? 

            <X
              className='text-gray-900 cursor-pointer'
              onClick={()=> setMobileMenuOpen(false)}
            />
            :
            <AlignRight
              className='text-gray-900 cursor-pointer'
              onClick={()=> setMobileMenuOpen(true)}
            />
          }
        </div>
      </nav>
    </header>
  )
}
