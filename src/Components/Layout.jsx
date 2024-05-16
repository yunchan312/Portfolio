import { Outlet, useNavigate } from "react-router-dom";

export default function Layout() {
  const navigate = useNavigate();
  return (
    <div>
      <div onClick={() => navigate("")}>Portfolio</div>
      <Outlet />
    </div>
  );
}
