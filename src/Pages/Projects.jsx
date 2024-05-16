import { Outlet, useNavigate } from "react-router-dom";

export default function Projects() {
  const navigate = useNavigate();
  return (
    <div>
      <div>Projects Lists</div>
      <div>
        <div
          onClick={() => {
            navigate("/projects/portfolio");
          }}
        >
          Portfolio
        </div>
        <div
          onClick={() => {
            navigate("/projects/medicine");
          }}
        >
          Medicine
        </div>
        <div
          onClick={() => {
            navigate("/projects/quit");
          }}
        >
          Quit
        </div>
        <div
          onClick={() => {
            navigate("/projects/studyflex");
          }}
        >
          Studyflex
        </div>
        <div
          onClick={() => {
            navigate("/projects/kiwi");
          }}
        >
          Kiwi
        </div>
      </div>
      <Outlet />
    </div>
  );
}
