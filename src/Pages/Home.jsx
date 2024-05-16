import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <div onClick={() => navigate("/introduce")}>소개</div>
      <div onClick={() => navigate("/studies")}>공부</div>
      <div onClick={() => navigate("/projects")}>프로젝트</div>
    </div>
  );
}
