import { useNavigate } from "react-router-dom";
import football from "../assets/football.svg";
import orangeBall from "../assets/footballOrange.svg";

export default function ProjectCard({ navi, type, title, isOrange }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() =>
        navi ? navigate(`/projects/${navi}`) : alert("준비중입니다.")
      }
      className={`${
        isOrange ? "bg-emphaOrange" : ""
      } h-full cursor-pointer w-full`}
    >
      {type === 1 ? (
        <div className="py-2 px-3 relative z-50 h-full flex justify-center items-center hover:bg-black hover:text-emphaOrange">
          <div className="text-[45px]">🥝</div>
          <span className="text-[80px]">{title}</span>
          <div className="text-[45px]">🥝</div>
        </div>
      ) : null}
      {type === 2 ? (
        <div className="group py-2 px-3 relative z-50 h-full flex flex-col justify-center items-center hover:bg-black hover:text-emphaOrange">
          <span className="text-[80px] border-x-4 group-hover:border-emphaOrange border-black px-5">
            {title}
          </span>
        </div>
      ) : null}
      {type === 3 ? (
        <div className="px-3 group relative z-50 h-full flex justify-center items-center hover:bg-black hover:text-emphaOrange">
          <div className="w-[20px] h-[10%] bg-black group-hover:bg-emphaOrange" />
          <div className="w-[5px] h-full" />
          <div className="w-[30px] h-[30%] bg-black group-hover:bg-emphaOrange" />
          <div className="w-[5px] h-full" />
          <div className="w-[40px] h-[60%] bg-black group-hover:bg-emphaOrange" />
          <div className="w-[20px] h-full" />

          <span className="text-[80px]">{title}</span>
          <div className="w-[20px] h-full" />
          <div className="w-[40px] h-[60%] bg-black group-hover:bg-emphaOrange" />
          <div className="w-[5px] h-full" />
          <div className="w-[30px] h-[30%] bg-black group-hover:bg-emphaOrange" />
          <div className="w-[5px] h-full" />
          <div className="w-[20px] h-[10%] bg-black group-hover:bg-emphaOrange" />
        </div>
      ) : null}
      {type === 4 ? (
        <div className="py-2 px-3 relative z-50 h-full flex flex-col justify-center items-center hover:bg-black hover:text-emphaOrange">
          <span className="text-[80px]">{title}</span>
          <div className="barcode text-center">asdfasfdsfadfadsasd</div>
        </div>
      ) : null}
      {type === 5 ? (
        <div className="group py-2 px-3 relative z-50 h-full flex flex-col justify-center items-center hover:bg-black hover:text-emphaOrange">
          <span className="group-hover:bg-emphaOrange group-hover:text-black text-[80px] bg-black text-emphaOrange w-[70%] text-center">
            {title}
          </span>
        </div>
      ) : null}
      {type === 6 ? (
        <div className="py-2 group px-3 relative z-50 h-full flex flex-col justify-center items-center hover:bg-black hover:text-emphaOrange">
          <div className="absolute w-full flex justify-center items-center group-hover:hidden">
            <img
              src={football}
              className="w-[190px] opacity-40"
              alt="football"
            />
          </div>
          <div className="hidden w-full justify-center items-center group-hover:flex absolute">
            <img
              src={orangeBall}
              className="w-[190px] opacity-40"
              alt="orangeBall"
            />
          </div>

          <span className="text-[80px]">{title}</span>
        </div>
      ) : null}
    </div>
  );
}
