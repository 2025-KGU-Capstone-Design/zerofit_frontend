import {
  Drawer,
  Box,
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ApartmentIcon from "@mui/icons-material/Apartment";
import QueryStatsIcon from "@mui/icons-material/QueryStats";

const drawerWidth = 240;

const navItems = [
  { label: "Home", to: "/home", icon: <HomeIcon /> },
  {
    label: "기업 정보 입력",
    to: "/company-info/step1",
    icon: <ApartmentIcon />,
  },
  {
    label: "AI 탄소 감축 솔루션 분석",
    to: "/solution",
    icon: <QueryStatsIcon />,
  },
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
          backgroundColor: (theme) => theme.palette.primary.main,
        },
      }}
    >
      <Toolbar sx={{ mt: 1 }} />
      <Box sx={{ overflow: "auto" }}>
        <List>
          {navItems.map((item) => (
            <ListItem
              key={item.to}
              component={Link}
              to={item.to}
              sx={{ mb: 1 }}
            >
              {item.icon && (
                <ListItemIcon
                  sx={{
                    minWidth: 32,
                    color: "white",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
              )}
              <ListItemText
                primary={item.label}
                slotProps={{
                  primary: {
                    sx: {
                      color: "white",
                    },
                  },
                }}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
