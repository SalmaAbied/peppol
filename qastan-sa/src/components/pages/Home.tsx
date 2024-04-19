import React from 'react'
import Intro from '../../components/Intro';
import Cards from '../../components/Cards';
import Banner from '../../components/Banner';
import Hero from '../Hero';
import More from '../More';

function Home() {
  return (
    <div>    
    <Hero/>
    <Intro/>
    <More/>
    <Cards/>
    <Banner/>
    </div>
  )
}

export default Home
