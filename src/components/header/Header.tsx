import { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import Image1 from "src/assets/images/1.jpg";
import { styles } from "./headerHelpers";

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" style={{ backgroundColor: "#6f8faf" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h6" noWrap component="a" sx={styles.title}>
            Lenny Reed
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem key="resume">
                <Button variant="text" href="/Lenny Reed Resume 2024.docx">
                  <Typography textAlign="center">Download Resume</Typography>
                </Button>
              </MenuItem>
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={styles.mobileTitle}
          >
            Lenny Reed
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "end",
              mr: 3,
              display: { xs: "none", md: "flex" },
            }}
          >
            <Button
              variant="text"
              href="/Lenny Reed Resume 2024.docx"
              sx={{ color: "#ffffff" }}
            >
              <Typography textAlign="center">Download Resume</Typography>
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Avatar alt="Lenny Avatar" src={Image1} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
