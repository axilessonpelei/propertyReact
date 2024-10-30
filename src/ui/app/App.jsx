import { router } from "../../core/routes/routes.jsx";
import { ContextProvider } from "../../core/context/context.jsx"; // global styles
import { RouterProvider } from "react-router-dom";

function App() {

  return(
    <ContextProvider>
        <RouterProvider router={router} />
    </ContextProvider>

  )
}

export default App
