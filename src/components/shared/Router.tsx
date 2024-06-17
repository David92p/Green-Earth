import { useRoutes } from "react-router-dom";
import { Contact, DataSearch, Introduction, Main, Pending } from "..";

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