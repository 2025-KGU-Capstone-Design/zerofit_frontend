import {AppBar, Toolbar, Typography, Box} from '@mui/material'
import {Link} from 'react-router-dom'

const drawerWidth = 240

const Header = () => {
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
                sx={{
                    backgroundColor: (theme) => theme.palette.primary.main,
                    width: drawerWidth,
                }}
            >
                <Typography
                    variant='h6'
                    component={Link}
                    to='/'
                    sx={{
                        textDecoration: 'none',
                        color: 'inherit',
                        fontWeight: 'bold',
                    }}
                >
                    {'Zero'}
                    <Box
                        component='span'
                        sx={{color: (theme) => theme.palette.secondary.main}}
                    >
                        Fit
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
