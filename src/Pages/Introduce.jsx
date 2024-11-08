import Skills from "../Components/Skills";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { SiNotion } from "react-icons/si";
import { Link } from "react-router-dom";

export default function Introduce() {
  return (
    <div className="flex justify-center bebas-neue-regular gap-2 items-center h-[100vh] bg-black">
      <div className="flex relative z-50 justify-center px-10 gap-32 items-center bg-emphaOrange w-[80vw] h-[60vh]">
        <div className="">
          <div className="w-[400px] h-[400px] bg-black absolute z-40" />
          <div className="shadow-xl bg-selfie w-[400px] h-[400px] bg-center bg-cover relative z-50 left-7 bottom-7" />
        </div>

        <div className="flex justify-center items-start gap-15">
          <div className="w-[400px] flex flex-col gap-4">
            <div>
              <div className="overflow-hidden text-2xl font-bold">
                Education
              </div>
              <div className="text-lg">
                한국외국어대학교 컴퓨터.전자시스템공학부
              </div>
            </div>

            <div className="text-lg">
              <div className="overflow-hidden text-2xl font-bold">History</div>
              <div>UMC 5th WEB Challenger</div>
              <div>UMC 6th WEB Part Leader & vice president</div>
              <div>2023 TAB WEB Study Leader</div>
              <div>2024 TAB node Study Leader</div>
              <div>UMC 7th President</div>
            </div>

            <div className="text-lg">
              <div className="overflow-hidden text-2xl font-bold">Awards</div>
              <div>HUFS 창업아이디어경진대회 대상</div>
              <div>NomadCoder Twitter Clone Contest 최우수작 선정</div>
              <div>HUFSummer Hackaton 우수상</div>
              <div>SPARCS AI Hackaton</div>
            </div>

            <div>
              <div className="overflow-hidden text-2xl font-bold">Contact</div>
              <div className="text-lg">phenomenal312@naver.com</div>
            </div>
          </div>
          <div className="w-[200px] flex flex-col gap-4">
            <div>
              <div className="font-bold text-2xl">Skills</div>
              <div>
                <Skills />
              </div>
            </div>
            <div className="font-bold text-2xl">
              <div>More About Me</div>
              <div className="flex justify-start items-center gap-4 text-[35px]">
                <Link to="https://github.com/yunchan312">
                  <FaGithub className="cursor-pointer" />
                </Link>
                <Link to="https://www.instagram.com/9uccichann/">
                  <FaInstagram className="cursor-pointer" />
                </Link>
                <Link to="https://flying-chokeberry-02e.notion.site/HOME-061d51c247f34f74b3b3d68aa270011f?pvs=4">
                  <SiNotion className="cursor-pointer" />
                </Link>
              </div>
            </div>
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
