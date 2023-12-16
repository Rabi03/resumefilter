import React from 'react'
import Hero from './section/Hero'
import Filter from './section/Filter'
import Footer from './section/Footer'

export default function Home() {
  return (
    <div className='h-[100vh] bg-white'>
        <Hero />
        <Filter />
        <Footer />
    </div>
  )
}
