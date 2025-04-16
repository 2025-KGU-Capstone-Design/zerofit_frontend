import {
  Drawer,
  Box,
  Toolbar,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const navItems = [
  { label: "Home", to: "/home" },
  { label: "기업 정보 입력", to: "/company-info/step1" },
  { label: "AI 탄소 감축 솔루션", to: "/solution" },
  { label: "AI 최적 솔루션 제안", to: "/optimal-solution" },
];

const Sidebar = () => {
  return (
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
  );
};

export default Sidebar;
