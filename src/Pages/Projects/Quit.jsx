import quitLogo from "../../assets/quitLogo.png";
import { FaGithub, FaTools } from "react-icons/fa";

export default function Medicine() {
  return (
    <div className="bg-black h-[100vh] flex flex-col justify-center items-center">
      <div className="relative z-50 gap-10 select-none bebas-neue-regular bg-emphaOrange w-[80vw] h-[60vh] text-center flex items-center justify-center font-bold">
        <div className="flex flex-col justify-center items-center">
          <div
            className="w-[730px] h-[350px] bg-cover bg-center border-emphaOrange rounded-md z-50"
            style={{
              backgroundImage: `url(${quitLogo})`,
            }}
          />
          <div className="w-[730px] h-[350px] border-4 border-black rounded-md absolute bg-white z-40 top-[66px]" />

          <div className="text-2xl">Logo</div>

          <div className="flex gap-5 py-2">
            <div
              className={`dot cursor-pointer bg-emphaOrange border-black border-2`}
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="font-bold text-[50px]">You Can Quit</div>
          <div className="bg-black text-emphaOrange px-3 py-1 rounded-md">
            흡연자도 아니고 비흡연자도 아닌 금연자를 위한 커뮤니티
          </div>
          <div className="text-center mt-5 flex items-center text-[30px] gap-3">
            <FaTools />
            <span className="font-bold text-xl">작업중입니다</span>
          </div>

          <div className="mt-10 flex gap-12 text-[30px]">
            <a href="https://github.com/yunchan312/You_Can_Quit">
              <FaGithub className="cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
      <div className="select-none z-40 rotate-3 opacity-80 bebas-neue-regular absolute bg-emphaOrange w-[80vw] h-[60vh] text-center flex flex-col items-center justify-center font-bold" />
      <div className="select-none z-40 rotate-6 opacity-40 bebas-neue-regular absolute bg-emphaOrange w-[80vw] h-[60vh] text-center flex flex-col items-center justify-center font-bold" />
      <div className="select-none z-40 rotate-[9deg] opacity-20 bebas-neue-regular absolute bg-emphaOrange w-[80vw] h-[60vh] text-center flex flex-col items-center justify-center font-bold" />
      <div className="select-none z-40 rotate-[12deg] opacity-10 bebas-neue-regular absolute bg-emphaOrange w-[80vw] h-[60vh] text-center flex flex-col items-center justify-center font-bold" />
    </div>
  );
}
