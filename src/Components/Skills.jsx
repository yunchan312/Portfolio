import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiReactquery,
  SiRecoil,
  SiFramer,
  SiReacthookform,
  SiStyledcomponents,
  SiTailwindcss,
  SiPostman,
  SiCloudflare,
  SiReactrouter,
} from "react-icons/si";
import { FaCss3 } from "react-icons/fa6";
import { FaHtml5, FaGitAlt } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";

export default function Skills() {
  const techList = [
    <SiReact />,
    <SiTypescript />,
    <SiJavascript />,
    <FaCss3 />,
    <FaHtml5 />,
    <SiReactrouter />,
    <SiRecoil />,
    <IoLogoFirebase />,
    <SiReactquery />,
    <SiFramer />,
    <SiReacthookform />,
    <SiStyledcomponents />,
    <SiTailwindcss />,
    <FaGitAlt />,
    <SiPostman />,
    <SiCloudflare />,
  ];
  return (
    <div className="flex flex-wrap gap-4 text-[35px]">
      {techList.map((t) => {
        return t;
      })}
    </div>
  );
}
