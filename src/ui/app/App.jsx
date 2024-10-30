import { router } from "../../core/routes/routes.jsx";
import { ContextProvider } from "../../core/context/context.jsx"; // global styles
import {Main} from "../pages/Main/Main.jsx";
import { RouterProvider } from "react-router-dom";

function App() {

  return(
      <Main>
    <ContextProvider>
        <RouterProvider router={router} />
    </ContextProvider>
      </Main>
  )
}

export default App
