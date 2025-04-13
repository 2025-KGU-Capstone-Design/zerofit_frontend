import React from "react";
import {
  AppBar,
  Box,
  Drawer,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  const drawerWidth = 240;

  const navItems = [
    { label: "Home", to: "/home" },
    { label: "기업 정보 입력", to: "/company-info/step1" },
    { label: "AI 탄소 감축 솔루션", to: "/solution" },
    { label: "AI 최적 솔루션 제안", to: "/optimal-solution" },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {navItems.map((item) => (
              <ListItem key={item.to} component={Link} to={item.to}>
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Main Content Area */}
      <Box sx={{ flexGrow: 1 }}>
        {/* Header */}
        <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{ textDecoration: "none", color: "inherit" }}
            >
              Zero-Fit
            </Typography>
          </Toolbar>
        </AppBar>
        {/* 페이지 콘텐츠가 헤더에 가리지 않도록 상단 여백 추가 */}
        <Box component="main" sx={{ mt: 8 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
