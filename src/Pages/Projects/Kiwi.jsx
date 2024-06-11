import { useState } from "react";
import kiwiHome from "../../assets/KiwiHome.png";
import kiwiLogin from "../../assets/kiwiLogin.png";
import { FaTrophy, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function Kiwi() {
  const [photoInd, setPhotoInd] = useState(0);
  return (
    <div className="bg-black h-[100vh] flex flex-col justify-center items-center">
      <div className="relative z-50 gap-10 select-none bebas-neue-regular bg-emphaOrange w-[80vw] h-[60vh] text-center flex items-center justify-center font-bold">
        <div className="flex flex-col justify-center items-center">
          {photoInd !== 0 ? (
            <div
              className="w-[700px] h-[400px] bg-cover bg-center border-4 border-emphaOrange rounded-md"
              style={{
                backgroundImage: `url(${kiwiHome})`,
              }}
            />
          ) : (
            <div
              className="w-[700px] h-[400px] bg-cover bg-center border-4 border-emphaOrange rounded-md"
              style={{
                backgroundImage: `url(${kiwiLogin})`,
              }}
            />
          )}
          <div className="text-2xl">
            {photoInd === 0 ? <div>Login Page</div> : <div>Home Page</div>}
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
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="font-bold text-[50px]">KIWI</div>
          <div className="bg-black text-emphaOrange px-3 py-1 rounded-md">
            천천히 글을 읽으면서 생각할 수 있도록 만들어진 슬로우 SNS 🥝
          </div>
          <div className="text-center mt-5">
            Kiwi는 <span className="font-bold text-xl">마크다운</span> 형식으로
            게시글을 작성할 수 있는 SNS입니다.
            <br />
            블로그도 작성할 수 있고,
            <span className="font-bold text-xl">실시간으로 좋아요 개수</span>가
            반영되는 랭킹 기능이 있습니다. <br />
          </div>

          <div className="mt-10 flex gap-12 text-[30px]">
            <a href="https://github.com/yunchan312/kiwi">
              <FaGithub className="cursor-pointer" />
            </a>
            <a href="https://kiwi-225e1.web.app/">
              <FaExternalLinkAlt />
            </a>
            <a href="https://nomadcoders.co/community/thread/9744">
              <FaTrophy />
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
