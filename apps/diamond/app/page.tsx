import Header from "./components/header";
import Navbar from "./components/navbar/navbar";

import './styles.scss'

export default function Home () {
  return (
    <>
      <div className="text-gray-700">
        <Navbar />

        <div className="content">
          <Header />

          <div>
            <div className="min-h-[100vh] part--one">
              <div className="separator">
                <div className="separator--container">
                  <h3 className="absolute top-0 text-white mx-auto w-full text-center h-full items-center justify-center flex">
                    lorem ipsum
                  </h3>
                </div>
              </div>

              <div>
                <div className="section--panel--decoration">
                  <div className="decoration--left z-20">
                    <span/>
                  </div>
                  <div className="decoration--right z-20">
                    <span/>
                  </div>
                </div>
              </div>

              <div className="max-w-[90%] mx-auto flex gap-32 flex-row z-10 relative min-h-screen items-center  justify-between ">
                <div className="hidden lg:block w-3/6">
                  <div className="render w-full object-cover">

                    <span className="render--border--top">
                      <span className="render--border--bottom">

                      </span>
                    </span>
                  </div>
                </div>

                <div className=" relative lg:w-1/2 right-0 space-y-8 text-gray-200">
                  <h3 className="title  w-2/3">Lorem ipsum</h3>
                  <div className="description lg:w-2/3 space-y-4">
                    <p className="">
                      Discover our first game, the Hypolia skyblock called Arkhane. After long hours of work, and
                      experience in this game mode, we managed to review the very functioning of the Skyblock. By putting
                      forward a free side on the guideline you can take during your adventure. By adding a more advanced
                      synergy of each of our mechanics, and a LevelDesign thought to make the immersion more realistic
                      with a real interest of exploration !
                    </p>
                    <p>
                      We dont limit our gameplay to a banal objective of linear evolution. We exploit to the maximum the
                      resources available on Minecraft in order to guarantee a pleasure to all types of players, be it
                      PvE, adventure, farm and so on. Let your creativity take over!
                    </p>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )   
}