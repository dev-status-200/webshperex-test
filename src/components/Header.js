import React from 'react'

const Header = () => {
  return (
    <header className="absolute inset-x-0 top-0">
    <nav className="flex items-center justify-between p-2 lg:px-8" aria-label="Global">
      <div className="flex lg:flex-1 pl-6">
        <img src="./logo.PNG" width={100} />
      </div>
      <div className='pr-6 hidden md:block'>
        <button className='bg-purple-600 text-white px-8 py-3 border-radius-20 rounded'>Join Waitlist</button>
      </div>
    </nav>
  </header>
  )
}

export default Header