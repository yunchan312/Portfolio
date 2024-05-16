import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import Introduce from "./Pages/Introduce";
import Studies from "./Pages/Studies";
import Projects from "./Pages/Projects";
import Medicine from "./Pages/Projects/Medicine";
import Portfolio from "./Pages/Projects/Portfolio";
import Quit from "./Pages/Projects/Quit";
import Studyflex from "./Pages/Projects/Studyflex";
import Kiwi from "./Pages/Projects/Kiwi";
import Footer from "./Components/Footer";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/introduce", element: <Introduce /> },
        {
          path: "/projects",
          element: <Projects />,
          children: [
            { path: "/projects/medicine", element: <Medicine /> },
            { path: "/projects/portfolio", element: <Portfolio /> },
            { path: "/projects/quit", element: <Quit /> },
            { path: "/projects/studyflex", element: <Studyflex /> },
            { path: "/projects/kiwi", element: <Kiwi /> },
          ],
        },
        { path: "/studies", element: <Studies /> },
      ],
    },
  ]);
  return (
    <div className="flex flex-col justify-between h-[100vh]">
      <div className="px-10">
        <RouterProvider router={router} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
