import { useState } from "react";
import mediDetail1 from "../../assets/mediDetail1.png";
import mediDetail2 from "../../assets/mediDetail2.png";
import mediSearch from "../../assets/mediSearch.png";
import mediHome from "../../assets/midiHome.png";
import mediResult from "../../assets/mediResult.png";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function Medicine() {
  const [photoInd, setPhotoInd] = useState(0);
  return (
    <div className="bg-black h-[100vh] flex flex-col justify-center items-center">
      <div className="relative z-50 gap-10 select-none bebas-neue-regular bg-emphaOrange w-[80vw] h-[60vh] text-center flex items-center justify-center font-bold">
        <div className="flex flex-col justify-center items-center">
          {photoInd === 0 ? (
            <div className="flex gap-4 border-4 border-emphaOrange rounded-md">
              <div
                className="w-[220px] h-[400px] bg-cover bg-center"
                style={{
                  backgroundImage: `url(${mediHome})`,
                }}
              />
              <div
                className="w-[220px] h-[400px] bg-cover bg-center"
                style={{
                  backgroundImage: `url(${mediSearch})`,
                }}
              />
            </div>
          ) : photoInd === 1 ? (
            <div
              className="w-[220px] h-[400px] bg-cover bg-center border-4 border-emphaOrange rounded-md"
              style={{
                backgroundImage: `url(${mediResult})`,
              }}
            />
          ) : (
            <div className="flex gap-4 border-4 border-emphaOrange rounded-md">
              <div
                className="w-[220px] h-[400px] bg-cover bg-center"
                style={{
                  backgroundImage: `url(${mediDetail1})`,
                }}
              />
              <div
                className="w-[220px] h-[400px] bg-cover bg-center"
                style={{
                  backgroundImage: `url(${mediDetail2})`,
                }}
              />
            </div>
          )}
          <div className="text-2xl">
            {photoInd === 0 ? (
              <div>Home and Search Page</div>
            ) : photoInd === 1 ? (
              <div>Result Page</div>
            ) : (
              <div>Detail Page</div>
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
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="font-bold text-[50px]">Nutrient</div>
          <div className="bg-black text-emphaOrange px-3 py-1 rounded-md">
            사용자의 성별, 연령, 직업에 맞추어 영양제를 추천해주는 서비스
          </div>
          <div className="text-center mt-5">
            사용자의 <span className="font-bold text-xl">성별, 연령, 직업</span>
            에 따라서 영장제를 추천해주는 서비스입니다.
            <br />
            사용자 정보에 따라 검색 결과 화면에 나오는{" "}
            <span className="font-bold text-xl">추천 영양제 순서</span>가
            달라집니다.
            <br />
            <span className="font-bold text-xl">차트</span>를 통해서 어떤 사람이
            해당 영양제를 구매하는지를 보여줍니다.
          </div>

          <div className="mt-10 flex gap-12 text-[30px]">
            <a href="https://github.com/yunchan312/Medicine.git">
              <FaGithub className="cursor-pointer" />
            </a>
            <a href="https://vitaminsite-810a9.web.app/">
              <FaExternalLinkAlt />
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
