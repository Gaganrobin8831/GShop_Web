import React from 'react'
import Hero from '../components/home/Hero.home'
import LatestCollection from '../components/home/latestCollection.home';
import BestSeller from '../components/home/bestSeller.home';
import OurPolicy from '../components/home/ourPolicy.home';
import NewsLetter from '../components/home/newsLetter.home';

function home() {
  return (
    <div>
    <Hero/>
    <LatestCollection />
    <BestSeller/>
    <OurPolicy/>
    <NewsLetter/>
    </div>
  )
}

export default home