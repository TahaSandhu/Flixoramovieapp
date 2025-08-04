import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const navItems = ["Home", "About", "Services", "Contact"];

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        width: 250,
        backgroundImage: "linear-gradient(45deg, #00a4aa, #000)",
        color: "white",
        boxShadow: 3,
        height: "100vh",
      }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        Flixora
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItemButton key={item}>
            <ListItemText primary={item} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundImage: "linear-gradient(45deg, #00a4aa, #000)",
          color: "white",
          boxShadow: 3,
        }}
      >
        <Toolbar>
          <Typography variant="h6" sx={{ mr: 3 }}>
            Flixora
          </Typography>
          {!isMobile && (
            <Box sx={{ flexGrow: 1, display: "flex", gap: 2 }}>
              {navItems.map((item) => (
                <Button key={item} sx={{ color: "white" }}>
                  {item}
                </Button>
              ))}
            </Box>
          )}
          <Box
            sx={{ ml: "auto", display: "flex", alignItems: "center", gap: 1 }}
          >
            <Avatar alt="User" src="" sx={{ width: 32, height: 32 }} />
            {isMobile && (
              <IconButton
                color="inherit"
                edge="end"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
