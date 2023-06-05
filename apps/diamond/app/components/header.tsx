import Image from 'next/image'
import LogoText from '../../public/logo.png'
import Abeille from './abeille'
import './header.scss'

export default function Header () {
  return (
    <div className="min-h-[100vh] relative header">
      <div className="home-cover h-screen">
        <Abeille className={"top-1/2 abeille1"}/>
        <div className="hidden lg:block">
          <Abeille className={"top-1/3 abeille2"} />
          <Abeille className={"top-1/2 left-1/3 abeille3"} />
          <Abeille className={"top-2/3 right-10 abeille4"} />
        </div>

        <div className="">
          <div className=" mx-auto h-screen flex flex-col gap-4  place-content-center -translate-y-20">
            <span className="text-white font-thin font-serif text-3xl lg:text-7xl self-center">Rejoins-nous sur</span>
            <div className="self-center w-2/3 lg:w-1/3">
              <Image src={LogoText} alt={"Logo"} layout="responsive" loading={"lazy"}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}