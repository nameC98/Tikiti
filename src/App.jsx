// export default App;
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import HomeLayout from "./pages/HomeLayout.jsx";
import { loader as homeloader } from "./pages/Home.jsx";
import { loader as geteventloader } from "./pages/GetEventID.jsx";
import GetEventID from "./pages/GetEventID.jsx/index.jsx";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      // errorElement: <Error />,
      children: [
        {
          index: true,
          path: "/",
          element: <Home />,
          loader: homeloader,
        },
        {
          path: "geteventid/:id",
          element: <GetEventID />,
          loader: geteventloader,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App;
