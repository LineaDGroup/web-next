"use client"

import Image from "next/image";
import { usePathname } from "next/navigation";


export default function Navbar({logo='/images/logo.png', locale}: {logo?:string, locale: string}) {

    const path = usePathname();

    const pages = [
        {
            link: `/${locale}`,
            name: 'Home'
        },
        {
            link: `/${locale}/development`,
            name: 'Desarrollo'
        },
        {
            link: `/${locale}/streaming`,
            name: 'Media/Streaming'
        },
        // {
        //     link: '/projects',
        //     name: 'Proyectos'
        // },
        // {
        //     link: '/clients',
        //     name: 'Clientes'
        // },
        {
            link: '#contact',
            name: 'Contactenos'
        }
    ]
  return (

<nav className="bg-black px-2 sm:px-4 py-2.5 fixed w-full z-50 top-0 left-0">
  <div className="container flex flex-wrap justify-between items-center mx-auto px-8">
  <a href="/" className="flex items-center">
      <div className={`h-8 sm:h-12 relative aspect-[3/1]`}> <Image alt="LineaD Group" src={logo} className="mr-3" fill={true}/></div>
  </a>
  <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
        {pages.map((page, index) => 
            <li key={index}>
                <a href={page.link} className={`block py-2 pr-4 pl-3 text-white md:p-0 dark:text-white text-lg md:hover:border-b-2 border-red-600 ${page.link === path && 'md:border-b-2'}`} aria-current="page">{page.name}</a>
            </li>
        )}
      
    </ul>
  </div>
  </div>
</nav>

  );
}
