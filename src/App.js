import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Introduce from "./Pages/Introduce";
import Projects from "./Pages/Projects";
import Medicine from "./Pages/Projects/Medicine";
import Quit from "./Pages/Projects/Quit";
import Studyflex from "./Pages/Projects/Studyflex";
import Kiwi from "./Pages/Projects/Kiwi";
import Cloning from "./Pages/Projects/Clonings";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/introduce", element: <Introduce /> },
    {
      path: "/projects",
      element: <Projects />,
    },
    { path: "/projects/medicine", element: <Medicine /> },
    { path: "/projects/cloning", element: <Cloning /> },
    { path: "/projects/quit", element: <Quit /> },
    { path: "/projects/studyflex", element: <Studyflex /> },
    { path: "/projects/kiwi", element: <Kiwi /> },
  ]);
  return (
    <div className="flex flex-col justify-between h-[100vh]">
      <div className=" h-[100vh]">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
