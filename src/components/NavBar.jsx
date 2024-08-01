import { useEffect, useState } from 'react'
import { AlignRight, X } from 'lucide-react'


const navigation = [
  { name: 'About', href: '#about' },
  { name: 'TechStack', href: '#techstack' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export default function NavBar() {
  const [MobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if(MobileMenuOpen && window.innerWidth >= 640) {
        setMobileMenuOpen(false)
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize)
  }, [MobileMenuOpen])

  return (
    <header className='inset-x-0 top-0 z-50 font-primary'>
      <nav className='flex items-center justify-between h-16 lg:px-8'>
        <div className='p-2'>
          <a href="/" className='font-signature font-bold'>
            Wycliffe Musau
          </a>
        </div>

        <div className={MobileMenuOpen ? 'fixed bg-slate-800 top-16 flex flex-col w-full h-screen z-50' : 'space-x-10 lg:space-x-20 hidden sm:flex nav-link pr-2'}>
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={()=> setMobileMenuOpen(false)}
              className={`font-semibold ${MobileMenuOpen ? 'p-2 border-b border-gray-900 hover:bg-gray-900 hover:text-slate-300' : ''}`}
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className='sm:hidden'>
          {MobileMenuOpen ? 

            <X
              className='text-slate-300 cursor-pointer'
              onClick={()=> setMobileMenuOpen(false)}
            />
            :
            <AlignRight
              className='text-slate-300 cursor-pointer'
              onClick={()=> setMobileMenuOpen(true)}
            />
          }
        </div>
      </nav>
    </header>
  )
}
