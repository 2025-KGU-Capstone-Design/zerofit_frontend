import {
    Drawer,
    Box,
    Toolbar,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Divider,
} from '@mui/material'
import {useLocation, Link, useNavigate} from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home'
import ApartmentIcon from '@mui/icons-material/Apartment'
import QueryStatsIcon from '@mui/icons-material/QueryStats'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import LogoutIcon from '@mui/icons-material/Logout'
import useCompanyInputStore from '@/store/useCompanyInputStore'
import {useAuth} from '@/hooks/useAuth'
import {useSnackbar} from '@/ui/CommonSnackbar'

const drawerWidth = 240

const navItems = [
    {label: 'Home', to: '/', icon: <HomeIcon />},
    {
        label: '기업 정보 입력',
        to: '/company-info/step1',
        match: '/company-info',
        icon: <ApartmentIcon />,
    },
    {
        label: 'AI 탄소 감축 솔루션 분석',
        to: '/solution',
        icon: <QueryStatsIcon />,
    },
    {
        label: '내 북마크',
        to: '/bookmark',
        icon: <BookmarkIcon />,
    },
]

const Sidebar = () => {
    const location = useLocation()
    const resetState = useCompanyInputStore((state) => state.resetState)

    const {isLoggedIn, logout} = useAuth()
    const navigate = useNavigate()
    const {openSnackbar} = useSnackbar()

    const handleLogout = () => {
        openSnackbar('로그아웃되었습니다.', 'info')
        logout()
        navigate('/')
    }

    return (
        <Drawer
            variant='permanent'
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    backgroundColor: (theme) => theme.palette.primary.main,
                },
            }}
        >
            <Toolbar />
            <Box sx={{overflow: 'auto'}}>
                <List>
                    {navItems.map((item) => {
                        const base = item.match ?? item.to
                        const isSelected =
                            item.to === '/'
                                ? location.pathname === '/'
                                : location.pathname.startsWith(base)
                        return (
                            <ListItem key={item.to} disablePadding sx={{mb: 1}}>
                                <ListItemButton
                                    component={Link}
                                    to={item.to}
                                    onClick={
                                        item.to === '/' ? resetState : undefined
                                    }
                                    selected={isSelected}
                                    sx={{
                                        color: 'white',
                                        '&.Mui-selected': {
                                            backgroundColor: '#1F2937',
                                            '&:hover': {
                                                backgroundColor: '#1F2937',
                                            },
                                            '& .MuiListItemIcon-root, & .MuiTypography-root':
                                                {
                                                    color: (theme) =>
                                                        theme.palette.secondary
                                                            .main,
                                                },
                                        },
                                    }}
                                >
                                    {item.icon && (
                                        <ListItemIcon
                                            sx={{
                                                minWidth: 32,
                                                color: 'inherit',
                                            }}
                                        >
                                            {item.icon}
                                        </ListItemIcon>
                                    )}
                                    <ListItemText
                                        primary={item.label}
                                        slotProps={{
                                            primary: {
                                                sx: {color: 'inherit'},
                                            },
                                        }}
                                    />
                                </ListItemButton>
                            </ListItem>
                        )
                    })}
                </List>
            </Box>
            {isLoggedIn && (
                <>
                    <Divider
                        sx={{mt: 'auto', bgcolor: 'rgba(255,255,255,0.2)'}}
                    />
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton
                                component={Link}
                                to='/mypage/search-history'
                                sx={{
                                    color: 'white',
                                    '&:hover': {
                                        backgroundColor:
                                            'rgba(255,255,255,0.1)',
                                    },
                                }}
                            >
                                <ListItemIcon sx={{color: 'inherit'}}>
                                    <AccountCircleIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary='마이페이지'
                                    slotProps={{
                                        primary: {sx: {color: 'inherit'}},
                                    }}
                                />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton
                                onClick={handleLogout}
                                sx={{
                                    color: 'white',
                                    '&:hover': {
                                        backgroundColor:
                                            'rgba(255,255,255,0.1)',
                                    },
                                }}
                            >
                                <ListItemIcon sx={{color: 'inherit'}}>
                                    <LogoutIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary='로그아웃'
                                    slotProps={{
                                        primary: {sx: {color: 'inherit'}},
                                    }}
                                />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </>
            )}
        </Drawer>
    )
}

export default Sidebar
