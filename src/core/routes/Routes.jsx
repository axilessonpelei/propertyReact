import { Main } from "../../ui/pages/main/Main.jsx";
import { createBrowserRouter} from "react-router-dom";
import {Deposit} from "../../ui/pages/deposit/Deposit.jsx";
import {Property} from "../../ui/pages/properety/Property.jsx";
import {Sale} from "../../ui/pages/sale/Sale.jsx";
import {Gift} from "../../ui/pages/gift/Gift.jsx";

const routes = [
    {
        path: "/main",
        element: <Main />,
    },
    {
        path: "/property",
        element: <Property />
    },
    {
        path: "/sale",
        element: <Sale />,
    },
    {
        path: "/gift",
        element: <Gift />,
    },
    {
        path: "/deposit",
        element: <Deposit />,
    }
]
const router = createBrowserRouter(routes);
export {router}