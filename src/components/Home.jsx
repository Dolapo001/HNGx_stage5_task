import { Fragment } from "react";
import Headroom from "react-headroom";
import { Helmet } from "react-helmet";
import Logo from "../assets/logo.svg";
import Grandma from "../assets/grandma.svg";
import KidAndFather from "../assets/kidandfather.svg";
import PrettyLady from "../assets/prettylady.svg";
import Updots from "../assets/updots.svg";
import Belowdots from "../assets/belowdots.svg";
import Icon from "@mdi/react";
import { mdiArrowRightThin } from "@mdi/js";

export default function Home() {
  return (
    <Fragment>
      <Helmet>
        <title>HelpMeOut - Home</title>
      </Helmet>

      <div className="font-sora">
        <Headroom>
          <header className="flex justify-between md:px-[80px] px-16 py-6 border-b text-[13px] ">
            <img src={Logo} alt="Logo" />
            <div className="flex pt-4 font-bold">
              <p className="cursor-pointer">Feature</p>
              <p className="pl-8 cursor-pointer">How It Works</p>
            </div>
            <button className="text-[#120b48] font-bold hover:shadow-lg hover:duration-700 hover:bg-black/30 rounded-xl p-4 px-8 ">
              Get Started
            </button>
          </header>
        </Headroom>

        <main className=" md:px-[80px] px-16">
          <div className="pt-[70px] md:pt-[130px] flex flex-col md:flex-row md:justify-between">
            <div className="md:pt-[70px] ">
              <h1 className="font-bold text-[50px] w-[400px] ">
                Show Them Don&apos;t just tell{" "}
              </h1>
              <p className="w-[380px] py-6 leading-8 ">
                Help your friends and loved ones by creating and sending videos
                on how to get things done on a website.
              </p>
              <button className="text-[14px] text-white bg-[#120b48] hover:bg-[#605c84] hover:shadow-xl hover:duration-700 p-4 px-6 rounded-xl ">
                Install HelpMeOut
                <Icon path={mdiArrowRightThin} size={2} className="inline" />
              </button>
            </div>

            <div className="mt-[100px] md:mt-0 ">
              <div className="grid grid-cols-2">
                <div className="pr-2">
                  <img
                    src={Grandma}
                    alt="Grandma"
                    className="pb-6 pl-10 md:pl-[82px] "
                  />
                  <div className="relative">
                    <img src={Belowdots} alt="Below Dots" className="" />
                    <img
                      src={KidAndFather}
                      alt="Kid and Father"
                      className="absolute inset-y-0 pl-8 md:pl-[80px] "
                    />
                  </div>
                </div>
                <div className="relative mt-[-57px]">
                  <img src={Updots} alt="Up dots" className="" />
                  <img
                    src={PrettyLady}
                    alt="Pretty Lady"
                    className="absolute inset-y-0 pt-20 pr-10 md:pr-[60px] "
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-">
                <div>
                        <p>Features</p>
                        <p>Key Highlights of Our Extension</p>
                </div>
          </div>
        </main>
      </div>
    </Fragment>
  );
}
