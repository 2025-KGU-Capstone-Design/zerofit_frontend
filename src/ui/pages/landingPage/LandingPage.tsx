import LandingPageHeader from "@/ui/pages/landingPage/LandingPageHeader.tsx";
import HeroSection from "@/ui/pages/landingPage/HeroSection.tsx";
import {useLoaderData} from "react-router-dom";

const LandingPage = () => {

    const data = useLoaderData() as { data: string }
    console.log("sample data: ", data)

    return <>
        <div className="flex flex-col min-h-screen bg-mainnavy text-white">
            <LandingPageHeader/>
            <HeroSection/>
        </div>
    </>

};

export default LandingPage;
