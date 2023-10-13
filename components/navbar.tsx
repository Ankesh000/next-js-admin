import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
const pages = ["My Events"];
const settings = ["Account settings", "Admin Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="relative"
      sx={{ backgroundColor: "common.black", top: 0, left: 0, right: 0 }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ paddingLeft: 0, paddingRight: 0 }}>
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="#"
            sx={{
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 500,
              letterSpacing: ".1rem",
              color: "white",
              textDecoration: "none",
            }}
          >
            BoomPop
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>
          <Box sx={{ flexGrow: 0 }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  mr: 7,
                  fontWeight: 700,
                  color: "white",
                  fontSize: 15,
                  display: "block",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ marginRight: 2 }}>
              <Avatar
                src="/favicon.ico"
                alt="Logo"
                style={{ width: "70px", height: "70px" }}
              />
            </Box>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="A" />
              </IconButton>
            </Tooltip>
            <Menu
  sx={{ top: "48px", right: 0 }}
  id="menu-appbar"
  anchorEl={anchorElUser}
  anchorOrigin={{
    vertical: "top",
    horizontal: "right",
  }}
  keepMounted
  transformOrigin={{
    vertical: "top",
    horizontal: "right",
  }}
  open={Boolean(anchorElUser)}
  onClose={handleCloseUserMenu}
>
  {settings.map((setting) =>
    setting === "Admin Dashboard" ? (
      <Link
        href="/admin"
        key={setting}
        style={{ textDecoration: "none" }}
      >
        <MenuItem onClick={handleCloseUserMenu}>
          <Typography align="center" sx={{ color: "black" }}>
            {setting}
          </Typography>
        </MenuItem>
      </Link>
    ) : (
      <MenuItem key={setting} onClick={handleCloseUserMenu}>
        <Typography align="center" sx={{ color: "black" }}>
          {setting}
        </Typography>
      </MenuItem>
    )
  )}
</Menu>

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
