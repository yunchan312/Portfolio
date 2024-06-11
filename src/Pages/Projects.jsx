import ProjectCard from "../Components/ProjectCard";
import kiwi from "../assets/kiwiLogo.png";
import studyflex from "../assets/studyFlexLogo.png";
import quit from "../assets/quit.png";
import pill from "../assets/pill.png";
import cloning from "../assets/cloning.png";

export default function Projects() {
  /* /*<div className="justify-center items-center flex flex-col py-10">
      <div className="px-1 py-5 grid grid-cols-2 gap-5 w-[500px]">
        <ProjectCard navi={"kiwi"} title={"Kiwi"} photoURL={kiwi} />
        <ProjectCard
          navi={"cloning"}
          title={"Netflix clone"}
          photoURL={cloning}
        />
        <ProjectCard navi={"medicine"} title={"Nutrient"} photoURL={pill} />
        <ProjectCard
          navi={"studyflex"}
          title={"StudyFlex"}
          photoURL={studyflex}
        />
        <ProjectCard navi={"quit"} title={"Quit"} photoURL={quit} />
        <ProjectCard title={"FCSAN"} />
      </div>
    </div> */
  return (
    <div className="flex justify-center bebas-neue-regular gap-2 items-center h-[100vh] bg-black">
      <div className="grid grid-cols-3 relative z-50 bg-emphaOrange w-[80vw] h-[60vh]">
        <div className="">
          <ProjectCard type={1} navi={"kiwi"} title={"Kiwi"} photoURL={kiwi} />
        </div>
        <div>
          <ProjectCard
            type={2}
            navi={"cloning"}
            title={"Netflix clone"}
            photoURL={cloning}
          />
        </div>
        <div>
          <ProjectCard
            type={3}
            navi={"medicine"}
            title={"Nutrient"}
            photoURL={pill}
          />
        </div>
        <div>
          <ProjectCard
            type={4}
            navi={"studyflex"}
            title={"StudyFlex"}
            photoURL={studyflex}
          />
        </div>
        <div>
          <ProjectCard type={5} navi={"quit"} title={"Quit"} photoURL={quit} />
        </div>
        <div>
          <ProjectCard title={"FCSAN"} type={6} />
        </div>
      </div>
      <div className="select-none z-40 rotate-3 opacity-80 bebas-neue-regular absolute bg-emphaOrange w-[80vw] h-[60vh] text-center flex flex-col items-center justify-center font-bold" />
      <div className="select-none z-40 rotate-6 opacity-40 bebas-neue-regular absolute bg-emphaOrange w-[80vw] h-[60vh] text-center flex flex-col items-center justify-center font-bold" />
      <div className="select-none z-40 rotate-[9deg] opacity-20 bebas-neue-regular absolute bg-emphaOrange w-[80vw] h-[60vh] text-center flex flex-col items-center justify-center font-bold" />
      <div className="select-none z-40 rotate-[12deg] opacity-10 bebas-neue-regular absolute bg-emphaOrange w-[80vw] h-[60vh] text-center flex flex-col items-center justify-center font-bold" />
    </div>
  );
}
