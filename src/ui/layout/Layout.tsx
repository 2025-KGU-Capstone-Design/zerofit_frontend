import {AppBar, Box, Drawer, List, ListItem, ListItemText, Toolbar, Typography} from "@mui/material";
import {Link, Outlet} from "react-router-dom";

const Layout = () => {

    const drawerWidth = 240

    const navItems = [
        {label: "Home", to: "/home"},
        {label: "기업 정보 입력", to: "/"}, //company-info
        {label: "AI 탄소 감축 솔루션", to: "/"}, //solution
        {label: "AI 최적 솔루션 제안", to: "/"}, //optimal-solution
    ];

    return <>
        <Box sx={{display: "flex"}}>
            <AppBar position={"fixed"}
                    sx={{zIndex: (theme) => theme.zIndex.drawer + 1}}>
                <Toolbar>
                    <Typography variant={"h6"}
                                component={Link}
                                to={"/"}>
                        Zero-Fit
                    </Typography>
                </Toolbar>
            </AppBar>

            <Drawer variant={"permanent"}
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        "& .MuiDrawer-paper": {
                            width: drawerWidth,
                            boxSizing: "border-box"
                        }
                    }}>
                <Toolbar/>
                <Box sx={{overflow: "auto"}}>
                    <List>
                        {navItems.map((item) => {
                            return (
                                <ListItem key={item.to} component={Link} to={item.to}>
                                    <ListItemText primary={item.label}/>
                                </ListItem>
                            );
                        })}
                    </List>
                </Box>
            </Drawer>

            <Box component="main" sx={{flexGrow: 1}}>
                <Outlet/>
            </Box>
        </Box>
    </>
};

export default Layout
