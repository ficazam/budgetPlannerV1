'use client'
import React from 'react'
import NavigationItem from './NavigationItem'
import { navItems } from './navigationItems'

const Navigation = () => {
  return (
    <div className='w-full h-max bg-red-500 fixed bottom-0'>
      {navItems.map((navItem) => <NavigationItem key={navItem.name} {...navItem} />)}
    </div>
  )
}

export default Navigation
