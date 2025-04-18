import {
    Drawer,
    Box,
    Toolbar,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material'
import {useLocation, Link} from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home'
import ApartmentIcon from '@mui/icons-material/Apartment'
import QueryStatsIcon from '@mui/icons-material/QueryStats'

const drawerWidth = 240

const navItems = [
    {label: 'Home', to: '/home', icon: <HomeIcon />},
    {
        label: '기업 정보 입력',
        to: '/company-info/step1',
        icon: <ApartmentIcon />,
    },
    {
        label: 'AI 탄소 감축 솔루션 분석',
        to: '/solution',
        icon: <QueryStatsIcon />,
    },
]

const Sidebar = () => {
    const location = useLocation()

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
                        const isSelected = location.pathname.startsWith(item.to)
                        return (
                            <ListItem key={item.to} disablePadding sx={{mb: 1}}>
                                <ListItemButton
                                    component={Link}
                                    to={item.to}
                                    selected={isSelected}
                                    sx={{
                                        color: 'white',
                                        '&.Mui-selected': {
                                            backgroundColor: '#1F2937', // theme으로 뺄까?
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
        </Drawer>
    )
}

export default Sidebar
