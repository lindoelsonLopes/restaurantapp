import React from 'react';
import Logo from '../img/logo3.png';
import { GiBasket } from 'react-icons/gi';

export const Header = () => {
  return (
    <header className="fixed z-50 w-screen p-6 px-16">
      {/* Desktop & tablet */}
      <div className="hidden md:flex w-full h-full">
        <div className="flex items-center gap-2">
          <img src={Logo} className="w-10 object-cover" alt="logo" />
          <p className="text-headingColor text-xl font-bold">Bocelle</p>
        </div>

        <ul className="flex items-center gap-8 ml-auto">
          <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Início</li>
          <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Cardápio</li>
          <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Sobre nós</li>
          <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Serviços</li>
        </ul>

        <div className="relative flex items-center justify-center">
          <GiBasket className="text-textColor text-2xl ml-8 cursor-pointer"/>
          <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
            <p className="text-xs text-white font-semibold">12</p>
          </div>
        </div>

      </div>

      {/* Mobile */}
      <div className="flex md:hidden w-full h-full"></div>
    </header>
  )
}
