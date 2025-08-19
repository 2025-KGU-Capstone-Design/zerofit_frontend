import {Box} from '@mui/material'
import {Outlet} from 'react-router-dom'
import Sidebar from '@/ui/layout/Sidebar'

const Layout = () => {
    return (
        <Box sx={{display: 'flex'}}>
            <Sidebar />
            <Box sx={{flexGrow: 1}}>
                {/*<Header />*/}
                <Outlet />
            </Box>
        </Box>
    )
}

export default Layout
