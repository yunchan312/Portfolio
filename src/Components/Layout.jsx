import { Outlet, useNavigate } from "react-router-dom";

export default function Layout() {
  const navigate = useNavigate();
  return (
    <div>
      <div onClick={() => navigate("")} className="font-bold py-5 text-3xl">
        Portfolio
      </div>
      <Outlet />
    </div>
  );
}
