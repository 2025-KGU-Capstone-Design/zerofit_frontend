import {AppBar, Toolbar, Typography, Box} from '@mui/material'
import {Link} from 'react-router-dom'
import Logo from '@/assets/icons/logo1.png'
import useCompanyInputStore from '@/store/useCompanyInputStore'

const drawerWidth = 240

const Header = () => {
    const resetState = useCompanyInputStore((state) => state.resetState)
    return (
        <AppBar
            position='fixed'
            sx={{
                display: 'flex',
                flexDirection: 'row',
                zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
        >
            <Toolbar
                disableGutters
                sx={{
                    backgroundColor: (theme) => theme.palette.primary.main,
                    width: drawerWidth,
                }}
            >
                <Typography
                    variant='h6'
                    component={Link}
                    to='/'
                    onClick={resetState}
                    sx={{
                        color: 'inherit',
                        fontWeight: 'bold',
                        textDecoration: 'none',
                        ml: 2,
                    }}
                >
                    <Box display='flex' alignItems='center'>
                        <Box
                            component='img'
                            src={Logo}
                            sx={{width: 27, height: 27, mr: 0.3}}
                        />
                        <Box component='span'>Zero</Box>
                        <Box component='span' color='secondary.main'>
                            Fit
                        </Box>
                    </Box>
                </Typography>
            </Toolbar>
            <Toolbar
                sx={{
                    backgroundColor: 'white',
                    flexGrow: 1,
                }}
            />
        </AppBar>
    )
}

export default Header
