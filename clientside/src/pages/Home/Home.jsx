import React from 'react'
import HeroSOS from '../../components/home/HeroSOS'
import QuickActionsCarousel from '../../components/home/QuickActionsCarousel'
import SafetyStatus from '../../components/home/SafetyStatus'
import LiveMap from '../../components/home/LiveMap'
import HelplineShortcuts from '../../components/home/HelplineShortcuts'
import SafetyTips from '../../components/home/SafetyTips'
const Home = () => {
  return (
    <div className='my-16'>
      <HeroSOS/>
      <QuickActionsCarousel/>
      <SafetyStatus/>
      <LiveMap/>
      <HelplineShortcuts/>
      <SafetyTips/>
    </div>
  )
}

export default Home
