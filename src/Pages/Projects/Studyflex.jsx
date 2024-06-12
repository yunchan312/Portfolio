import { useState } from "react";
import studyFlexHome from "../../assets/studyFlexHome.png";
import studyFlexLogin from "../../assets/studyFlexLogin.png";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Studyflex() {
  const [photoInd, setPhotoInd] = useState(0);
  return (
    <div className="bg-black h-[100vh] flex flex-col justify-center items-center">
      <div className="relative z-50 gap-10 select-none bebas-neue-regular bg-emphaOrange w-[80vw] h-[60vh] text-center flex items-center justify-center font-bold">
        <div className="flex flex-col justify-center items-center">
          {photoInd === 0 ? (
            <div
              className="w-[730px] h-[350px] bg-cover bg-center border-4 border-emphaOrange rounded-md"
              style={{
                backgroundImage: `url(${studyFlexLogin})`,
              }}
            />
          ) : (
            <div
              className="w-[730px] h-[350px] bg-cover bg-center border-4 border-emphaOrange rounded-md"
              style={{
                backgroundImage: `url(${studyFlexHome})`,
              }}
            />
          )}
          <div className="text-2xl">
            {photoInd === 0 ? (
              <div>Login Page</div>
            ) : photoInd === 1 ? (
              <div>Home Page</div>
            ) : photoInd === 2 ? (
              <div>Search Page</div>
            ) : (
              <div>Detail Page</div>
            )}
          </div>
          <div className="flex gap-5 py-2">
            {photoInd === 0 ? (
              <div
                onClick={() => setPhotoInd(0)}
                className={`dot cursor-pointer bg-emphaOrange border-black border-2`}
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
                className="dot cursor-pointer bg-emphaOrange border-black border-2"
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
          <div className="font-bold text-[35px]">Study-Flex</div>
          <div className="bg-black text-emphaOrange px-3 py-1 rounded-md">
            스터디에서 빌런을 피하고 싶을 때 최고의 선택
          </div>
          <div className="text-center mt-5">
            스터디를 구성하고 참여할 수 있는 플랫폼입니다.
            <br />
            <span className="font-bold text-xl">대학교 인증</span>을 통해 같은
            학교 학생들과 스터디를 구성할 수 있습니다.
            <br />
            스터디원들의 평가를 통해
            <span className="font-bold text-xl">스터디 태도 점수</span>를
            부여받습니다.
            <br />이 점수는 추후 스터디 리더가 스터디원을
            <span className="font-bold text-xl">선별 모집</span> 할 때 지표로
            사용됩니다. <br />
          </div>
          <div className="mt-10 flex gap-12 text-[30px]">
            <a href="https://github.com/yunchan312/StudyFlex-FE">
              <FaGithub className="cursor-pointer" />
            </a>
            <a href="https://study-flex-fe.vercel.app/">
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
