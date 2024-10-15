import Images from "../images/Images"
import NavBar from "./NavBar"

import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='bg-[#090f2b] text-white'>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" />
      <NavBar logo={Images.Logo} />
      <div className='p-8'>
        {children}
      </div>
    </div>
  )
}