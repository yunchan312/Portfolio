import { Outlet, useNavigate } from "react-router-dom";

export default function Layout() {
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="py-5 flex justify-between items-center border-b-4 border-emphaOrange w-full px-20">
        <div
          className="font-bold text-3xl cursor-pointer "
          onClick={() => navigate("")}
        >
          Koo_Yunchan
        </div>
      </div>
      <div className="px-20 py-5">
        <Outlet />
      </div>
    </div>
  );
}
