import { MdSportsFootball } from "react-icons/md";
import { IoMdFootball } from "react-icons/io";
import { PiFootballHelmetFill } from "react-icons/pi";
import { MdOutlineSportsVolleyball } from "react-icons/md";
import { IoBasketballOutline } from "react-icons/io5";
import { LiaBaseballBallSolid } from "react-icons/lia";
import { FaTableTennisPaddleBall } from "react-icons/fa6";
import { PiCourtBasketball } from "react-icons/pi";
import { GiSoccerField } from "react-icons/gi";
import { FaBaseballBatBall } from "react-icons/fa6";

export default function Test() {
  return (
    <div className="bg-[#ff3334] h-[100vh] flex justify-center items-center overflow-hidden">
      <div className="text-white text-[350px]">
        <FaBaseballBatBall className="absolute top-[-40px] left-8 text-[250px] rotate-[-75deg]" />
        <IoMdFootball className="absolute bottom-[-150px] left-0" />
        <IoBasketballOutline className="absolute top-[130px] left-32 rotate-45" />
        <MdOutlineSportsVolleyball className="absolute top-[70px] left-[-130px]" />
        <PiFootballHelmetFill className="absolute bottom-48 left-24 rotate-[-45deg]" />
        <LiaBaseballBallSolid className="absolute bottom-0 left-52" />
        <FaTableTennisPaddleBall className="absolute text-[200px] left-[500px] bottom-[100px] rotate-[-70deg]" />
        <PiCourtBasketball className="absolute left-[640px] bottom-[-200px] rotate-[-40deg]" />
        <GiSoccerField className="absolute left-[-150px] bottom-20 rotate-[60deg] text-[450px]" />
        <MdSportsFootball className="absolute bottom-[-150px] rotate-[63deg] left-[400px]" />
      </div>
      <div className="text-white text-[350px]">ChePL</div>
    </div>
  );
}
