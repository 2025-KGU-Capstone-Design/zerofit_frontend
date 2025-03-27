import Sidebar from "@/ui/Sidebar.tsx";
import Header from "@/ui/ConsultingPageHeader.tsx";
import {LayoutService} from "@/services/LayoutService.ts";
import {Stack} from "@mui/material";
import {Outlet} from "react-router-dom";

export function layoutLoader() {
    const service = new LayoutService
    return service.fetchLayout()
}

const Layout = () => {

    return (
        <div className="flex w-full">
            <Sidebar/>
            <div className="flex-1 flex flex-col bg-gray-50 min-h-screen">
                <Header/>
            </div>

            <Stack>
                <Outlet/>
            </Stack>
        </div>
    );
};

export default Layout
