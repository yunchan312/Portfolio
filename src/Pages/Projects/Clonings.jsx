import { useState } from "react";
import cloneHome from "../../assets/cloning.png";
import cloneLogin from "../../assets/cloneLogin.png";
import cloneSearch from "../../assets/cloneSearch.png";
import cloneDetail from "../../assets/cloneDetail.png";
import { FaGithub } from "react-icons/fa";

export default function Cloning() {
  const [photoInd, setPhotoInd] = useState(0);
  return (
    <div className="bg-black h-[100vh] flex flex-col justify-center items-center">
      <div className="relative z-50 gap-10 select-none bebas-neue-regular bg-emphaOrange w-[80vw] h-[60vh] text-center flex items-center justify-center font-bold">
        <div className="flex flex-col justify-center items-center">
          {photoInd === 0 ? (
            <div
              className="w-[730px] h-[350px] bg-cover bg-center border-4 border-emphaOrange rounded-md"
              style={{
                backgroundImage: `url(${cloneLogin})`,
              }}
            />
          ) : photoInd === 1 ? (
            <div
              className="w-[730px] h-[350px] bg-cover bg-center border-4 border-emphaOrange rounded-md"
              style={{
                backgroundImage: `url(${cloneHome})`,
              }}
            />
          ) : photoInd === 2 ? (
            <div
              className="w-[730px] h-[350px] bg-cover bg-center border-4 border-emphaOrange rounded-md"
              style={{
                backgroundImage: `url(${cloneSearch})`,
              }}
            />
          ) : (
            <div
              className="w-[730px] h-[350px] bg-cover bg-center border-4 border-emphaOrange rounded-md"
              style={{
                backgroundImage: `url(${cloneDetail})`,
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
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="font-bold text-[50px]">Netflix Clone</div>
          <div className="bg-black text-emphaOrange px-3 py-1 rounded-md">
            넷플릭스를 참고해서 만든 영화 검색 서비스
          </div>
          <div className="text-center mt-5">
            인기, 상영, 평점, 미개봉{" "}
            <span className="font-bold text-xl">카테고리 별로</span> 영화들을
            보여줍니다.
            <br />
            <span className="font-bold text-xl">디테일 페이지</span>로 영화의
            추가 정보를 볼 수 있습니다.
            <br />
            <span className="font-bold text-xl">Debounce 검색</span> 기능을
            구현했습니다.
          </div>

          <div className="mt-10 flex gap-12 text-[30px]">
            <a href="https://github.com/yunchan312/UMC-6th/tree/master/week3/movie">
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
