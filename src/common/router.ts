import { createBrowserRouter } from "react-router-dom";
import Layout from "@/ui/layout/Layout.tsx";
import LandingPage from "@/ui/pages/landingPage/LandingPage.tsx";
import { sampleLoader } from "@/services/SampleService.ts";
import CompanyInputPage1 from "@/ui/pages/companyInputPage/companyInputPage1/CompanyInputPage1";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        Component: LandingPage,
      },

      {
        path: "",
        Component: Layout,
        children: [
          {
            path: "home",
            loader: sampleLoader,
            Component: LandingPage,
          },
          {
            path: "company-info/step1",
            Component: CompanyInputPage1,
          },
        ],
      },
    ],
  },
]);

export default router;
