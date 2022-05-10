import React from 'react'
import { IconContext } from 'react-icons'
import Logo from '../components/media/Logo'
import HeaderDropdown from '../components/dropdown/HeaderDropdown'
import SearchHeader from '../components/inputs/SearchHeader'
import { useAuth } from '../auth/AuthFunctions'

export const Header = () => {
  const auth = useAuth()
  return (
    <div className="bg-menu drop-shadow-[0_15px_15px_rgba(0,0,0,0.05)]">
      <div className="w-full">
        <div className="flex flex-row items-center h-16">
          {/* Left */}
          <div className="flex items-center w-1/6 justify-start pl-5">
            <Logo />
          </div>
          {/* Center */}
          <div className="flex items-center w-4/6 justify-start">
            <div className="w-3/6">
              {/* <SearchHeader /> */}
            </div>
            <div className="w-3/6"></div>
          </div>
          {/* Right */}
          <div className="flex items-center w-1/6 justify-end pr-5">
            {auth.data.user && <HeaderDropdown />}
          </div>
        </div>
      </div>
    </div>
  )
}
