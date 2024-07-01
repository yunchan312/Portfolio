import { useState } from "react";
import cheplHome from "../../assets/cheplHome.png";
import cheplLogin from "../../assets/cheplLogin.png";
import cheplLogo from "../../assets/cheplLogo.png";
import cheplManage from "../../assets/cheplManage.png";
import cheplReferee from "../../assets/cheplReferee.png";
import cheplResults from "../../assets/cheplResults.png";
import cheplSchedule from "../../assets/cheplSchedule.png";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Chepl() {
  const [photoInd, setPhotoInd] = useState(0);
  return (
    <div className="bg-black h-[100vh] flex flex-col justify-center items-center">
      <div className="relative z-50 gap-10 select-none bebas-neue-regular bg-emphaOrange w-[80vw] h-[60vh] text-center flex items-center justify-center font-bold">
        <div className="flex flex-col justify-center items-center">
          {photoInd === 0 ? (
            <div
              className="w-[730px] h-[350px] bg-cover bg-center border-4 border-emphaOrange rounded-md"
              style={{
                backgroundImage: `url(${cheplLogo})`,
              }}
            />
          ) : photoInd === 1 ? (
            <div
              className="w-[730px] h-[350px] bg-cover bg-center border-4 border-emphaOrange rounded-md"
              style={{
                backgroundImage: `url(${cheplLogin})`,
              }}
            />
          ) : photoInd === 2 ? (
            <div
              className="w-[730px] h-[350px] bg-cover bg-center border-4 border-emphaOrange rounded-md"
              style={{
                backgroundImage: `url(${cheplHome})`,
              }}
            />
          ) : photoInd === 3 ? (
            <div
              className="w-[730px] h-[350px] bg-cover bg-center border-4 border-emphaOrange rounded-md"
              style={{
                backgroundImage: `url(${cheplManage})`,
              }}
            />
          ) : photoInd === 4 ? (
            <div
              className="w-[730px] h-[350px] bg-cover bg-center border-4 border-emphaOrange rounded-md"
              style={{
                backgroundImage: `url(${cheplReferee})`,
              }}
            />
          ) : photoInd === 5 ? (
            <div
              className="w-[730px] h-[350px] bg-cover bg-center border-4 border-emphaOrange rounded-md"
              style={{
                backgroundImage: `url(${cheplResults})`,
              }}
            />
          ) : (
            <div
              className="w-[730px] h-[350px] bg-cover bg-center border-4 border-emphaOrange rounded-md"
              style={{
                backgroundImage: `url(${cheplSchedule})`,
              }}
            />
          )}
          <div className="text-2xl">
            {photoInd === 0 ? (
              <div>Chepl Logo</div>
            ) : photoInd === 1 ? (
              <div>Login Page</div>
            ) : photoInd === 2 ? (
              <div>Home Page</div>
            ) : photoInd === 3 ? (
              <div>Manage Page</div>
            ) : photoInd === 4 ? (
              <div>Referee Page</div>
            ) : photoInd === 5 ? (
              <div>Results Page</div>
            ) : (
              <div>Schedule Page</div>
            )}
          </div>
          <div className="flex gap-5 py-2">
            {photoInd === 0 ? (
              <div
                onClick={() => setPhotoInd(0)}
                className={`dot cursor-pointer bg-emphaOrange border-2 border-black`}
              />
            ) : (
              <div
                onClick={() => setPhotoInd(0)}
                className={`dot cursor-pointer`}
              />
            )}
            {photoInd === 1 ? (
              <div
                onClick={() => setPhotoInd(1)}
                className="dot cursor-pointer bg-emphaOrange border-2 border-black"
              />
            ) : (
              <div
                onClick={() => setPhotoInd(1)}
                className="dot cursor-pointer"
              />
            )}
            {photoInd === 2 ? (
              <div
                onClick={() => setPhotoInd(2)}
                className="dot cursor-pointer bg-emphaOrange border-2 border-black"
              />
            ) : (
              <div
                onClick={() => setPhotoInd(2)}
                className="dot cursor-pointer"
              />
            )}
            {photoInd === 3 ? (
              <div
                onClick={() => setPhotoInd(3)}
                className="dot cursor-pointer bg-emphaOrange border-2 border-black"
              />
            ) : (
              <div
                onClick={() => setPhotoInd(3)}
                className="dot cursor-pointer"
              />
            )}
            {photoInd === 4 ? (
              <div
                onClick={() => setPhotoInd(4)}
                className="dot cursor-pointer bg-emphaOrange border-2 border-black"
              />
            ) : (
              <div
                onClick={() => setPhotoInd(4)}
                className="dot cursor-pointer"
              />
            )}
            {photoInd === 5 ? (
              <div
                onClick={() => setPhotoInd(5)}
                className="dot cursor-pointer bg-emphaOrange border-2 border-black"
              />
            ) : (
              <div
                onClick={() => setPhotoInd(5)}
                className="dot cursor-pointer"
              />
            )}
            {photoInd === 6 ? (
              <div
                onClick={() => setPhotoInd(6)}
                className="dot cursor-pointer bg-emphaOrange border-2 border-black"
              />
            ) : (
              <div
                onClick={() => setPhotoInd(6)}
                className="dot cursor-pointer"
              />
            )}
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="font-bold text-[50px]">ChePL</div>
          <div className="bg-black text-emphaOrange px-3 py-1 rounded-md">
            체육대회 플래너, 줄여서 "ChePL"
          </div>
          <div className="text-center mt-5">
            즐거운 체육대회, 하지만 운영하고 관리에는 큰 어려움이 있었습니다.
            <br />
            CHEPL은 종목관리, 심판관리, 선수단 관리 그리고 결과 관리를 한번에 할
            수 있습니다. <br />
            운영진이 일일이 선수단과 심판을 입력하지 않고 링크 전송을 통해
            <br />
            참여자가 직접 인적사항을 입력합니다.
            <br />
          </div>
          <div className="bg-black text-emphaOrange px-3 py-1 rounded-md mt-8">
            HUFSUMMER Hackaton 참여작
          </div>

          <div className="mt-10 flex gap-12 text-[30px]">
            <a href="https://github.com/24SummerHackerton/SummerHackaton-FE">
              <FaGithub className="cursor-pointer" />
            </a>
            <a href="https://chepl-67aa6.web.app/">
              <FaExternalLinkAlt className="cursor-pointer" />
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
