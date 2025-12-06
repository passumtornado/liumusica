import Link from 'next/link';
import React from 'react'
import Menu from './menu';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link
            href="/"
            className="text-2xl font-extrabold tracking-wider"
          >
            <Image src="/logo.png" alt="Logo" width={40} height={40} priority={true}/>
            {/* LIU <span className="text-blue-300">MuSiCa</span> */}
          </Link>
        </div>
        <Menu />
      </div>
    </header>
  );
}

export default Header