import {createBrowserRouter} from "react-router-dom";
import Layout from "@/ui/layout/Layout.tsx";
import LandingPage from "@/ui/pages/landingPage/LandingPage.tsx";
import {sampleLoader} from "@/services/SampleService.ts";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            {
                path: "/home",
                loader: sampleLoader,
                Component: LandingPage
            }
        ]
    }
])

export default router