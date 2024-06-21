import { useRoutes } from "react-router-dom";
import { Pending } from "../components";
import { Introduction, DataSearch, Main, Contact } from "../pages";

const Router:React.FC = () => {
  return useRoutes([
    {
      path: "/",
      element: <Introduction />
    }, 
    {
      path: "data-search",
      element: <DataSearch />
    },
    {
      path: "european-green-deal",
      element: <Main />
    },
    {
      path: "contact",
      element: <Contact />
    },
    {
      path: "*",
      element: <Pending type="error"/>
    },
  ])
}

export default Router