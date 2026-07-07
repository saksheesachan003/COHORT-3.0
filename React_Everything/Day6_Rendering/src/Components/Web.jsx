import React from 'react'
import Card from './Card'
import Contact from './Contact'
import About from './About'


const Web = () => {
  return (
    <div className="h-screen grid grid-cols-2 gap-0.5">
      <h1 className='bg-blue-500 h-[100px]'>WEB</h1>
      <Card />
      <Contact />
      <About />
    </div>
  )
}

export default Web
