'use client';


import { useEffect } from "react"
import Image from 'next/image'
import Link from 'next/link'

import './navbar.scss'

import BranchPicture from '../../../public/images/navbar/branche.png'
import IconPicture from '../../../public/icon.png'

export default function Navbar () {

  useEffect(() => {
    let lastScrollTop = 0
    window.onscroll = () => {
      let st = window.scrollY
      const navbar = document.getElementById('navbar')
      if (st < 300) {
        navbar!.style.top = "50px"
        return
      }
      if ( st > lastScrollTop ){
        navbar!.style.top = "-100px"
      } else {
        navbar!.style.top = "50px"
      }

      lastScrollTop = st
    }
  })

  return (
    <div className=" top-[50px] navbar fixed" id="navbar">
      {/* DESKTOP VERSION */}   
      <div className="branch">
        <Image src={BranchPicture} alt={"Branche Gauche Navbar"} layout='responsive' />
      </div>
      <div className="branch2">
        <Image src={BranchPicture} alt={"Branche Droit Navbar"} layout='responsive'/>
      </div>

      <div className="navbar-container hidden lg:block">
        <div className="absolute top-0 flex flex-row h-full items-center justify-between w-full">
          <ul className="flex flex-row h-full items-center space-x-8">
             {/* LOGO */}
             <li className="menu-item-0 menu-item">
              <div className="icon w-20">
                <Image src={IconPicture} layout="responsive" loading="lazy" alt="Icon Hypolia" />
              </div>
            </li>

            <li className="links">
              <ul className={"flex gap-8"}>
                <li className="link-active">
                  <Link href={"/"}>Accueil</Link>
                </li>
                <li>
                  <Link href={"/blogs"}>Blogs</Link>
                </li>
                <li>
                  <Link href={"/recrutement"}>Recrutement</Link>
                </li>
              </ul>
            </li>
          </ul>

          <div className="flex flex-row place-items-center space-x-4 mr-8">
            lorem
          </div>
        </div>
      </div>
    </div>
  )
}