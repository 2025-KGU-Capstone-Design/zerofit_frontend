import {createBrowserRouter} from "react-router-dom";
import Layout, {layoutLoader} from "@/ui/Layout.tsx";
import LandingPage from "@/ui/pages/landingPage/LandingPage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        loader: layoutLoader,
        children: [
            {
                path: "/home",
                Component: LandingPage
            }
        ]
    }
])

export default router