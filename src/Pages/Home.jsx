import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="bg-black h-[100vh] flex flex-col justify-center items-center">
      <div className="relative py-5 z-50 select-none bebas-neue-regular bg-emphaOrange w-[80vw] h-[60vh] text-center flex flex-col items-center justify-center font-bold">
        <div className="w-full text-3xl flex justify-between items-center px-10">
          <span
            onClick={() => navigate("/introduce")}
            className="py-1 px-3 hover:bg-black hover:text-emphaOrange cursor-pointer"
          >
            INTRODUCE
          </span>
          <span className="text-5xl px-3">X</span>
        </div>
        <div className="text-[250px] h-[300px] relative bottom-6">
          KOOYUNCHAN
        </div>
        <div className="w-full text-3xl flex justify-between items-center px-10">
          <span className="text-5xl px-3">X</span>
          <span
            onClick={() => navigate("/projects")}
            className="py-1 px-3 hover:text-emphaOrange cursor-pointer hover:bg-black"
          >
            WORKS
          </span>
        </div>
      </div>
      <div className="select-none z-40 rotate-3 opacity-80 bebas-neue-regular absolute bg-emphaOrange w-[80vw] h-[60vh] text-center flex flex-col items-center justify-center font-bold" />
      <div className="select-none z-40 rotate-6 opacity-40 bebas-neue-regular absolute bg-emphaOrange w-[80vw] h-[60vh] text-center flex flex-col items-center justify-center font-bold" />
      <div className="select-none z-40 rotate-[9deg] opacity-20 bebas-neue-regular absolute bg-emphaOrange w-[80vw] h-[60vh] text-center flex flex-col items-center justify-center font-bold" />
      <div className="select-none z-40 rotate-[12deg] opacity-10 bebas-neue-regular absolute bg-emphaOrange w-[80vw] h-[60vh] text-center flex flex-col items-center justify-center font-bold" />
    </div>
  );
}
