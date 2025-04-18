import {Box} from '@mui/material'
import {Outlet} from 'react-router-dom'
import Header from '@/ui/layout/Header'
import Sidebar from '@/ui/layout/Sidebar'

const Layout = () => {
    return (
        <Box sx={{display: 'flex'}}>
            <Sidebar />
            <Box sx={{flexGrow: 1}}>
                <Header />
                <Box component='main' sx={{mt: 8}}>
                    <Outlet />
                </Box>
            </Box>
        </Box>
    )
}

export default Layout
