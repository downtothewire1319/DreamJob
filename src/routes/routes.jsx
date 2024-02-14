import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Favorite from "../pages/Favorite/Favorite";
import Jobs from "../pages/Jobs/Jobs";
import NothingFound from "../pages/NothingFound/NothingFound";
import Login from "../pages/Authentication/Login";
import Registration from "../pages/Authentication/Registration";
import Applied from "../pages/Applied/Applied";
import AddJob from "../pages/AddJob/AddJob";
import ReqAuthentication from "../pages/Authentication/ReqAuthentication";
import JobApplicationForm from "../Components/JobApplicationForm";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/favorite",
        element: (
          <ReqAuthentication>
            <Favorite />
          </ReqAuthentication>
        ),
      },
      {
        path: "/jobs",

        element: <Jobs />,
      },
      {
        path: "/applied",
        element: (
          <ReqAuthentication>
            <Applied />
          </ReqAuthentication>
        ),
      },
      {
        path: "/addjob",
        element: (
          <ReqAuthentication>
            <AddJob />
          </ReqAuthentication>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
    ],
  },
  {
    path: "*",
    element: <NothingFound />,
  },
]);

export default routes;
